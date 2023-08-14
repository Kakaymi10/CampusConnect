import React, { useState, useEffect, CSSProperties } from 'react';
import { Clubs } from "../Clubs";
import robotics_club from './../assets/robotics_club.jpg'
import { app } from '../../authentic/config';
import { getDatabase, ref, onValue } from 'firebase/database';
import ClockLoader from "react-spinners/RingLoader";
import './../Clubs.css'

function Clubsfilled() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const database = getDatabase(app);
    const dbRef = ref(database, 'clubs'); // Use the database instance

    onValue(dbRef, snapshot => {
        const data = snapshot.val();
        if (data) {
            const opportunitiesList = Object.values(data);
            setData(opportunitiesList);
        }
    });
    
  }, []);

  return (
    <div className='clubs-block'>
      {/* Rendered while fetching data */}
      {data.length === 0 && <div className='spinner'><ClockLoader 
        color="#273b9f" 
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>
}

      {/* Render clubs when data is available */}
      {data.length > 0 && (
        <div clubs-block>
          <h3 className="c_tody_title">Experience the convenience of seamlessly browsing through the latest campus updates </h3>     
          <div className='opp_head clubs_header'></div>
          {data.map((item) => (
            <Clubs
             desc_title ="Club's Mission"
              key={item.id}
              title={item.name}
              description={item.description}
              join = 'Join Club'
              link = {item.join}
              contact = 'Contacts'
              email = {item.email}
              intagram = {item.instagram_link}
              image = {robotics_club}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Clubsfilled;
