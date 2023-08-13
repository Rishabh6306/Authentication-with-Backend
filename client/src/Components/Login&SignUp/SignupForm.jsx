import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function SignupForm() {
  // State variables to store form field values and messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // React Router's hook for navigation
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send user registration data to the server
      const response = await axios.post('http://localhost:3001/register', {
        name,
        email,
        password,
      });

      // Display success message, log server response, and navigate to login
      setMessage('User registered successfully');
      console.log('Form submitted successfully:', response.data);
      navigate('/login'); // Redirect to the login page
    } catch (error) {
      // Handle errors: Display custom error messages or log generic error
      if (error.response && error.response.data && error.response.data.error) {
        setMessage('User already exists'); // Set custom error message
      } else {
        setMessage('An error occurred'); // Set generic error message
        console.error(error);
      }
    }
  };

  return (
    <div className="container">
      <form className="signUp-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {/* Input fields for name, email, and password */}
        <input
          type="text"
          placeholder="Name"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Submit button */}
        <input type="submit" className="button" />
        {/* Link to the login page */}
        <pre>
          Already have an account? <Link className='btn' to="/login">Login</Link>
        </pre>
        {/* Display success or error message */}
        <p>{message}</p>
      </form>
    </div>
  );
}

export default SignupForm;