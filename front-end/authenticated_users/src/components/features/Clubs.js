import React from "react";
import "./Clubs.css"
import robotics_club from './assets/robotics_club.jpg'
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

export function Clubs(props){
    return(
        <div className="acad">
       
        <div className="dead">
            <div className="image-title">
              <h3 className="club-title">{props.title}</h3>
              <img className="club_img" src={robotics_club} alt="club_img"/>
            </div>
            
            <div>
                <h3>Club's Mission</h3>
                <p className="club-desc">{props.description}</p>
                <button className="join-button">Join Club</button>
                <div>
                  <h4 className="contact">Contacts</h4>
                  <a href={`mailto:${props.email}`}>
                    <FaEnvelope className="mail-icon"/>
                  </a>
                  <a href={props.intagram}>
                    <FaInstagram className="insta-icon"/>
                  </a>

                  
                </div>

            </div>
        </div>
       
    
        </div>
    )
}