import React, { useState, useEffect } from "react";
import "./Home.css";
import { Clubs } from "./Clubs";
import { getDatabase, ref, onValue } from 'firebase/database';
import { app } from "../authentic/config";
import ClockLoader from "react-spinners/RingLoader";
// Function to check if the current time is within a specified range
const checkLiveStatus = (startTime, endTime) => {
  const currentTime = Date.now();
  const startTimeValue = new Date(startTime).getTime();
const endTimeValue = new Date(endTime).getTime();
  return currentTime >= startTimeValue && currentTime <= endTimeValue;
};

const locations = ['Campus', 'ALU', 'Leadership Center', 'room', 'Room']

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const database = getDatabase(app);
    const dbRef = ref(database, 'updates');

    // Listen for changes in data from Firebase
    onValue(dbRef, snapshot => {
      const data = snapshot.val();
      if (data) {
        const opportunitiesList = Object.values(data);
        setData(opportunitiesList);
      }
    });
  }, []);

  const isSameDay = (date) => {
    const date1 = new Date()
    const date2 = new Date(date)
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  const upcoming = (date) => {
    const date1 = new Date()
    const date2 = new Date(date)
    return (
      (date1.getFullYear() === date2.getFullYear()) &&
      (date1.getMonth() < date2.getMonth() ||
      date1.getDate() < date2.getDate())
    );
  }

  function performComparison(s, j) {
    for (const i of s) {
        if (j.includes(i)) {
            return true;
        }
    }
    return false;
  }

  const renderClubs = (items) => {
    return items.map(item => (
      <Clubs
              desc_title="Descriptiom"
              sender={item.sender}
              key={item.id}
              title={item.title}
              description={item.description}
              location={item.location}
              posted={item.date}
              join='Join'
              contact='Contacts'
              email='https://thumbs.dreamstime.com/z/internship-learnin…er-preparation-concept-working-85688117.jpg?w=992'
              intagram='https://thumbs.dreamstime.com/z/internship-learnin…er-preparation-concept-working-85688117.jpg?w=992'
              image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxtTDW7v6ahwQrhTdyln2hydFk9G3dAiqaA&usqp=CAU'
            />
    ));
  };

  const liveFilteredData = data.filter(item => checkLiveStatus(item.start, item.end) && performComparison(locations, item.location));
  const sameDayFilteredData = data.filter(item => isSameDay(item.date) && !checkLiveStatus(item.start, item.end) && performComparison(locations, item.location));
  const upcomingFilteredData = data.filter(item => upcoming(item.date) && performComparison(locations, item.location));
  
  return (
    <div>
    {data.length === 0 && <div className='spinner'><ClockLoader 
    color="#273b9f" 
    size={100}
    aria-label="Loading Spinner"
    data-testid="loader"
    /></div>
    }
    {data.length > 0 && (
    <div className="banner">
      <h3 className="c_tody_title">Experience the convenience of seamlessly browsing through the latest campus updates </h3>     
      <div className="c_today_body">
      <h3 className="today">Campus Live:</h3> 
        {liveFilteredData.length > 0 ? (data.filter(item => checkLiveStatus(item.start, item.end) && performComparison(locations, item.location))
          .map(item => (
            <Clubs
              live='live'
            islive='Live'
              desc_title="Descriptiom"
              sender={item.sender}
              key={item.id}
              title={item.title}
              description={item.description}
              location={item.location}
              posted={item.date}
              join='Join'
              contact='Contacts'
              email='https://thumbs.dreamstime.com/z/internship-learnin…er-preparation-concept-working-85688117.jpg?w=992'
              intagram='https://thumbs.dreamstime.com/z/internship-learnin…er-preparation-concept-working-85688117.jpg?w=992'
              image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxtTDW7v6ahwQrhTdyln2hydFk9G3dAiqaA&usqp=CAU'
            />
          ))):(<h1 className="empty">No Live Updates</h1>)}
          <div>
          <h3 className="today">Campus Today:</h3>
          {sameDayFilteredData.length > 0 ? renderClubs(sameDayFilteredData) : <h1 className="empty">No Updates</h1>}
            
          </div>
      </div>
      
      <div className="upcoming">
        <h3 className="today">Upcomings</h3>
        {upcomingFilteredData.length > 0 ? renderClubs(upcomingFilteredData) : <h1 className="empty">No Upcoming Updates</h1>}
          
      </div>
    </div>)}
    </div>
  );
}
