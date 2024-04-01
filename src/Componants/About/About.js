import React from 'react'
import Header from '../Home/Header'
import Footer from '../Home/Footer'
import "././Beatzy.jpg"
import style from './About.module.css'

export default function About() {
  return (
    <div>
      <Header></Header>
      <Us></Us>
      <Footer></Footer>
    </div>
  )
}

function Us(){
  return(
    <div className={style.body}>
    <section className={style.hero}>
      <div className={style.heading}>
        <h1>About us</h1>
      </div>
      <div className={style.Container}>
        <div className={style.hero_content}>
          <h2>Welcome to <p style={{color: "black",
				textAlign: "center",
				marginTop: "-40px" ,
        fontSize:"30px",
				  fontFamily: "Pacifico, cursive"}}>  beatZY..!!</p></h2>
          <p>Welcome to BeatZY - Where the Rhythm Finds You</p>
          <p>At BeatZY, we are more than just an e-commerce platform for musical instruments; we are the symphony of your aspirations, the melody of your creativity, and the beat of your passion. Our mission is to resonate with musicians of all levels, from beginners to virtuosos, by providing a harmonious blend of quality products, expert guidance, and a community that celebrates the love for music.</p>
          <p>Founded by a team of music enthusiasts, BeatZY was born out of the belief that every individual deserves access to instruments that inspire and empower their musical journey. Whether you're strumming chords on a guitar, pounding rhythms on drums, or exploring the nuances of a keyboard, we're here to accompany you every step of the way.</p>
          <p>What sets us apart is not just our wide selection of instruments, accessories, and gear from renowned brands, but our commitment to fostering a supportive environment where musicians can thrive. From informative buying guides and product reviews to interactive forums and tutorials, we're dedicated to helping you make informed decisions and hone your craft.</p>
          <p>But BeatZY is more than just a marketplace; it's a stage where talents are nurtured, connections are made, and dreams are realized. Whether you're a solo performer, a band member, or a music educator, we invite you to join our vibrant community and share your passion for music with like-minded individuals.</p>
          <p>So, whether you're chasing the perfect riff, seeking the ideal sound, or simply looking to immerse yourself in the world of music, let BeatZY be your partner in rhythm. Together, let's strike a chord, set the tempo, and create beautiful music that resonates with the soul.</p>
          <p>Join us at BeatZY, where the beat never stops, and the music lives on.</p>
          <button className={style.cta_button}>Learn More</button>
        </div>
        <div className={style.hero_image}>
          <img src="https://plus.unsplash.com/premium_photo-1687533706079-c75259cb1587?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG11c2ljJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww" alt=""/><br/>
          <img src="https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWMlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D" alt=""/><br/>
          <img src="https://images.unsplash.com/photo-1499415479124-43c32433a620?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww" alt=""/><br/>
          {/* <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww" alt=""/><br/> */}
        </div>
      </div>
    </section>
    </div>
  )
}