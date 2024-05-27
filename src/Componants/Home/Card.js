import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './HomeCard.module.css';

export default function Card() {
  const [apidata, setApidata] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/product")
      .then((result) => result.json())
      .then((data) => {
        console.log("Fetched data in Card component:", data); // Debugging line
        setApidata(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function getId(product) {
    navigate("/item", { state: { product } });
  }

  return (
    <div className={style.cards}>
      {apidata.map((item, index) => (
        <div key={index} className={style.card}>
          <img src={item.pimage} alt="img" className={style.imag} />
          <p className={style.title}>{item.name}</p>
          <p className={style.price}>Price : {item.price} Rs/-</p>
          <button className={style.button} onClick={() => getId(item)}>View Product!</button>
        </div>
      ))}
    </div>
  );
}
