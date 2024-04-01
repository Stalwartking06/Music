import React, { useState } from 'react';
import style from './Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function validateEmail(email) {
    // Basic email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validatePassword(password) {
    // Password length validation
    return password.length >= 8;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // If validations pass, proceed with login
    console.log(email, password);

    const data = { email, password };

    fetch("http://localhost:3002/posts", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then((result) => {
      result.json().then((data1) => {
        console.log(data1);
      });
    });
  }

  return (
    <div className={style.A}>
      <div className={style.login}>
        <form onSubmit={handleSubmit}>
          <h1>beatZY..!!</h1>
          <h2>Log In</h2>
          <label>Email</label>
          <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Password</label>
          <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {error && <p className={style.error}>{error}</p>}
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}
