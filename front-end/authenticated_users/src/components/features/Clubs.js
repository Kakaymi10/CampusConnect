import React from "react";
import "./Clubs.css"
import robotics_club from './assets/robotics_club.jpg'
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

export function Clubs(){
    return(
        <div className="acad">
        <h2>Clubs</h2>
        <div className="dead">
            <div>
              <h3>ALU Robotics clubs</h3>
              <img className="club_img" src={robotics_club} alt="club_img"/>
            </div>
            
            <div>
                <h3>Club's Mission</h3>
                <p>Our mission is to promote and advance 
                    the field of robotics among students 
                    by providing a platform for learning,
                     collaboration, and hands-on experience in 
                     robotics technology and engineering.
                </p>
                <div>
                  <h4>Contacts</h4>
                  <a href={`mailto:m.nyamusi@alustudent.com`}>
                    <FaEnvelope className="mail-icon"/>
                  </a>
                  <a href='https://www.instagram.com/alu.robotics.club'>
                    <FaInstagram className="insta-icon"/>
                  </a>

                  
                </div>

            </div>
        </div>
       
    
        </div>
    )
}