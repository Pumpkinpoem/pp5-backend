# A Cup of Fiction
![A Cup Of Fiction](../pp5-backend/frontend/src/assets/responsive.PNG)
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

### Purpose

The application serves as a hub for book clubs to interact, share reviews, post updates, and connect with like-minded individuals.

### Target Audience

This platform is ideal for book club members, avid readers, and literary communities looking for a dedicated space to share their love of books.

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

### Automated

I tried to set up aoutomation but i kept getting ReferenceError: TextEncoder is not defined
and it whas never explained in the lessions on how to handle difrent type of set up errors 

### Manual

Testing was ongoing throughout the development process. Chrome Dev Tools was used during the building to test the responsiveness and interactions. The deployed website is tested on Chrome, Opera GX, and Samsung S22 Ultra.
The site looks and works as intended.

- **Navbar/Links/Buttons:** Each link on the Navbar and pages works without any problem, same with the buttons. Rendering and navigation work as intended and expected.

- **Auth/Access:** Both the sign-in and sign-up forms work without problems. The request and redirecting send you to the correct pages.

Only users that have an account and are logged in have access to adding posts, and they can only edit/delete the posts and comments they've posted. They only have access to edit their own profile, username, and password.
Only logged-in users can post/edit/delete comments, like others' posts (not their own), and follow/unfollow other profiles.

## Credits

### Code

- Followed along the walkthrough projects "Moments" and "Django REST Framework" by Code Institute while making this project.

### Content

- All user accounts that exist at this moment where created by me.

### Media

- All images posted and profile pictures used by the users are AI generated from [Leonardo AI](https://app.leonardo.ai) and [Aitubo](https://aitubo.ai/).
- Favicon is a custom logo made in [Leonardo AI](https://app.leonardo.ai).
- I borrowed the icons and burger menu from the walkthrough "Moments", as I liked the look of them.
