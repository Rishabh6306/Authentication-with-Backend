# User Authentication System

Welcome to the User Authentication System project! This repository contains a robust authentication system that enables users to securely register and log into their accounts. The project employs a combination of frontend and backend technologies to deliver a seamless user experience.

## Features

- **User Registration:** New users can create accounts by providing their name, email, and password. The system ensures that each email is unique.

- **Secure Login:** Registered users can securely log into their accounts using their email and password. Passwords are stored securely using hashing.

- **Error Handling:** Comprehensive error handling is in place for various scenarios, including invalid inputs, existing accounts, and server errors.

- **MongoDB Database:** User data is stored in a MongoDB database hosted on MongoDB Atlas, ensuring data persistence and reliability.

- **Protected Area:** After successful login, users are granted access to a protected area where they can interact with personalized content.

## Tech Stack

### Frontend

- **Framework:** React with Vite
- **Styling:** CSS modules
- **Routing:** React Router
- **HTTP Requests:** Axios

### Backend

- **Framework:** Node.js with Express
- **Database:** MongoDB with MongoDB Atlas
- **ORM:** Mongoose
- **Authentication:** Custom middleware and password hashing

## Getting Started

1. **Clone the Repository:** Start by cloning this repository to your local machine.

2. **Install Dependencies:**
   - In the `client` folder, run `npm install` to install frontend dependencies.
   - In the `server` folder, run `npm install` to install backend dependencies.

3. **Configure Environment Variables:**
   - Create a `.env` file in the `client` and `server` folders.
   - In the `client` `.env` file, specify any necessary frontend environment variables.
   - In the `server` `.env` file, set your `MONGODB_URI` and other backend variables.

4. **Run the Application:**
   - In the `client` folder, run `npm run dev` to start the frontend development server.
   - In the `server` folder, run `nodemon start` or `node index.js` to start the backend server.

## Folder Structure

- `Authentication with Backend`
  - `client` (Frontend)
    - `src`
      - `components`
        - `HomePage`
        - `Login&SignUp`
          - `LoginForm.jsx`
          - `SignupForm.jsx`
          - `Login&SignupForm.css`
      - `app.js`
      - `app.css`

  - `server` (Backend)
    - `config`
    - `controller`
    - `modules`
    - `routes`
    - `index.js`

## Contact

For any questions, feedback, or collaboration opportunities, feel free to reach out:

- LinkedIn: [https://www.linkedin.com/in/rishabh6306](https://www.linkedin.com/in/rishabh6306)
- Email: [rishabhsrivastav722@gmail.com](mailto:rishabhsrivastav722@gmail.com)