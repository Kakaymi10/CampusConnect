import React, { useState } from "react";
import "./Navbar.css";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close the navigation links when a link is clicked on small screens (responsive mode)
  const handleLinkClick = () => {
    if (window.innerWidth <= 700) {
      setIsOpen(false);
    }
  };

  // Add event listener when the component mounts to handle link clicks
 
  return (
    
    <div className="Navbar">
      <span className="nav-logo">Campus<span className="connect">Connect</span></span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#Banner" onClick={handleLinkClick}>Home</a>
        <a href="#About" onClick={handleLinkClick}>About</a>
        <a href="#CardSlider" onClick={handleLinkClick}>Service</a>
        <a href="#Team" onClick={handleLinkClick}>Team members</a>
  
      </div>
      <button className="try_out"><a className="link_to_app" href="https://campusconnect-kakaymi10.vercel.app/">Login/Sign Up</a></button>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;