🚀 Online Programming Learning Platform

A full-stack web platform designed to help learners study programming through courses, coding practice, and progress tracking.

The system integrates an online coding environment, automatic code grading, and AI-powered feedback to enhance the programming learning experience.

📌 Introduction

Programming has become an essential skill in the modern digital world. However, many learners face difficulties when theory and practical coding environments are separated.

This project develops an online programming learning platform that connects the entire learning workflow, including:

Learning through video lectures and documents

Practicing coding exercises directly in the browser

Automatic grading using predefined test cases

Tracking learning progress for each learner

The platform provides a unified system that helps learners improve their programming skills more effectively.

🛠 Tech Stack
Frontend

ReactJS

TailwindCSS

Axios

Backend

Spring Boot

Spring Security

JWT Authentication

RESTful API

Database

MySQL

External Services

Judge0 API (Code execution and grading)

Gemini API (AI-powered feedback)

✨ Features
👨‍🎓 Learner (Student)

Register and login

Browse programming courses

Watch lecture videos

Read learning materials

Take quizzes and exams

Practice coding exercises

Submit code and receive automatic grading

View AI-generated feedback

Track learning progress

👨‍🏫 Teacher

Create and manage programming courses

Organize course modules and lessons

Upload lecture videos and learning materials

Create quizzes and coding exercises

Define test cases for automatic grading

Submit courses for admin approval

🧑‍💻 Teaching Assistant

Monitor student learning progress

Answer student questions

Provide guidance and reminders

Support teachers in managing courses

👨‍💼 Admin

Manage users and roles

Approve or reject courses created by teachers

Assign teaching assistants to courses

Manage system operations and content

👥 User Roles
Role	Description
Learner	Participate in courses and practice programming
Teacher	Create and manage courses
Teaching Assistant	Support learners and monitor progress
Admin	Manage users, courses, and system operations
🏗 System Architecture

The system follows a Client–Server architecture using RESTful APIs.

Frontend (ReactJS)
        ↓
REST API
        ↓
Backend (Spring Boot)
        ↓
Database (MySQL)
        ↓
External Services (Judge0 API / Gemini API)
Architecture Overview

Frontend handles user interface and user interaction

Backend processes business logic and APIs

Database stores users, courses, and learning progress

Judge0 API executes code in isolated environments

Gemini API generates AI-powered feedback for learners

⚙️ Installation
1️⃣ Clone the repository
git clone https://github.com/yourusername/programming-learning-platform.git
2️⃣ Backend setup
cd backend
mvn spring-boot:run

Backend runs on:

http://localhost:8080
3️⃣ Frontend setup
cd frontend
npm install
npm start

Frontend runs on:

http://localhost:3000
🗄 Database

Import the provided SQL file into MySQL.

Main database tables include:

Users

Courses

Modules

Lessons

Quizzes

Coding Exercises

Learning Progress

Payments

📷 Screenshots
Course Listing Page

Displays available programming courses for learners.

Coding Practice Interface

Learners can write and run code directly in the browser and submit solutions to test against predefined test cases.

Student Progress Tracking

Teaching assistants can monitor learner progress and provide timely support.

🔐 Security

The system implements several security mechanisms:

JWT Authentication

Role-Based Access Control (RBAC)

Secure API endpoints

Input validation

📈 Future Improvements

Possible future improvements include:

Mobile application support

AI-based course recommendations

Real-time collaborative coding

More programming language support

System performance optimization and scaling

👨‍💻 Author

Nguyễn Thế Đạt
Hanoi University of Science and Technology

⭐ Project Purpose

This project was developed as a graduation thesis to explore the design and implementation of an integrated online programming learning platform.
