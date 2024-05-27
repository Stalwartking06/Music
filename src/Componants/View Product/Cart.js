import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartList from './CartList';
import Header from 'Componants/Home/Header';
import Footer from 'Componants/Home/Footer';

const Cart = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div>
      <Header/>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        <CartList />
        <center>
          <button
            className="bg-violet-800 text-white font-semibold py-3 px-16 rounded-lg shadow-lg hover:bg-violet-600 transition duration-300"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </center>
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;
