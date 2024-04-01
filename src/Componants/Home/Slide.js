import React from 'react'

export default function Slide() {
  return (
    <div style={{padding:"20px"}}>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.bajaao.com/cdn/shop/files/DESKTOP_BANNER_01548df2-b261-475b-9e43-b4b15e4bbe99.jpg?v=1697549061" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.bajaao.com/cdn/shop/files/1300x400_4ea04d99-f067-4363-a9cd-4765c38ad656.jpg?v=1709239396" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.bajaao.com/cdn/shop/files/desktop_banner_d8a29115-1ac8-4540-b2ff-31645ec2240f.jpg?v=1694677507" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
