import React, { useEffect, useState } from 'react'
// import './Card.css'
import style from './HomeCard.module.css'
export default function Card() {
  const [apidata,setapidata]=useState([])
  useEffect(()=>
  {
  fetch("https://fakestoreapi.com/products").then((result)=>
{                
  result.json().then((data)=>{
  setapidata(data)
  })
})
},[])

  return (
    <div className={style.cards}>
      <link href=''></link>
      <div className={style.card}>
        <h1 className={style.title}></h1>
        <img src="https://www.bajaao.com/cdn/shop/files/yamaha-acoustic-guitars-pack-natural-yamaha-f280-40-inch-acoustic-guitar-with-strap-polishing-cloth-picks-e-book-32550255100083_200x.jpg?v=1687032581" alt="img" className={style.imag}/>
        <p >Yamaha F280 40 Inch Acoustic Guitar With Strap, Polishing Cloth, Picks & E-book</p>
        {/* <p className="category"></p> */}
        <p className={style.price}>7,400</p>
        <button className={style.button}>Buy Now!</button>
    </div>

    <div className={style.card}>
        <h1 className={style.title}></h1>
        <img src="https://www.bajaao.com/cdn/shop/files/yamaha-acoustic-guitars-pack-natural-yamaha-f280-40-inch-acoustic-guitar-with-strap-polishing-cloth-picks-e-book-32550255100083_200x.jpg?v=1687032581" alt="img" className={style.imag}/>
        <p >Yamaha F280 40 Inch Acoustic Guitar With Strap, Polishing Cloth, Picks & E-book</p>
        {/* <p className="category"></p> */}
        <p className={style.price}>7,400</p>
        <button className={style.button}>Buy Now!</button>
    </div>
    <div className={style.card}>
        <h1 className={style.title}></h1>
        <img src="https://www.bajaao.com/cdn/shop/files/yamaha-acoustic-guitars-pack-natural-yamaha-f280-40-inch-acoustic-guitar-with-strap-polishing-cloth-picks-e-book-32550255100083_200x.jpg?v=1687032581" alt="img" className={style.imag}/>
        <p >Yamaha F280 40 Inch Acoustic Guitar With Strap, Polishing Cloth, Picks & E-book</p>
        {/* <p className="category"></p> */}
        <p className={style.price}>7,400</p>
        <button className={style.button}> Buy Now!</button>
    </div>
    <div className={style.card}>
        <h1 className={style.title}></h1>
        <img src="https://www.bajaao.com/cdn/shop/files/yamaha-acoustic-guitars-pack-natural-yamaha-f280-40-inch-acoustic-guitar-with-strap-polishing-cloth-picks-e-book-32550255100083_200x.jpg?v=1687032581" alt="img" className={style.imag}/>
        <p >Yamaha F280 40 Inch Acoustic Guitar With Strap, Polishing Cloth, Picks & E-book</p>
        {/* <p className="category"></p> */}
        <p className={style.price}>7,400</p>
        <button className={style.button}>Buy Now!</button>
    </div>
    {
  apidata.map((item, index) => (
    <div key={index} className={style.card}>
      <h1 className={style.title}></h1>
      <img src={item.image} alt="img" className={style.imag}/>
      <p>{item.title}</p>
      <p>{item.price * 85} Rs/-</p>
      <p className={style.price}>{item.category}</p>
      <button className={style.button}>View Product!</button>
    </div>
  ))
}

    </div>
  )
}
