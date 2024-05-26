import React, { useState } from 'react';
import style from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [passw1, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(passw1)) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/login', { email, passw1 });
      console.log(response);
      if (response.data === "Success") {
        navigate('/');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to log in');
    }
  };

  const validateEmail = (email) => {
    // Basic email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (passw1) => {
    // Password length validation
    return passw1.length >= 8;
  };

  return (
    <div className={style.A}>
      <div className={style.login}>
        <form onSubmit={handleSubmit}>
          {/* <h1>beatZY..!!</h1> */}
          <h2>Log In</h2>
          <label>{error}</label>
          <label>Email</label>
          <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" placeholder="Enter Password" value={passw1} onChange={(e) => setPassword(e.target.value)} />
          {error && <p className={style.error}>{error}</p>}
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
