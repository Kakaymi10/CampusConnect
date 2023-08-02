import React from "react"
import './Card.css'

export default function Card(props){
    return(
        <div className="cards">
            <div className="card--badge">{props.date}</div>
            <img className="cards_img" src={props.img} alt="cards"/>
            <div className="descrip">
            <h3 className="title">{props.title} </h3>
            <p className="description">{props.description}</p>
            <a className="form" href="https://forms.gle/nbK3qGEyTZNqx2t1A">Register</a>
            </div>
            
        </div>
    )
}
