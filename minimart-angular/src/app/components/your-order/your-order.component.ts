import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { OrderResponse } from 'src/app/responses/order/order.response';

@Component({
  selector: 'app-your-order',
  templateUrl: './your-order.component.html',
  styleUrls: ['./your-order.component.scss']
})
export class YourOrderComponent implements OnInit {
  orders: OrderResponse[] = [];
  userId: number | null = null; // Assuming user ID is a number
  keyword: string = ''; // Từ khóa tìm kiếm
  currentPage: number = 1; // Trang hiện tại
  totalPages: number = 1; // Tổng số trang
  itemsPerPage: number = 10; // Số lượng đơn hàng mỗi trang
  visiblePages: number[] = []; // Các trang hiển thị trong phân trang

  constructor(
    private orderService: OrderService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.getCurrentUserId(); // Lấy userId từ localStorage
    if (this.userId) {
      this.getOrdersByUserId(this.userId);
    } else {
      console.error('User not logged in');
      this.router.navigate(['/login']);
    }
  }

  // Lấy userId từ localStorage
  private getCurrentUserId(): number | null {
    const user = this.userService.getUserResponseFromLocalStorage();
    return user ? user.id : null;
  }

  // Lấy danh sách đơn hàng của người dùng
  getOrdersByUserId(userId: number): void {
    this.orderService.getOrdersByUserId(userId).subscribe({
      next: (response: OrderResponse[]) => {
        this.orders = response;
        this.totalPages = Math.ceil(response.length / this.itemsPerPage); // Tính tổng số trang
        this.visiblePages = this.generateVisiblePageArray(this.currentPage, this.totalPages);
      },
      error: (error: any) => {
        console.error('Error fetching user orders:', error);
      }
    });
  }

  // Tìm kiếm đơn hàng theo từ khóa
  searchOrders(): void {
    if (this.userId) {
      this.orderService.getOrdersByUserId(this.userId).subscribe({
        next: (response: OrderResponse[]) => {
          this.orders = response.filter(order =>
            order.fullname.toLowerCase().includes(this.keyword.toLowerCase())
          );
        },
        error: (error: any) => {
          console.error('Error fetching user orders:', error);
        }
      });
    }
  }

  // Điều hướng tới chi tiết đơn hàng
  viewOrderDetails(order:OrderResponse) {
    debugger
    this.router.navigate(['/orders', order.id]);
  }

  // Xử lý khi thay đổi trang
  onPageChange(page: number): void {
    this.currentPage = page;
    if (this.userId) {
      this.getOrdersByUserId(this.userId);
    }
  }

  // Tạo mảng các trang hiển thị
  generateVisiblePageArray(currentPage: number, totalPages: number): number[] {
    const maxVisiblePages = 5;
    const halfVisiblePages = Math.floor(maxVisiblePages / 2);

    let startPage = Math.max(currentPage - halfVisiblePages, 1);
    let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }
}
