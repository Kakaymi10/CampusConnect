import React, { useState } from "react";
import { FaUserCircle } from 'react-icons/fa';
import { BrowserRouter, Link, Route, Routes, useMatch } from "react-router-dom";

import Home from "./Home";



import "./Header.css";
import "./Home.css";
import "./../../App.css";
import Campustoday from "./Campustoday";
import Clubsfilled from "./clubsdata/clubsfilled";
import FormComponent from "./opportunities";
import Event from "./Event";

////Testing firebse

//<Link to="./Event" className="a" onClick={handleLinkClick}>
//Events
//</Link>
//<Route path="/event" element={<Event />} />



function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isIconHovered, setIsIconHovered] = useState(false);

  const handleIconHover = () => {
    setIsIconHovered(true);
  };

  const handleIconLeave = () => {
    setIsIconHovered(false);
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 700) {
      setIsOpen(false);
    }
  };
  return (
    <BrowserRouter>
      <div className="Navbar">
        <div className="Head">
          
          <span className="nav-logo">Campus<span className="connect">Connect</span></span>
          <div className={`nav-items ${isOpen && "open"}`}>
            <Link to="/" className="a" onClick={handleLinkClick}>
              Campus Today
            </Link>
            
            <Link to="/updateshub" className="a" onClick={handleLinkClick}>
              Updates Hub
            </Link>
            <Link to="/Clubs" className="a" onClick={handleLinkClick}>
              Clubs
            </Link>
            <Link to="/opportunities" className="a" onClick={handleLinkClick}>
              OppHub
            </Link>
            
          </div>


          <div >
          <div className="hover-dropdown-icon">
            <div
              className={`icon-container ${isIconHovered ? 'hovered' : ''}`}
              onMouseEnter={handleIconHover}
              onMouseLeave={handleIconLeave}
            >
              <FaUserCircle className="icon" style={{ color: '#5265c4' }} />
              <div className="dropdown-content">
                <p>{props.email}</p>
                <button className="signOut_button" onClick={props.logout}>
                  Sign Out
                </button>
              </div>
            </div>
          </div>
          
          </div>

          
          
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>

        </div>
        
        
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/Campustoday" element={<Campustoday />} />
          <Route path="/Clubs" element={<Clubsfilled />} />
          <Route path="/opportunities" element={<FormComponent/>} />
          <Route path="/updateshub" element={<Event/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Header;