# LIVE_DEMO-> https://jobsphere-6fa10.web.app/, https://jobsphere-6fa10.firebaseapp.com/ 
## Overview JobSphere is a comprehensive job portal application that connects job seekers with recruiters. It provides features for job searching, application management, and job posting for recruiters. Built with React, Firebase Authentication, and a Node.js backend (not included in this repository).

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

# Project Structure
├── .firebase
    └── hosting.ZGlzdA.cache
├── .firebaserc
├── .gitignore
├── README.md
├── eslint.config.js
├── firebase.json
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
    └── vite.svg
├── src
    ├── App.css
    ├── App.jsx
    ├── Context
    │   ├── AuthContext.jsx
    │   └── AuthProvider.jsx
    ├── Firebase
    │   └── Firebase.init.js
    ├── Hooks
    │   ├── UseAxios.jsx
    │   └── UseJobs.jsx
    ├── Layout
    │   └── ManiLayout.jsx
    ├── Pages
    │   ├── Home.jsx
    │   ├── Recruiters
    │   │   ├── Addjob.jsx
    │   │   ├── MyPostedJob.jsx
    │   │   ├── ShowApplicants.jsx
    │   │   └── Test.jsx
    │   ├── Register.jsx
    │   ├── Shared
    │   │   ├── Footer.jsx
    │   │   ├── Navbar.jsx
    │   │   └── Spinner
    │   │   │   ├── Spinner.jsx
    │   │   │   └── spinner.css
    │   ├── SignIn.jsx
    │   └── components
    │   │   ├── ApplyJob.jsx
    │   │   ├── Banner.jsx
    │   │   ├── Categories.jsx
    │   │   ├── CategoriesCard.jsx
    │   │   ├── JobCard.jsx
    │   │   ├── JobDetails.jsx
    │   │   ├── JobHeroSection.jsx
    │   │   ├── Jobs.jsx
    │   │   └── MyApplications.jsx
    ├── Router
    │   ├── PrivateRoute.jsx
    │   └── Router.jsx
    ├── assets
    │   ├── Image
    │   │   ├── Candidate.png
    │   │   ├── JobImage.png
    │   │   ├── Screenshot 2025-08-01 023315.png
    │   │   ├── banner1.jpg
    │   │   ├── banner2.avif
    │   │   └── footerImg.png
    │   ├── Lottie
    │   │   ├── Login.json
    │   │   └── register.json
    │   └── react.svg
    ├── index.css
    └── main.jsx
├── tailwind.config.js
└── vite.config.js



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
