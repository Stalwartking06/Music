import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Componants/Home/Home'
import Category from './Componants/Category/Category'
// import ShopeByBrand from './Componants/ShopByBrand/ShopeByBrand'
import About from './Componants/About/About'
import Loggin from './Componants/Loggin/Loggin'
import Serv from './Componants/Service/Serv'
import SignUpPage from './Componants/SignUp/SignUpPage'
import View from './Componants/View Product/View'

export default function RoutingM() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path="/item" element={<View />} />
                <Route path='/category' element={<Category/>}></Route>
                {/* <Route path='/shopbyBrand' element={<ShopeByBrand/>}></Route> */}
                <Route path='/service' element={<Serv/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/signup' element={<SignUpPage/>}></Route>
                <Route path='/login' element={<Loggin/>}></Route>


            </Routes>
      </BrowserRouter>
    </div>
  )
}
