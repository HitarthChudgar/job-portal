# Job Management Application

A **React** and **Vite** based job management application that allows users to add, update, and view job postings. The app uses **React Router** for seamless navigation and **React Toastify** for notifications.

## Features

- **Add Job**: Create new job postings with details such as title, type, location, description, salary, and company information.
- **Edit Job**: Modify existing job postings easily with a pre-filled form.
- **View Job**: View detailed information about a specific job.
- **Responsive Design**: Optimized for both desktop and mobile users with a user-friendly interface.

## Project Structure

bash

Copy code

`src/
│
├── assets/               # Contains static assets like images and icons
├── layouts/
│   └── MainLayout.jsx     # Defines the main layout for the application
├── pages/
│   ├── AddJob.jsx         # Component to add a new job posting
│   ├── EditJobPage.jsx    # Component to edit an existing job posting
│   └── JobPage.jsx        # Component to view detailed job information
└── ...`

## Installation

1.  **Clone the repository**:

    bash

    Copy code

    `git clone <repository-url>`

2.  **Navigate to the project directory**:

    bash

    Copy code

    `cd job-management-app`

3.  **Install dependencies**:

    bash

    Copy code

    `npm install`

4.  **Start the development server**:

    bash

    Copy code

    `npm run dev`

## Usage

- **Add a Job**: Go to the "Add Job" page, fill out the form, and submit to add a new job posting.
- **Edit a Job**: Navigate to the job you wish to edit, click "Edit", update the details, and submit the form.
- **View Job Details**: Click on a job title to view its details, including type, title, location, description, and salary.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast and efficient development build tool.
- **React Router**: Client-side routing for navigating between pages.
- **React Toastify**: For displaying elegant notifications.
- **Tailwind CSS**: A utility-first CSS framework for quick and responsive styling.
