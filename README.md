# 🛒 Mini Supermarket Website

A web-based management and shopping system designed for mini supermarkets.
The platform allows customers to browse products, add items to the cart, place orders, and track order status, while administrators can manage products, categories, and orders efficiently.

This project was developed as part of a university coursework project at Hanoi University of Science and Technology.

# 📌 Introduction

In modern retail businesses, digital transformation plays an important role in improving operational efficiency and customer experience. Traditional mini supermarkets often face challenges in managing inventory, orders, and customer interactions.

This project proposes a web-based supermarket management system that helps automate these processes and supports both online shopping and product management.

The system provides a convenient shopping platform for customers and a powerful management interface for administrators.

# 🛠 Tech Stack
Frontend

Angular

TypeScript

HTML / CSS

Backend

Spring Boot

RESTful API

Hibernate / JPA

Database

MySQL

XAMPP

The system follows an MVC architecture combined with RESTful APIs, where Angular handles the user interface and Spring Boot processes business logic.

# ✨ Features
## 👤 Customer

Customers can:

Register and login

Search products

View product details

Add products to cart

Manage shopping cart

Place orders

Track order status

These features allow users to complete the entire purchasing process online.

## 🛠 Admin

Administrators can:

Manage product categories

Add, edit, and delete products

View and process orders

Update order status

Manage product information

This helps store managers control inventory and handle customer orders efficiently.

# 🗄 Database

Main tables used in the system:

Table	Description
Users	Stores user information
Roles	Stores user roles
Products	Stores product information
Categories	Stores product categories
Orders	Stores customer orders
Order_Details	Stores detailed order items
Product_Images	Stores product images

These tables support core operations such as product management, order tracking, and user management.

# 🏗 System Architecture

The system is designed using a three-layer architecture:

Frontend (Angular)
        ↓
REST API
        ↓
Backend (Spring Boot)
        ↓
Database (MySQL)
Frontend

Displays product lists

Handles user interactions

Sends API requests to backend

Backend

Handles business logic

Processes orders

Manages product data

Database

Stores products

Stores users

Stores orders

# ⚙️ Installation

Clone repository

''' bash git clone https://github.com/thedat03/Sieuthimini.git ''''

cd Sieuthimini

Run Backend

cd backend

mvn spring-boot:run

Backend runs at:

'''bash http://localhost:8080 '''

Run Frontend

cd frontend

npm install

npm start

Frontend runs at:

'''bash http://localhost:4200 '''

# 📷 Screenshots
Homepage

Displays product list and categories.

Product Detail Page

Shows product description, price, and images.

Shopping Cart

Allows users to manage selected products.

Admin Dashboard

Admin can manage products, categories, and orders.

# 📈 Future Improvements

Possible improvements include:

Integrating online payment (VNPay, MoMo)

Product recommendation system

Customer reviews and ratings

Live chat support

Cloud deployment (AWS, Azure)

These enhancements will improve scalability and user experience.
