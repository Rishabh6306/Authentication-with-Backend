import React, { useState } from 'react';
import SignupForm from './Components/Login&SignUp/SignupForm';
import LoginForm from './Components/Login&SignUp/LoginForm';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className='auth-container'>
      {showLogin ? <LoginForm toggleForm={() => setShowLogin(false)} /> : <SignupForm toggleForm={() => setShowLogin(true)} />}
    </div>
  );
}

export default App;