
import React from "react";
import "./CardSlider.css";


export default function CardSlider(){
  return(
    <div className="slider" id="CardSlider">
      <h1 className="card_title1">Our services</h1>
   
  
      <div className="slides">
        <div className="slide-1">
          <h1 className="card_title">Real-Time Updates for Engaging Campus Life👉</h1>
          <p className="card_description">Stay connected and informed with 
          instant notifications about ongoing and upcoming 
          events on campus. Never miss out on academic, 
          cultural, or social activities with this user-friendly 
          platform for students, faculty, and staff.</p>
        </div>
        <div className="slide-2">
          <h1 className="card_title">👈ALU Clubs Dicovery: Join and Engage in Diverse Campus Communities👉</h1>
          <p className="card_description">Explore a comprehensive list of diverse clubs at ALU, each with brief descriptions. 
          Discover opportunities for personal and academic growth,
           social connections, and leadership development. 
           Learn how to join and actively participate in 
           the clubs' enriching activities through ALU's 
           dedicated student engagement platform.</p>
        </div>
        <div className="slide-4">
          <h1 className="card_title">👈Empowering Students to Share Extra Activities & Opportunities</h1>
          <p className="card_description">Campus Connect Hub offers ALU students an upload functionality to
           share information about exciting extra activities,
            events, and opportunities they discover. 
            From internships and workshops to volunteering 
            and social gatherings, this platform fosters a 
            vibrant community where students can actively 
            engage and contribute to each other's 
            growth and success.</p>
        </div>
        
        
        
     
      
      </div>

      <div className="btn">
        <button className="btn_slider">Connect</button>
      </div>
    </div>

  )
}