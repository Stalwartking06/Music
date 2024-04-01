import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    // logo
    <div className={style.fix}>
      <header className={style.header_wrapper }>
            <div className={style.header_part_2}>
                <div className={style.logo}><b style={{fontSize:"50px",fontWeight:"revert-layer",color:'black'}}>beatZY..!!</b> </div>
                <div className={style.search_bar}><input type="text" placeholder="Search the store"/></div>&nbsp;
                <div className={style.search_button}><i className="fa fa-search fa-lg"></i></div>&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <div className={style.favourite}><i className="fa fa-heart fa-2x"></i></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <div className={style.headerpart_1_phone}><a href="#"><i className="fa fa-phone"></i>&nbsp;&nbsp;609.666.4464</a></div>
                <div className={style.vertical_line_small}></div>
                <div className={style.header_part_1_lock}><Link to={"/signup"}><i className="fa fa-lock"></i>&nbsp;&nbsp;Sign up</Link></div>
                <div className={style.vertical_line_small}></div>
                <div className={style.header_part_1_user}><Link to={"/login"}><i className="fa fa-user"></i>&nbsp;&nbsp;Login</Link></div>
            </div>
        </header>

        {/* navbar */}
        <div className={style.navbar}>
            <div className={style.navbar_link_holder}>
                {/* ROuting */}
                <Link to={"/"}>Home</Link>
                <Link to={"/category"}>Shop by Category</Link>
                <Link to={"/shopbyBrand"}>Shop by Brand</Link>
                <Link to={"/service"}>Service</Link>
                <Link to={"/about"}>About</Link>
            </div>
    </div>

    {/* icons */}
    {/* <div className={style.banners}>
        <div className={style.banner1}>
            <img src="https://cdn2.bigcommerce.com/server300/3954e/product_images/uploaded_images/truck.png"/>&nbsp;
            <strong>FREE DELIVERY*</strong>&nbsp;&nbsp;
        </div>
        <div className={style.vertical_line_small_2}></div>
        <div className={style.banner2}>
            <img src="https://cdn2.bigcommerce.com/server300/3954e/product_images/uploaded_images/price-match.png"/>&nbsp;
            <strong>PRICE MATCH</strong>&nbsp;&nbsp;
        </div>
        <div className={style.vertical_line_small_2}></div>
        <div className={style.banner3}>
            <img src="https://cdn2.bigcommerce.com/server300/3954e/product_images/uploaded_images/dispatch.png"/>&nbsp;
            <strong>SAME DAY DISPATCH</strong>&nbsp;&nbsp;        
        </div>
        <div className={style.vertical_line_small_2}></div>
        <div className={style.banner3}>
            <img src="https://cdn2.bigcommerce.com/server300/3954e/product_images/uploaded_images/easy-return.png"/>&nbsp;
            <strong>EASY RETURN</strong>&nbsp;&nbsp;
        </div>
    </div> */}
    </div>
  )
}

