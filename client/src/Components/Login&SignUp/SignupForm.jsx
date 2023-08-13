import React, { useState } from 'react';
import axios from 'axios';

function SignupForm({ toggleForm }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/register', {
        name,
        email,
        password,
      });

      setMessage('User registered successfully');
      console.log('Form submitted successfully:', response.data);
    } catch (error) {
      setMessage('An error occurred');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <form className="signUp-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
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
        <input type="submit" className="button" />
        <pre>
          Have an Account! <button onClick={toggleForm}>Login</button>
        </pre>
        <p>{message}</p>
      </form>
    </div>
  );
}

export default SignupForm;