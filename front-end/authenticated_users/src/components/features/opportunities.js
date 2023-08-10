import React, { useEffect, useState } from 'react';
import { app } from '../authentic/config';
import { getDatabase, ref, push, set } from 'firebase/database';
import Modal from "react-modal";
import { FaPlus } from 'react-icons/fa';
import OpportunitiesContent from './opportunityContent';
import "./opportunities.css";
import './../authentic/login.css';

const FormComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [share, setShare] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('');
  const [event, setEvent] = useState(false)
  const [all, setAll] = useState(false)

  const initialFormData = {
    image: 'https://thumbs.dreamstime.com/z/internship-learnin…er-preparation-concept-working-85688117.jpg?w=992',
    title: '',
    deadline: '',
    description: '',
    link: '',
    timestamp: new Date().toISOString()
  };

  const [formData, setFormData] = useState(initialFormData);

  const initialFormEvent = {
    image: 'https://img.freepik.com/premium-vector/logo-vector…ncept-minimalism-technology_790567-360.jpg?w=1060',
    title: '',
    deadline: '',
    description: '',
    location: '',
    link: '',
    timestamp: new Date().toISOString()
  };

  const [formEvent, setFormEvent] = useState(initialFormEvent);

  const handleInputChange = (event, isEventForm) => {
    const { name, value } = event.target;
    const formToUpdate = isEventForm ? formEvent : formData;
    const updatedForm = { ...formToUpdate, [name]: value };
    isEventForm ? setFormEvent(updatedForm) : setFormData(updatedForm);
  };

  const handleSubmit = async (event, formValues) => {
    event.preventDefault();
    const db = getDatabase(app);
    const dbRef = ref(db, '/opportunities');

    try {
      await push(dbRef, formValues);
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

  const handlShare = () => {
    setShare(!share);
    console.log(share);
  };

  const clearFormData = () => {
    setFormData(initialFormData);
    setFormEvent(initialFormEvent);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  useEffect(() => {
    if (selectedFilter === 'All'){
      setAll(true)
    } else if (selectedFilter === 'Event'){
      setEvent(true)
      setAll(false)

    } else if (selectedFilter === 'Jobs opp'){
      setEvent(false)
      setAll(false)
    }

  }, [selectedFilter])
  return (
    <div className='oppo_main'> 
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
          <div className='share-with-us-header'>
            <button className={share ? 'share-internship': 'share-event-focus'} onClick={handlShare}>Share Internship</button>
            <button className={share ? 'share-event-focus': 'share-internship'} onClick={handlShare}>Share Event</button>
          </div>
          <h1></h1>
          {share ? (
            <form onSubmit={(e) => handleSubmit(e, formData)}>
              <div className="txt_field">
                <input type="text" name="image" value={formData.image} onChange={(e) => handleInputChange(e, false)} required disabled/>
                <span></span>
                <label>Image URL</label>
              </div>
              <div className="txt_field">
                <input type="text" name="title" value={formData.title} onChange={(e) => handleInputChange(e, false)} required/>
                <span></span>
                <label>Title</label>
              </div>
              <div className="txt_field">
                <input type="text" name="deadline" value={formData.deadline} onChange={(e) => handleInputChange(e, false)} required/>
                <span></span>
                <label>Deadline</label>
              </div>
              <div className="txt_field">
                <input type="text" name="description" value={formData.description} onChange={(e) => handleInputChange(e, false)} required/>
                <span></span>
                <label>Description</label>
              </div>
              <div className="txt_field">
                <input type="text" name="link" value={formData.link} onChange={(e) => handleInputChange(e, false)} required />
                <span></span>
                <label>Link</label>
              </div>
              <input type="submit" value='Submit'/>
            </form>
          ) : (
            <form onSubmit={(e) => handleSubmit(e, formEvent)}>
              <div className="txt_field">
                <input type="text" name="image" value={formEvent.image} onChange={(e) => handleInputChange(e, true)} required disabled/>
                <span></span>
                <label>Image URL</label>
              </div>
              <div className="txt_field">
                <input type="text" name="title" value={formEvent.title} onChange={(e) => handleInputChange(e, true)} required/>
                <span></span>
                <label>Title</label>
              </div>
              <div className="txt_field">
                <input type="text" name="deadline" value={formEvent.deadline} onChange={(e) => handleInputChange(e, true)} required/>
                <span></span>
                <label>Deadline</label>
              </div>
              <div className="txt_field">
                <input type="text" name="description" value={formEvent.description} onChange={(e) => handleInputChange(e, true)} required/>
                <span></span>
                <label>Description</label>
              </div>
              <div className="txt_field">
                <input type="text" name="location" value={formEvent.location} onChange={(e) => handleInputChange(e, true)} required/>
                <span></span>
                <label>Location</label>
              </div>
              <div className="txt_field">
                <input type="text" name="link" value={formEvent.link} onChange={(e) => handleInputChange(e, true)} required />
                <span></span>
                <label>Link</label>
              </div>
              <input type="submit" value='Submit'/>
            </form>
          )}
        </div>
      </Modal>
      <div className='filters'>
      <label htmlFor="filterSelect">Filter by: </label>
      <select id="filterSelect" value={selectedFilter} onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Event">Event</option>
        <option value="Jobs opp">Jobs opp</option>

      </select>
      </div>
      <OpportunitiesContent 
        all = {all}
        event = {event}/>
    </div>
  );
};

export default FormComponent;
