import './Login&SignupForm.css'
import React, { useState } from 'react'
import axois from 'axios'

function SignupForm({ toggleForm }) {
const [name, setName] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()


const handleSubmit = (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  axois.post('http://localhost:3001/register', {name, email, password})
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
}

  return (
    <div className="container">
      <form className="signUp-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
        <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Paasword' onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" className='button' />
        <pre>Have an Account! <button onClick={toggleForm}>Login</button></pre>
      </form>
    </div>
  );
}

export default SignupForm;  