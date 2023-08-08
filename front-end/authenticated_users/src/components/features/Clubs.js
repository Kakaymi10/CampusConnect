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
              <h3 className="club-title">{props.title}</h3>
              <img className="club_img" src={robotics_club} alt="club_img"/>
            </div>
            
            <div>
                <h3>Club's Mission</h3>
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