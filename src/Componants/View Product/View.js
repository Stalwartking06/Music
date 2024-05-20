import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Footer from '../Home/Footer'
import Header from '../Home/Header'


function View(){
    const location=useLocation();
    const [apidata,setData]=useState([])
    const data=location.state

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/" + data.pid)
          .then((result) => {
            result.json().then((data) => {
              console.log("Fetched data:", data);
              setData([data]); // Wrap the single object in an array
            });
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, []);
   


    const [amount, setAmount] = useState(1);


    return (
      <div>
      <Header></Header>

         {
  apidata.map((item, index) => (
    <div >
        <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
        
            <div key={index} className='flex flex-col gap-6 lg:w-2/4'>
                <img src={item.image} alt="" className='w-full h-full aspect-square object-cover rounded-xl' style={{height:"100%",width:"80%"}}/>
              
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-violet-600 font-semibold'>Special Offer</span>
                    <h1 className='text-3xl font-bold'>{item.title}</h1>
                </div>
                <p className='text-gray-700'>{item.description}</p>
                <h6 className='text-2xl font-semibold'>Category : {item.category}</h6>

                <h6 className='text-2xl font-semibold'style={{backgroundColor:"#00FF7F"}}>Price : {item.price * 85} Rs/-</h6>
                <p className='text-gray-700'>Product Ratings : {item.rating.rate}</p>
                <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-1 px-2 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='bg-gray-200 py-1 px-1 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                    <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
                </div>
            </div>

            </div>
 
        </div>
      ))
    }
      <Footer></Footer>
        </div>
    )
}
export default View
