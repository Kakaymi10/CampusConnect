import React, {useState} from "react";
import "./Clubs.css"
import robotics_club from './assets/robotics_club.jpg'
import { FaInstagram, FaEnvelope, FaTruck } from 'react-icons/fa';
import Modal from "react-modal";

export function Clubs(props){
  const [isTruncated, setIsTruncated] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleTruncate = () => {
    setIsModalOpen(true)
  };

 

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const maxLength = 70
  return(
        <div className="acad">
          
          <div className="dead">
            <div className="image-title">
              <h5 id={props.live} className="live">{props.islive}</h5>
              <h3 className="club-title">{props.title}</h3>
              <img className="club_img" src={props.image} alt="club_img"/>
            </div>
            
            <div>
                <h3>{props.desc_title}</h3>
              <div className="content">
                <p className={`truncate ${isTruncated ? "truncated" : ""}`}>
                  {props.description.slice(0, isTruncated ? maxLength : undefined)}
                </p>
              {props.description.length > maxLength && (
                <button className="view-more" onClick={toggleTruncate}>
                  View More
                </button>
                )}
              </div>
                
                <a href={props.link} className="join-button" target="_blank" rel="noopener noreferrer">
                  {props.join}
                </a>
                <p>{props.location}</p>
                <div>
                  <h4 className="contact">{props.contact}</h4>
                  <a href={`mailto:${props.email}`} id={props.id}>
                    <FaEnvelope className="mail-icon"/>
                  </a>
                  <a href={props.intagram} target="_blank" rel="noopener noreferrer" id={props.id}>
                    <FaInstagram className="insta-icon" />
                  </a>
      

                  
                </div>
                
                <p className="date-posted">{props.posted}</p>
            </div>
          </div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Truncated Content Modal"
            className="custom-modal" 
          >
            <div>
              <div className="modal-title">
                <h3 className="club-title">{props.title}</h3>
                <p className="date-posted">{props.posted}</p>
              </div>
              <p>{props.description}</p>
                <div className="modal_buttons">
                  <button className="join-button" onClick={closeModal}>Close</button>
                  <a href={props.link} className="join-button" target="_blank" rel="noopener noreferrer">
                  {props.join}
                  </a>
                </div>
            </div>
              
          </Modal>
       
    
        </div>
    )
}