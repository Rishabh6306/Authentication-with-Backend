import React from 'react'
import './SignupForm.css'

function SignupForm() {
  return (
    <div className="container">
      <div className="signUp-from">
        <h1>Log In</h1>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Paasword' />
        <input type="submit" className='button' />
        <pre>Have an Account! <a href="">Login</a></pre>
      </div>
    </div>
  )
}

export default SignupForm;