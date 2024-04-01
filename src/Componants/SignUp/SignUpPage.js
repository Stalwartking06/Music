import React, { useState } from 'react';
import style from './Signup.module.css';
import { Link } from 'react-router-dom';

export default function SignUpPage() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [passw1, setPassw1] = useState('');
    const [passw2, setPassw2] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Invalid email address');
            return;
        }

        // Phone number validation (Assuming 10 digits)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            setError('Invalid phone number');
            return;
        }

        // Password length validation
        if (passw1.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }

        // Password match validation
        if (passw1 !== passw2) {
            setError('Passwords do not match');
            return;
        }

        const phone1 = parseInt(phone);
        const data = { name, email, phone1, passw1, passw2 };

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
        <div>
            <div className={style.A}>
                <div className={style.login}>
                    <form onSubmit={handleSubmit}>
                        <h1>beatZY..!!</h1>
                        <h2>Sign up</h2>
                        {error && <div className={style.error}>{error}</div>}
                        <label>Name</label>
                        <input type="text" placeholder="Enter Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Phone No.</label>
                        <input type="tel" placeholder="Enter Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" value={passw1} onChange={(e) => setPassw1(e.target.value)} />
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" value={passw2} onChange={(e) => setPassw2(e.target.value)} />
                        <button className={style.signupbutton}>Sign Up</button>
                        <center><label>or</label></center>
                        <center><p>If you Already Have an account Please Login here..!</p></center>
                        <button className={style.loginbutton}><Link to={"/login"} style={{ color: "white", textDecoration: "none" }}>Login</Link></button>
                    </form>
                </div>
            </div>
        </div>
    );
}
