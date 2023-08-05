import React from 'react';
import './CardSlider.css'; // Import your custom CSS styles here
import img1 from './../assets/Alu_event.png'
import img2 from './../assets/alu-student.jpg'
import img3 from './../assets/alustudents.jpg'

const Services = () => {
  return (
    <div className="services-container" id='CardSlider'>
      <h1 className="sub-title">Our Services</h1>
      <div className="services-list">
        <div className="services">
          <img src={img1} alt="alu-students" />
          <div className="layer">
            <h2>Real-Time Updates for Engaging Campus Life</h2>
            <p>
              Stay connected and informed with instant notifications about
              ongoing and upcoming events on campus. Never miss out on academic,
              cultural, or social activities with this user-friendly platform
              for students, faculty, and staff.
            </p>
          </div>
        </div>
        <div className="services">
          <img src={img2} alt="alu-students" />
          <div className="layer">
            <h2>
              ALU Clubs Discovery: Join and Engage in Diverse Campus Communities
            </h2>
            <p>
              Explore a comprehensive list of diverse clubs at ALU, each with
              brief descriptions. Discover opportunities for personal and
              academic growth, social connections, and leadership development.
              Learn how to join and actively participate in the clubs' enriching
              activities through ALU's dedicated student engagement platform.
            </p>
          </div>
        </div>
        <div className="services">
          <img src={img3} alt="alu-students" />
          <div className="layer">
            <h2>Empowering Students to Share Extra Activities & Opportunities</h2>
            <p>
              Campus Connect Hub offers ALU students an upload functionality to
              share information about exciting extra activities, events, and
              opportunities they discover. From internships and workshops to
              volunteering and social gatherings, this platform fosters a
              vibrant community where students can actively engage and
              contribute to each other's growth and success.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  );
};


const CardSlider = () => {
  return (
    <div>
      <Services />

    </div>
  );
};

export default CardSlider;
