import React from "react";
import "./About.css";

export default function About(){
    return(
        <div className="about" id="About">
            <h1 className="about_title">About Us</h1>
            <p>The CampusConnect project at ALU aims to boost student
                 engagement and accessibility of university events through 
                 a user-friendly web app. Real-time updates, simplified event
                  details, and networking opportunities will enhance the 
                  student experience, fostering a stronger community. 
                  Goals include increased engagement and participation.
                   Continuous improvements will be made during implementation.
            </p>
            <div className="btn">
                <button className="try_out btn_abt">Login/Sign Up</button>
            </div>
        </div>
    )
}