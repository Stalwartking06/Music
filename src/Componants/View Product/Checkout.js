import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import QRCodeComponent from './QRCode';
import Header from 'Componants/Home/Header';
import Footer from 'Componants/Home/Footer';

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });
  const [qrCodeUrl, setQRCodeUrl] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpVerified, setOtpVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOTP = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3001/send-otp', {
        phone: formData.phone
      });
      setLoading(false);
      if (response.data.success) {
        setOtpSent(true);
        alert('OTP sent successfully');
      } else {
        alert('Failed to send OTP');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setLoading(false);
      alert('Failed to send OTP');
    }
  };

  const handleVerifyOTP = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3001/verify-otp', {
        phone: formData.phone,
        otp
      });
      setLoading(false);
      if (response.data.success) {
        setOtpVerified(true);
        alert('OTP verified successfully');
        handleGenerateQRCode();
      } else {
        alert('Invalid OTP');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setLoading(false);
      alert('Failed to verify OTP');
    }
  };

  const handleGenerateQRCode = async () => {
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3001/api/generate-qr', {
        qrValue: JSON.stringify(formData)
      });
      setQRCodeUrl(response.data.qrCodeUrl);
      setLoading(false);
    } catch (error) {
      console.error('Error generating QR code:', error);
      setLoading(false);
      alert('Failed to generate QR code');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otpVerified) {
      alert('Please verify OTP first');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3001/api/orders', {
        cart: JSON.parse(localStorage.getItem('cart')),
        address: formData.address
      });
      setLoading(false);
      if (response.data.success) {
        localStorage.removeItem('cart');
        setQRCodeUrl('');
        alert('Order placed successfully!');
      } else {
        alert('Failed to place order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      setLoading(false);
      alert('Failed to place order');
    }

    handleGenerateQRCode();
  };

  return (
    <>
    <Header/>
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      {!qrCodeUrl ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block font-semibold">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>
          <div>
            <label htmlFor="address" className="block font-semibold">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              rows={4}
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>
          <button
            type="button"
            onClick={handleSendOTP}
            className={`bg-violet-800 text-white font-semibold py-3 px-16 rounded-lg shadow-lg hover:bg-violet-600 transition duration-300 ${loading ? 'opacity-50 pointer-events-none' : ''}`}
            disabled={loading}
          >
            {loading ? 'Sending OTP...' : 'Send OTP'}
          </button>
          {otpSent && (
            <div className="mt-4">
              <label htmlFor="otp" className="block font-semibold">Enter OTP</label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="border border-gray-300 px-3 py-2 rounded-md w-full"
              />
              <button
                type="button"
                onClick={handleVerifyOTP}
                className={`bg-violet-800 text-white font-semibold py-3 px-16 rounded-lg shadow-lg hover:bg-violet-600 transition duration-300 mt-4 ${loading ? 'opacity-50 pointer-events-none' : ''}`}
                disabled={loading}
              >
                {loading ? 'Verifying OTP...' : 'Verify OTP'}
              </button>
            </div>
          )}
          {/* <button
            type="submit"
            className={`bg-violet-800 text-white font-semibold py-3 px-16 rounded-lg shadow-lg hover:bg-violet-600 transition duration-300 mt-4 ${loading ? 'opacity-50 pointer-events-none' : ''}`}
            disabled={loading}
          >
            {loading ? 'Generating QR Code...' : 'Generate QR Code'}
          </button> */}
        </form>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4">Scan QR Code to Pay</h2>
          <center><QRCodeComponent qrCodeUrl={qrCodeUrl} /></center>
          <p className="mt-4 text-center font-semibold text-gray-600">
            Please scan the QR code with your payment app.
          </p>
          <button
            onClick={() => navigate('/')}
            className="bg-gray-400 text-white font-semibold py-2 px-8 rounded-lg mt-4 hover:bg-gray-600 transition duration-300"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default Checkout;
