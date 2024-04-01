import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
// import "./Serv.css"
import style from './card.module.css'


export default function Serv() {
  return (
    <div>
      <Header></Header>
      <Cont></Cont>
      <Footer></Footer>
    </div>
  )
}
function Cont(){
    return(
        <div className={style.ram}>
             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>

            <div className={style.container}>
                <div className={style.service_wrapper}>
                    <div className={style.service}>
                        <h1 className={style.hi}>our services <span></span></h1>
                        <div className={style.cards}>
                            <div className={style.card}>
                                <i className='fa-brands fa-chromecast'></i>
                                <h2 className={style.hii}>EMI & Financing</h2>
                                <p className={style.pa}>Now get the total interest charged by your bank on EMI 
                                transactions returned back as cashback in your beatZY wallet! Bajaao introduces an 
                                all-new financing option that rewards you on your Credit or Debit card transactions
                                 made on beatZY..!!
                                </p>
                            </div>
                            <div className={style.card}>
                                <i className='fa-solid fa-user-group'></i>
                                <h2 className={style.hii}>Buisness Audio Solution</h2>
                                <p className={style.pa}> From ready made pre- configured Active / Passive systems to completely customised 
                                solutions for your audio needs. Pick from a comprehensive range of brands across budget options, including all 
                                the necessary hardware and accessories you would need to get started.
                                </p>
                            </div>
                            {/* <div className={style.card}>
                                <i className='fa-solid fa-layer-group'></i>
                                <h2 className={style.hii}>Marketing And Reporting</h2>
                                <p className={style.pa}>loremkjakldas
                                    jdsklkhsjdhfdneahdfskjhlfksaj
                                </p>
                            </div> */}
                            <div className={style.card}>
                                <i className='fa-solid fa-desktop'></i>
                                <h2 className={style.hii}>Premium Warranty Plan</h2>
                                <p className={style.pa}>To ensure peace of mind, beatZY provides its own premium warranty plan for select 
                                products to secure your purchase. Premium warranty covers free pick-up, service and drop-off for unlimited 
                                number of warranty claims made during your product's warranty period.
                                </p>
                            </div>
                            {/* <div className={style.card}>
                                <i className='fa-solid fa-camera'></i>
                                <h2 className={style.hii}> Graphic Designing </h2>
                                <p className={style.pa}>loremkjakldas
                                    jdsklkhsjdhfdneahdfskjhlfksaj
                                </p>
                            </div> */}
                            <div className={style.card}>
                                <i className='fa-solid fa-gear'></i>
                                <h2 className={style.hii}>Service Centre</h2>
                                <p className={style.pa}>Not just any service centre, at the Bajaao Service Centre 
                                our goal is to become one of India’s finest service provider that offers a wide 
                                range of MI & Pro Audio products repairs and services. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
