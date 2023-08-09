import React, { useState } from 'react';
import 'firebase/database';
import { app } from '../authentic/config';
import { getDatabase, ref, push } from 'firebase/database';
import Modal from "react-modal";
import "./opportunities.css"
import './../authentic/login.css'
import { FaPlus } from 'react-icons/fa'
import OpportunitiesContent from './opportunityContent';


const FormComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);  
  const [formData, setFormData] = useState({
    image: 'https://thumbs.dreamstime.com/z/internship-learnin…er-preparation-concept-working-85688117.jpg?w=992',
    title: '',
    deadline: '',
    description: '',
    link: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const db = getDatabase(app);
    const dbRef = ref(db, '/opportunities');
    
    try {
      await push(dbRef, formData);
      console.log('Data posted to Firebase Realtime Database.');
      clearFormData();
      closeModal();
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const clearFormData = () => {
    setFormData({
      ...formData,
      title: '',
      deadline: '',
      description: '',
      link: ''
    });
  };

  return (
    <div className='oppo_mainn'> 
      <div className='share-head'>
        <h4>Opportunities Hub</h4>
        <button className='share-opp' onClick={openModal}><FaPlus />Post</button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Truncated Content Modal"
        className="custom-modal" 
      >
        <div className='center share_block'>
          <h1>Share with Us</h1>
        <form onSubmit={handleSubmit}>
        <div className="txt_field">
          <input type="text" name="image" value={formData.image} onChange={handleInputChange} required/>
          <span></span>
          <label>Image URL</label>
        </div>
        <div className="txt_field">
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} required/>
          <span></span>
          <label>Title</label>
        </div>
        <div className="txt_field">
          <input type="text" name="deadline" value={formData.deadline} onChange={handleInputChange} required/>
          <span></span>
          <label>Deadline</label>
        </div>
        <div className="txt_field">
          <input name="description" value={formData.description} onChange={handleInputChange} required/>
          <span></span>
          <label>Description</label>
        </div>
        <div className="txt_field">
          <input type="text" name="link" value={formData.link} onChange={handleInputChange} required />
          <span></span>
          <label>Link</label>
        </div>
    
        <input type="submit" value='submit'/>
      </form>
        </div>
      </Modal>
      <OpportunitiesContent />
    </div>
  );
};

export default FormComponent;