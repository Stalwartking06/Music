import React, { useState } from 'react';

function SU() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
    const [passw1, setPassw1] = useState('');
    const [passw2, setPassw2] = useState('');
    const [email, setEmail] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/Signup', { // Update endpoint to '/Loggin'
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone,passw1, passw2,email }),
      });
      const data = await response.json();
      alert(data.message);
      // Clear form fields after successful submission
      setName('');
      setPhone('')
      setPassw1('')
      setPassw2('')
      setEmail('')
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add item');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />

      <label>
        Phone:
        <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={passw1} onChange={(e) => setPassw1(e.target.value)} required />
      </label>
      <br />
      <label>
        Confirm Password:
        <input type="password" value={passw2} onChange={(e) => setPassw2(e.target.value)} required />
      </label>
      <br />
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <br /> 
      <button type="submit">Submit</button>
    </form>
  );
}

export default SU;
