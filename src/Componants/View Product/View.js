import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import Cart from './Cart'; // Import the Cart component

function View() {
  const location = useLocation();
  const navigate = useNavigate();
  const [apidata, setData] = useState(null);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const data = location.state;
    console.log("Location state:", data); // Debugging line

    if (data && data.product) {
      setData(data.product); // Set the product data from location state
    } else {
      console.log("Invalid data or product is undefined");
      // Navigate back or show an error message
      navigate('/error', { state: { message: 'Invalid product data' } });
    }
  }, [location.state, navigate]);

  const addToCart = (product) => {
    const cartItem = {
      id: product.p_id,
      name: product.name,
      price: product.price,
      quantity: 1, // You can modify this as per your requirements
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === cartItem.id);

    if (existingItem) {
      existingItem.quantity += cartItem.quantity;
    } else {
      cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
  };

  if (!apidata) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Header />
      <div className='flex flex-col justify-between lg:flex-row gap-8 lg:items-center'>
        <div className='flex flex-col gap-6 lg:w-2/4'>
          <img
            src={apidata.pimage}
            alt=""
            className='w-full h-full aspect-square object-cover rounded-xl'
            style={{ height: "100%", width: "80%" }}
          />
        </div>
        <div className='flex flex-col gap-4 lg:w-2/4'>
          <div>
            <span className='text-violet-600 font-semibold'>Special Offer</span>
          </div>
          <h6 className='text-1xl font-semibold'>{apidata.name}</h6>
          <p className='text-gray-700'>{apidata.description}</p>
          <h6 className='text-2l font-semibold'>Price: {apidata.price} Rs/-</h6>
          <div className='flex flex-row items-center gap-12'>
            <div className='flex flex-row items-center'>
              <button
                className='bg-gray-200 py-1 px-2 rounded-lg text-violet-800 text-3xl'
                onClick={() => setAmount((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className='py-4 px-6 rounded-lg'>{amount}</span>
              <button
                className='bg-gray-200 py-1 px-1 rounded-lg text-violet-800 text-3xl'
                onClick={() => setAmount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button
              className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'
              onClick={() => addToCart(apidata)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default View;
