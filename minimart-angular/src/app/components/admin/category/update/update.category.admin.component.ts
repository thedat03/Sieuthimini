import { Component, OnInit } from '@angular/core';
import { Category } from '../../../../models/category';
import { CategoryService } from '../../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateCategoryDTO } from '../../../../dtos/category/update.category.dto';


@Component({
  selector: 'app-detail.category.admin',
  templateUrl: './update.category.admin.component.html',
  styleUrls: ['./update.category.admin.component.scss']
})

export class UpdateCategoryAdminComponent implements OnInit {
  categoryId: number;
  updatedCategory: Category;
  
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
  
  ) {
    this.categoryId = 0;    
    this.updatedCategory = {} as Category;  
  }

  ngOnInit(): void {    
    this.route.paramMap.subscribe(params => {
      debugger
      this.categoryId = Number(params.get('id'));
      this.getCategoryDetails();
    });
    
  }
  
  getCategoryDetails(): void {
    this.categoryService.getDetailCategory(this.categoryId).subscribe({
      next: (category: Category) => {        
        this.updatedCategory = { ...category };                        
      },
      complete: () => {
        
      },
      error: (error: any) => {
        
      }
    });     
  }
  updateCategory(): void {
    const updateCategoryDTO: UpdateCategoryDTO = {
        name: this.updatedCategory.name,      
    };
    this.categoryService.updateCategory(this.updatedCategory.id, updateCategoryDTO).subscribe({
        next: (response: any) => {  
            console.log('Category updated successfully:', response);
            alert('Category updated successfully!');
        },
        complete: () => {
            this.router.navigate(['/admin/categories']); // Điều hướng sau khi cập nhật thành công
        },
        error: (error: any) => {
            console.error('Error updating category:', error);
            alert(error.error || 'Failed to update category.');
        }
    });  
}

}
