import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import style from './brand.module.css'

export default function Category() {
  return (
    <div>
      <Header></Header>
      <CardSLider></CardSLider>
      <Footer></Footer>
    </div>
  )
}
function CardSLider(){
return(
<div className={style.body}>
<div className={style.slider_container}>
      <div className={style.slider}>
        <div className={style.card}>
          <img src="https://www.bajaao.com/cdn/shop/collections/acous-400x400_250x.jpg?v=1664881713" alt="Card Image" />
          <div className={style.card_content}>
            <h3 className={style.card_title}>Acoustic Guitars</h3>
            <p className={style.card_description}>Your Fav Brands are Available</p>
          </div>
        </div>
        <div className={style.card}>
          <img src="https://www.bajaao.com/cdn/shop/collections/elex-400x400_250x.jpg?v=1664881668" alt="Card Image" />
          <div className={style.card_content}>
            <h3 className={style.card_title}>Electric xGuitars</h3>
            <p className={style.card_description}>Your Fav Brands are Available</p>
          </div>
        </div>
        <div className={style.card}>
          <img src="https://www.bajaao.com/cdn/shop/collections/aud-400x400_250x.jpg?v=1664882327" alt="Card Image" />
          <div className={style.card_content}>
            <h3 className={style.card_title}>Audio Interfaces</h3>
            <p className={style.card_description}>Your Fav Brands are Available</p>
          </div>
          
        </div>
        <div className={style.card}>
          <img src="https://www.bajaao.com/cdn/shop/collections/uku-400x400_250x.jpg?v=1660663736" alt="Card Image" />
          <div className={style.card_content}>
            <h3 className={style.card_title}>Ukuleles</h3>
            <p className={style.card_description}>Your Fav Brands are Available</p>
          </div>
        </div>
        <div className={style.card}>
          <img src="https://www.bajaao.com/cdn/shop/collections/mon-400x400_b507e278-bcf6-427b-81ce-50536dad7c55_250x.jpg?v=1672916835" alt="Card Image" />
          <div className={style.card_content}>
            <h3 className={style.card_title}>Monitor Speakers</h3>
            <p className={style.card_description}>Your Fav Brands are Available</p>
          </div>
        </div>
        <div className={style.card}>
          <img src="https://images.pexels.com/photos/6647848/pexels-photo-6647848.jpeg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=2" alt="Card Image" />
          <div className={style.card_content}>
            <h3 className={style.card_title}>Pianos</h3>
            <p className={style.card_description}>Your Fav Brands are Available</p>
          </div>
        </div>
        <div className={style.card}>
          <img src="https://www.bajaao.com/cdn/shop/collections/acdr-400x400_250x.jpg?v=1660664226" alt="Card Image" />
          <div className={style.card_content}>
            <h3 className={style.card_title}>Acoustic Drum Kits</h3>
            <p className={style.card_description}>Your Fav Brands are Available</p>
          </div>
        </div>
        <div className={style.card}>
          <img src="https://www.bajaao.com/cdn/shop/collections/drums-400x400_250x.jpg?v=1660795071" alt="Card Image" />
          <div className={style.card_content}>
            <h3 className={style.card_title}>Electronics Drum Kits</h3>
            <p className={style.card_description}>Your Fav Brands are Available</p>
          </div>
        </div>
      </div>
    </div>
    </div>
)
}
