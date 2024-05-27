import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Componants/Home/Home';
import Category from './Componants/Category/Category';
// import ShopeByBrand from './Componants/ShopByBrand/ShopeByBrand';
import About from './Componants/About/About';
import Loggin from './Componants/Loggin/Loggin';
import Serv from './Componants/Service/Serv';
import SignUpPage from './Componants/SignUp/SignUpPage';
import View from './Componants/View Product/View';
import Cart from './Componants/View Product/Cart'; // Corrected import path
import Checkout from './Componants/View Product/Checkout'; // Corrected import path

export default function RoutingM() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/item' element={<View />} />
          <Route path='/category' element={<Category />} />
          {/* <Route path='/shopbyBrand' element={<ShopeByBrand />} /> */}
          <Route path='/service' element={<Serv />} />
          <Route path='/about' element={<About />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<Loggin />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
