import React, { useState } from 'react';
import style from './Signup.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function SignUpPage() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [passw1, setPassw1] = useState('');
    const [passw2, setPassw2] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async (e) => {
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
        try {
            const response = await fetch('http://localhost:3001/Signup', { // Update endpoint to '/Loggin'
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ id,name, phone1,passw1, passw2,email }),
            });
            const data = await response.json();
            alert(data.message);
            // Clear form fields after successful submission
            setId('')
            setName('');
            setPhone('')
            setPassw1('')
            setPassw2('')
            setEmail('')
            navigate('/login'); // Assuming '/home' is the route for the home page

          } catch (error) {
            console.error('Error:', error);
            alert('Failed to add item');
          }
    }

    return (
        <div>
            <div className={style.A}>
                <div className={style.login}>
                    <form onSubmit={handleSubmit}>
                        <h1>beatZY..!!</h1>
                        <h2>Sign up</h2>
                        {error && <div className={style.error}>{error}</div>}
                        <label>Id No.</label>
                        <input type="number" placeholder="Enter Phone Number" value={id} onChange={(e) => setId(e.target.value)} />
                        <label>Name</label>
                        <input type="text" placeholder="Enter Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Phone No.</label>
                        <input type="number" placeholder="Enter Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        <label>Create Password</label>
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
