import React, { useEffect, useState } from 'react'
// import './Card.css'
import style from './HomeCard.module.css'
import { useNavigate } from 'react-router-dom'
export default function Card() {
  const [apidata,setapidata]=useState([])
  const navigate = useNavigate()

  useEffect(()=>
  {
  fetch("http://localhost:3001/product").then((result)=>
{                
  result.json().then((data)=>{
  setapidata(data)
  })
})
},[])
function getId(pid){
  const data={pid:pid,add:"indore"}
  // console.log(pid)
  navigate("/item",{state:data});

}

  return (
    <div className={style.cards}>
      <link href=''></link>
    {
  apidata.map((item, index) => (
    <div key={index} className={style.card}>
      {/* <h1 className={style.title}></h1> */}
      <img src={item.pimage} alt="img" className={style.imag}/>
      <p>{item.name}</p>
      <p>{item.price} Rs/-</p>
      <p className={style.price}>{item.category}</p>
      <button className={style.button} onClick={()=>getId(item.id)}>View Product!</button>
    </div>
  ))
}

    </div>
  )
}
