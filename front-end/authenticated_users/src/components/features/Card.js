import React from "react"
import './Card.css'
import React from "react"
import React from "react"
import { ClassAttributes } from "react"
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
            <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Truncated Content Modal"
            className="custom-modal" 
          >
            <div>
              <h3 className="club-title">{props.title}</h3>
              <p>{props.description}</p>
                <div className="modal_buttons">
                  <button className="join-button" onClick={closeModal}>Close</button>
                  <button className="join-button">Join Club</button>
                </div>
            </div>
              
          </Modal>
            
        </div>
    )
}
