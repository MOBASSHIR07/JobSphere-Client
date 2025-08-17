# LIVE_DEMO-> https://jobsphere-6fa10.web.app/, https://jobsphere-6fa10.firebaseapp.com/ 
## Overview
 JobSphere is a comprehensive job portal application that connects job seekers with recruiters. It provides features for job searching, application management, and job posting for recruiters. Built with React, Firebase Authentication, and a Node.js backend (not included in this repository).

# Features
Job Seeker Features Browse and search jobs by category, location, or type

View detailed job information

Apply for jobs with resume and profile links

Track application status

Manage applications (view/delete)




# Recruiter Features
Post new job listings with rich details

View and manage posted jobs

See applicants for each job

Update applicant status (Hired/Interview/Pending/Rejected)




# Authentication 
Email/password registration and login

Google sign-in

Protected routes

JWT-based session management

# Technical Stack 
Frontend React (Vite)

React Router for navigation

Tailwind CSS with DaisyUI for styling

Firebase Authentication

Axios for API calls

Framer Motion for animations

React Hot Toast for notifications

React Icons and Lucide Icons





# Backend Node.js

Express

MongoDB

## Project Structure

```bash
src/
├── Context/               # Authentication context
│   ├── AuthContext.jsx
│   └── AuthProvider.jsx
├── Hooks/                 # Custom hooks
│   ├── UseAxios.jsx       # Axios instance with interceptors
│   └── UseJobs.jsx
├── Layout/                # Main application layout
│   └── ManiLayout.jsx
├── Pages/                 # Page components
│   ├── Home.jsx           # Home page
│   ├── Recruiters/        # Recruiter-specific pages
│   │   ├── Addjob.jsx     # Job posting form
│   │   ├── MyPostedJob.jsx # Posted jobs list
│   │   ├── ShowApplicants.jsx # View applicants
│   │   └── Test.jsx       # Component testing
│   ├── Shared/            # Shared components
│   │   ├── Footer.jsx
│   │   └── Navbar.jsx
│   ├── components/        # Reusable components
│   │   ├── ApplyJob.jsx   # Job application form
│   │   ├── Banner.jsx     # Home page banner
│   │   ├── Categories.jsx # Job categories
│   │   ├── CategoriesCard.jsx
│   │   ├── JobCard.jsx    # Individual job card
│   │   ├── JobDetails.jsx # Job details page
│   │   ├── JobHeroSection.jsx
│   │   ├── Jobs.jsx       # Jobs listing
│   │   └── MyApplications.jsx # User's applications
│   ├── Register.jsx       # Registration page
│   └── SignIn.jsx         # Login page
├── Router/                # Routing configuration
│   ├── PrivateRoute.jsx   # Protected routes
│   └── Router.jsx         # Main router
└── main.jsx               # Application entry point
```

# Key Implementation Details
Authentication Uses Firebase Authentication with email/password and Google providers

JWT tokens are stored in HTTP-only cookies for security

Context API provides authentication state to the entire app





# Data Fetching 
Custom UseAxios hook creates an Axios instance with:

Base URL configuration

Response interceptors for handling 401/403 errors

Automatic JWT token inclusion in requests







# Performance Optimizations
Code splitting with React.lazy and Suspense

Memoization of components with React.memo

Lazy loading of non-critical components







# UI/UX Features
Animated transitions with Framer Motion

Responsive design with Tailwind CSS

Loading states and error handling

Form validation with user-friendly feedback




# Future Improvements
Implement job search functionality

Add bookmarking/saving jobs feature

Enhance recruiter dashboard with analytics

Add user profile management

Implement real-time notifications

Add resume upload and parsing functionality
