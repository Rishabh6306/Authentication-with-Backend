# Authentication with Backend - User Login and Signup

This project includes a user login and signup functionality. Users can create an account through the signup page and then log in using their email and password. The application is built using React (Vite) for the frontend and Node.js with Express.js, Axios, and MongoDB Atlas for the backend. The user's account information is stored in a MongoDB database.

## Functionality

1. The user visits the signup page and creates an account using their name, email, and password.
2. After successfully creating an account, the user can proceed to the login page.
3. On the login page, the user enters their registered email and password to log in.
4. Upon successful login, the user is redirected to a page.
5. If the user enters incorrect credentials or faces any issues, appropriate error messages are displayed.

## Folder Structure

- `Authentication with Backend`
  - `client` (Frontend)
    - `src`
      - `components`
        - `HomePage` (contains files related to the home page)
        - `Login&SignUp` (contains files related to login and signup forms)
          - `LoginForm.jsx` (code for the login form)
          - `SignupForm.jsx` (code for the signup form)
          - `Login&SignupForm.css` (styling for login and signup forms)
    - `app.js` (entry point for the Vite app)
    - `app.css` (styling for the app)
  
  - `server` (Backend)
    - `config` (configuration files)
    - `controller` (controller functions for handling routes)
    - `modules` (Mongoose schema and model)
    - `routes` (Express routes)
    - `index.js` (entry point for the server)

## Running the Project

1. Make sure Node.js is installed on your system.
2. Run `npm install` in both the `client` and `server` folders to install dependencies.
3. In one terminal, navigate to the `client` folder and run `npm run dev` to start the frontend.
4. In another terminal, navigate to the `server` folder and run `nodemon start` or `node index.js` to start the backend.
5. Ensure that your MongoDB URI and port are properly configured in `.env` files.

## Contact

For any inquiries or assistance, feel free to reach out:
- LinkedIn: [Your LinkedIn Profile URL](https://www.linkedin.com/in/rishabh6306)
- Email: [Your Email Address](rishabhsrivastav722@gmail.com)