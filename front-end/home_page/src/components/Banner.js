import React from "react";
import "./Banner.css";
import banner from './../assets/banner2.jpg'

export default function Banner(){
    const text = 'Seamlessly navigate campus life, your all-in-one platform for events, updates, and student engagement.';
    const upperCaseText = text.toUpperCase();

    return(
        <div className="main_ban" id="Banner">
            <div className="ban1">
                <h1>{upperCaseText}</h1>
                <h2>Enhancing Engagement, Elevating Campus Life!</h2>

                <div className="btn">
                    <button className="try_out btn_bnr">Login/Sign Up</button>
                </div>
            </div>
            <div className="ban2">
                <img className="ban_img" src={banner} alt="banner"/>
            </div>
        </div>
    )
}