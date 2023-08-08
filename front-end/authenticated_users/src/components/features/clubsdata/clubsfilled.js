import React, { useState, useEffect } from 'react';
import { Clubs } from "../Clubs";
import robotics_club from './../assets/robotics_club.jpg'
function Clubsfilled() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/clubs/?format=json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='clubs-block'>
      {/* Rendered while fetching data */}
      {data.length === 0 && <p>Loading...</p>}

      {/* Render clubs when data is available */}
      {data.length > 0 && (
        <div>
          {data.map((item) => (
            <Clubs
             desc_title ="Club's Mission"
              key={item.id}
              title={item.name}
              description={item.description}
              join = 'Join Club'
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
