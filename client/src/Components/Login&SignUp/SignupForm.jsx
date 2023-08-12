import './Login&SignupForm.css'
import React from 'react'

function SignupForm({ toggleForm }) {
  return (
    <div className="container">
      <div className="signUp-form">
        <h1>Sign Up</h1>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Paasword' />
        <input type="submit" className='button' />
        <pre>Have an Account! <button onClick={toggleForm}>Login</button></pre>
      </div>
    </div>
  );
}

export default SignupForm;  