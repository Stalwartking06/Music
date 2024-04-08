import React from 'react'
import style from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
 <div className={style.fix}>
        {/* navbar */}
        <div className={style.navbar}>
            <div className={style.navbar_link_holder}>
            <div className={style.logo}><b style={{fontSize:"25px",fontWeight:"revert-layer",color:'#FFE4E1'}}>beatZY..!!</b> </div>
                {/* ROuting */}
                <Link to={"/"}>Home</Link>
                <Link to={"/category"}>Shop by Category</Link>
                <Link to={"/shopbyBrand"}>Shop by Brand</Link>
                <Link to={"/service"}>Service</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/signup"}><i className="fa fa-lock"></i>  Sign up</Link>
                <Link to={"/login"}><i className="fa fa-user"></i>  Login</Link>
            </div>
    </div>
</div>
  )
}

