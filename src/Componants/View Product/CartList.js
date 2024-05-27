import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CartList = () => {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);

    const storedFormData = JSON.parse(localStorage.getItem('formData')) || {};
    setFormData(storedFormData);
  }, []);

  const removeFromCart = (item) => {
    let updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Item removed from cart!');
  };

  const updateQuantity = (item, newQuantity) => {
    let updatedCart = cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        cartItem.quantity = newQuantity;
      }
      return cartItem;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleCheckout = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/orders', {
        cart,
        address: formData.address,
        phone: formData.phone,
      });
      if (response.data.success) {
        localStorage.removeItem('cart');
        localStorage.removeItem('formData');
        setCart([]);
        alert('Order placed successfully!');
      } else {
        alert('Failed to place order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order');
    }
  };

  return (
    <div>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className='border p-4 mb-4 flex items-center justify-between'>
              <div>
                <h3>{item.name}</h3>
                <p>Price: {item.price} Rs/-</p>
                <div className='flex items-center gap-4'>
                  <button
                    className='bg-gray-200 py-1 px-2 rounded-lg text-violet-800 text-3xl'
                    onClick={() => updateQuantity(item, Math.max(1, item.quantity - 1))}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className='bg-gray-200 py-1 px-2 rounded-lg text-violet-800 text-3xl'
                    onClick={() => updateQuantity(item, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={() => removeFromCart(item)}>
                Remove
              </button>
            </div>
          ))}
          {/* <button
            className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl'
            onClick={handleCheckout}
          >
            Checkout
          </button> */}
        </div>
      )}
    </div>
  );
};

export default CartList;
