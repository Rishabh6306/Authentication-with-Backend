import React from 'react';
import './Login&SignupForm.css';

function LoginForm({ toggleForm }) {
  return (
    <div className="container">
      <div className="login-form">
        <h1>Log In</h1>
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Password' />
        <input type="submit" className='button' />
        <pre>Create an account! <button onClick={toggleForm}>Sign Up</button></pre>
      </div>
    </div>
  );
}

export default LoginForm;