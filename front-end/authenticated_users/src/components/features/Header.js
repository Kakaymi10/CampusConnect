import React, { useState } from "react";
import { FaUserCircle } from 'react-icons/fa';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Home from "./Home";

import Event from "./Event";

import "./Header.css";
import "./Home.css";
import "./../../App.css";
import Campustoday from "./Campustoday";
import { Acad } from "./Acad";


////Testing firebse





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
          
        <span className="nav-logo">campus<span className="connect">Connect</span></span>
          <div className={`nav-items ${isOpen && "open"}`}>
            <Link to="/" className="a" onClick={handleLinkClick}>
              Home
            </Link>
            <Link to="./Event" className="a" onClick={handleLinkClick}>
              Events
            </Link>
            <Link to="/Campustoday" className="a" onClick={handleLinkClick}>
              Campus today
            </Link>
            <Link to="/Acad" className="a" onClick={handleLinkClick}>
              Acad Deadlines
            </Link>
            <Link to="/acad-sessions" className="a" onClick={handleLinkClick}>
              Acad Sessions
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
          <Route path="/event" element={<Event />} />
          <Route path="/Campustoday" element={<Campustoday />} />
          <Route path="/Acad" element={<Acad />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Header;