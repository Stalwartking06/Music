import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import style from './ShopBrand.module.css'
import { Link } from 'react-router-dom'

export default function ShopeByBrand() {
  return (
    <div>
      <Header/>
      <BrandCard/>
      <Footer/>
    </div>
  )
}
function BrandCard(){
    return(
<div className={style.container}>
<Link to={"/Cart"}> <div className={style.card}>
      <img src="https://www.bajaao.com/cdn/shop/collections/fender_250x.jpg?v=1661340542" alt="Brand 1" />
      <div className="card-content">
        
        <h3 className="card-title"></h3>
        <p className="card-description"></p>
      </div>
    </div>
    </Link>
    <div className={style.card}>
      <img src="https://www.bajaao.com/cdn/shop/collections/ibanez_250x.jpg?v=1661340797" alt="Brand 2"/>
      <div className="card-content">
        <h3 className="card-title"></h3>
        <p className="card-description"></p>
      </div>
    </div>
    <div className={style.card}>
      <img src="https://www.bajaao.com/cdn/shop/collections/vault_250x.jpg?v=1661340966" alt="Brand 3"/>
      <div className="card-content">
        <h3 className="card-title"></h3>
        <p className="card-description"></p>
      </div>
    </div>
    <div className={style.card}>
      <img src="https://www.bajaao.com/cdn/shop/collections/alesis_250x.jpg?v=1661341225" alt="Brand 4"/>
      <div className="card-content">
        <h3 className="card-title"></h3>
        <p className="card-description"></p>
      </div>
    </div>
    <div className={style.card}>
      <img src="https://www.bajaao.com/cdn/shop/collections/yamaha_250x.jpg?v=1661341382" alt="Brand 5"/>
      <div className="card-content">
        <h3 className="card-title"></h3>
        <p className="card-description"></p>
      </div>
    </div>
    <div className={style.card}>
      <img src="https://www.bajaao.com/cdn/shop/collections/kala_250x.jpg?v=1661341563" alt="Brand 6"/>
      <div className="card-content">
        <h3 className="card-title"></h3>
        <p className="card-description"></p>
      </div>
    </div>
    <div className={style.card}>
      <img src="https://www.bajaao.com/cdn/shop/collections/presonus_250x.jpg?v=1661341940" alt="Brand 7"/>
      <div className="card-content">
        <h3 className="card-title"></h3>
        <p className="card-description"></p>
      </div>
    </div>
    <div className={style.card}>
      <img src="https://www.bajaao.com/cdn/shop/collections/focusrite-br_250x.jpg?v=1661342002" alt="Brand 8"/>
      <div className="card-content">
        <h3 className="card-title"></h3>
        <p className="card-description"></p>
      </div>
    </div>
    </div>
  )
}
