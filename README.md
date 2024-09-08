# A Cup of Fiction
![A Cup Of Fiction](/frontend/src/assets/responsive.PNG)
**A Cup of Fiction** is a social media platform tailored specifically for book clubs. It allows users to share their thoughts on books, connect with other readers, and participate in lively discussions.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Frontend Structure](#frontend-structure)
8. [Backend Structure](#backend-structure)
9. [Color Scheme](#color-scheme)
10. [Testing](#testing)
11. [Credit](#credit)


## Project Overview

A Cup of Fiction is designed to bring book enthusiasts together in a digital space. Whether you're discussing the latest bestseller or diving deep into a classic novel, this platform provides the tools to foster engaging conversations and meaningful connections.

## Wireframes

[WireFrames](/wireframe_template.md)

documentation from the wireframes


### Purpose

The application serves as a hub for book clubs to interact, share reviews, post updates, and connect with like-minded individuals.

### Target Audience

This platform is ideal for book club members, avid readers, and literary communities looking for a dedicated space to share their love of books.


## Moscow documentation

[Moscow](/readme_images/moscow.PNG)


## User Stories

| Category  | As        | I can                          | so that I can                                                        | UI Components                                |
| --------- | --------- | ------------------------------ | -------------------------------------------------------------------- | -------------------------------------------- |
| auth      | a user    | sign up for an account         | have a personalized profile with a profile picture                   | SignUpForm<br>ProfilePage<br>ProfileEditForm |
| auth      | a user    | sign up for an account         | make, like and comment on other users content                        | Post<br>PostPage<br>Comment                  |
| auth      | a user    | sign up for an account         | follow and unfollow other users                                      | Profile<br>ProfilePage                       |
| posts     | a visitor | view a list of posts           | browse the newest content                                            | PostsPage                                    |
| posts     | a visitor | view a specific post           | see likes and read comments                                          | Post<br>PostPaget                            |
| posts     | a visitor | search a list of posts         | find posts by specific users or titles                               | PostsPage                                    |
| posts     | a visitor | scroll through a list of posts | browse more comfortably                                              | InfiniteScrollComponent                      |
| posts     | a user    | edit/delete my own posts       | edit or hide unwanted mistakes                                       | PostEditForm<br>MoreDropdownMenu             |
| posts     | a user    | make posts                     | share pictures with others                                           | PostCreateForm                               |
| posts     | a user    | view posts that I liked        | go back to all my liked posts                                        | PostsPage                                    |
| posts     | a user    | view posts from followed users | keep up with users content that I enjoy                              | PostsPage                                    |
| likes     | a user    | like posts                     | show my interest in users content                                    | Post like icon                               |
| likes     | a user    | unlike posts                   | show my loss of interest in users content                            | Post (un)like icon                           |
| comments  | a user    | post a comment                 | share thoughts on others posts                                       | PostPage<br>CommentCreateForm                |
| comments  | a user    | edit/delete my own comments    | edit or hide my comments                                             | PostPage<br>Comment<br>MoreDropdownMenu      |
| profiles  | a user    | view profiles                  | see users posts + followers and following count                      | ProfilePage<br>Post                          |
| profiles  | a user    | edit my profile                | update my information                                                | ProfileEditForm                              |
| followers | a user    | follow profiles                | show my interest in users content                                    | Profile follow button                        |
| followers | a user    | unfollow profiles              | show my loss of interest in users content and remove it from my feed | Profile (un)follow button                    |

## Features

- **User Authentication**: Secure login and registration system.
- **User Profiles**: Customize your profile and see others' reading habits and posts.
- **Posts and Comments**: Share your thoughts on books and interact with other users.
- **Follow System**: Follow other readers to stay updated on their posts.
- **Search Functionality**: Easily find books, users, and discussions.
- **Responsive Design**: Seamlessly browse on any device.

## Tech Stack

### Frontend

- **React**: JavaScript library for building user interfaces.
- **React Router**: For routing and navigation.
- **Axios**: For making HTTP requests to the backend.
- **CSS Modules**: For styling components with scoped CSS.

### Backend

- **Django**: High-level Python web framework.
- **Django REST Framework**: Toolkit for building Web APIs.
- **SQLite**: Lightweight database for development.
- **Gunicorn**: WSGI HTTP server for UNIX.

## Installation

### Prerequisites

- Node.js and npm installed for frontend.
- Python 3.x installed for backend.
- Virtualenv for managing Python packages.

### Backend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/pp5-backend-main.git
   cd pp5-backend-main
   ```

2. **Create a virtual environment and install dependencies:**

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   ```

3. **Run the development server:**

   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/pp5-frontend-main.git
   cd pp5-frontend-main
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the frontend development server:**

   ```bash
   npm start
   ```

### Local Development

Deployed using Heroku:

1. Log in/sign up to Heroku.
2. Go to your Heroku App and click on "Deploy".
3. At the section "Deployment method", click "GitHub" and connect your account with Heroku.
4. When you're connected, search for the project you wanna connect the app to and click on it.
5. Click "Deploy Branch".
6. Your app will now be deployed to GitHub and when it's done you can click "Open App".

## Usage

- Access the application at `http://localhost:8000` for the backend and `http://localhost:3000` for the frontend.
- Register an account, create your profile, and start posting about your favorite books!

## API Endpoints

Here’s a brief overview of the key API endpoints provided by the backend:

- **`/api/auth/`**: Endpoints for user authentication (login, register, etc.).
- **`/api/posts/`**: CRUD operations for posts.
- **`/api/comments/`**: CRUD operations for comments.
- **`/api/profiles/`**: Endpoints for managing user profiles.
- **`/api/follow/`**: Follow and unfollow users.

## Frontend Structure

- **`/src/components`**: Reusable components like buttons, forms, and cards.
- **`/src/pages`**: Pages corresponding to different routes (e.g., `Home`, `Profile`, `PostPage`).
- **`/src/contexts`**: Context providers for managing global state (e.g., `AuthContext`).
- **`/src/styles`**: CSS modules for styling the application.

## Backend Structure

- **`/cup`**: Main Django app handling authentication, API routing, and settings.
- **`/posts`**: Django app managing post creation, editing, and deletion.
- **`/comments`**: Django app managing comments on posts.
- **`/profiles`**: Django app handling user profiles and follow system.

## Color Scheme

### Color Palette

For this project, I have selected a cozy and inviting color palette to align with the brand identity, which is focused on book clubs and creating a comfortable, easy-on-the-eyes experience.

#### Primary Colors:

![Color Scheme](../pp5-backend/frontend/src/assets/color_scheme_with_hex.png)

- **Light Moss Green (#CBDFBD):** A soft, soothing green that serves as the main background color, providing a calming atmosphere.
- **Soft Buttercream (#F6F4D2):** A gentle off-white used for borders, adding a warm contrast without being too harsh.
- **Chestnut (#A44A3F):** A rich, warm color used for primary text, ensuring excellent readability against the lighter backgrounds.
- **Light Sage (#D4E09B):** A light, creamy color used for secondary text, keeping the design soft and easy to read.
- **Peachy Coral (#F19C79):** A vibrant orange used sparingly for accent elements like buttons and links, drawing attention without overwhelming the user.

### Analogous Colors

In color theory, an **analogous** color scheme involves colors that are next to each other on the color wheel. These colors usually match well and create serene and comfortable designs. The analogous scheme used here incorporates shades of green, yellow, and orange to achieve a harmonious and welcoming look that resonates with the warmth and community spirit of book clubs.

## Testing

### Known Bugs

[Documented bugs](/BUG_REPORT.md)

### Automated

I tried to set up automation but I kept getting `ReferenceError: TextEncoder is not defined`. This issue was not explained in the lessons, and I'm still working on resolving it.

## Manual Testing Documentation

### **Front-End (React)**

#### **1. Navigation Testing**
- **Objective**: Ensure all navigation links work as expected and lead to the correct pages.
- **Tested Pages**:
  - Home Page
  - Posts Page
  - Profile Page
  - Login/Signup
- **Procedure**: 
  - Click each navigation link on the navbar and footer.
  - Confirm that the page loads correctly and the URL updates.
  - Verify that the content matches the page you are navigating to.

- **Result**: All links redirect to the correct pages and load the necessary components.

#### **2. Form Submission Testing**
- **Objective**: Test the forms for creating, editing, and deleting posts, comments, and profiles.
- **Tested Forms**:
  - Create Post Form
  - Edit Post Form
  - Comment Form
  - Profile Edit Form
- **Procedure**: 
  - Fill out the forms with valid and invalid data.
  - Submit the forms and observe the behavior.
  - Check for proper error handling (e.g., missing required fields).
  - Ensure that the data updates correctly after submission.

- **Result**: Forms submit data correctly with validation errors for invalid inputs.

#### **3. Authentication Testing**
- **Objective**: Test the authentication system to ensure login, signup, and session management are working.
- **Procedure**:
  - Sign up for a new account.
  - Log in using the new account credentials.
  - Verify session persistence by refreshing the page.
  - Log out and confirm that protected pages are no longer accessible.

- **Result**: Authentication works as expected; users can log in, sign up, and log out.

#### **4. Responsive Design Testing**
- **Objective**: Ensure the application is fully responsive and works across different screen sizes (mobile, tablet, desktop).
- **Procedure**:
  - Test the app on various devices (e.g., phone, tablet, desktop) or use Chrome Dev Tools for different screen sizes.
  - Verify that the layout adjusts accordingly, with no overlapping elements or broken designs.
  
- **Result**: The layout is responsive and adapts to different screen sizes without issues.

---

### **Back-End (Django)**

#### **1. CRUD Functionality Testing**
- **Objective**: Ensure the CRUD operations (Create, Read, Update, Delete) work for posts, comments, likes, and profiles.
- **Procedure**:
  - **POST**: Create new entries (posts, comments, likes) via the API.
  - **GET**: Retrieve lists and individual entries using the appropriate endpoints.
  - **PUT**: Update existing entries and verify the changes.
  - **DELETE**: Delete entries and ensure they are removed from the database.
  
- **Result**: All CRUD operations work as expected; data is correctly created, retrieved, updated, and deleted.

#### **2. API Authentication Testing**
- **Objective**: Ensure only authenticated users can perform protected actions (creating posts, comments, likes, etc.).
- **Procedure**:
  - Attempt to access protected API routes without authentication.
  - Log in and access the protected routes again.
  - Verify that access control is enforced (e.g., unauthorized users cannot delete posts they don’t own).

- **Result**: Authentication is properly enforced, preventing unauthorized actions.

#### **3. Error Handling Testing**
- **Objective**: Test for proper error handling for invalid data and incorrect API usage.
- **Procedure**:
  - Submit invalid data (e.g., missing fields, wrong formats) to API endpoints.
  - Verify that the API returns appropriate error messages and status codes.
  
- **Result**: The API handles errors gracefully with clear error messages and proper status codes.

#### **4. Database Integrity Testing**
- **Objective**: Ensure data consistency and integrity in the database.
- **Procedure**:
  - Create multiple entries in the database and verify data relationships (e.g., posts tied to users).
  - Test deletion of related data and check for cascading effects (e.g., deleting a user also deletes their posts, if applicable).
  
- **Result**: Data integrity is maintained, and relationships between models are handled correctly.

---

### **Browser and Device Testing**

#### **Browsers Tested**:
- Chrome (Desktop and Mobile)
- Opera GX
- Samsung S22 Ultra (Mobile)

#### **Devices Tested**:
- Desktop
- Mobile (Samsung S22 Ultra)

#### **Results**: 
- The site works as expected across different browsers and devices, with consistent performance and responsive design.

---

### Conclusion
All manual tests were successfully completed. The application meets the expected functionality for both front-end and back-end components, including navigation, form handling, authentication, and API operations. Minor adjustments may be required for advanced validation and error handling, but core features work smoothly.


## Credits

### Code

- Followed along the walkthrough projects "Moments" and "Django REST Framework" by Code Institute while making this project.

### Content

- All user accounts that exist at this moment where created by me.

### Media

- All images posted and profile pictures used by the users are AI generated from [Leonardo AI](https://app.leonardo.ai) and [Aitubo](https://aitubo.ai/).
- Favicon is a custom logo made in [Leonardo AI](https://app.leonardo.ai).
- I borrowed the icons and burger menu from the walkthrough "Moments", as I liked the look of them.
