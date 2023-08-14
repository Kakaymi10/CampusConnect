import React from "react";
import "./Banner.css";
import banner from './../assets/hero-img.png'

export default function Banner(){
    const text = 'Seamlessly Navigate Campus Life, your all-in-one platform for events, updates, and student engagement.';
    const upperCaseText = text;

    return(
        <div className="main_ban" id="Banner">
            <div className="ban1">
                <h1>{upperCaseText}</h1>
                <h2 className="ban_sec">Enhancing Engagement, Elevating Campus Life!</h2>

                <div className="btn">
                    <button className="try_out btn_bnr"><a className="link_to_app" href="https://campusconnect-kakaymi10.vercel.app/">Login/Sign Up</a></button>
                </div>
            </div>
            <div className="ban2">
                <img className="ban_img" src={banner} alt="banner"/>
            </div>
        </div>
    )
}
