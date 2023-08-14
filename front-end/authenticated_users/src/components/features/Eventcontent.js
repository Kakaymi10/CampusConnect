import React, {useEffect, useState} from "react";
import "./Event.css"
import { Clubs } from "./Clubs";
import { getDatabase, ref, onValue } from 'firebase/database';
import { app } from "../authentic/config";
import ClockLoader from "react-spinners/RingLoader";
// Get a reference to the Firebase Realtime Database
function TestComponent(props) {  
  const [data, setData] = useState([]);

  useEffect(() => {
    const database = getDatabase(app);
    const dbRef = ref(database, 'updates'); // Use the database instance

    onValue(dbRef, snapshot => {
        const data = snapshot.val();
        if (data) {
            const opportunitiesList = Object.values(data);
            setData(opportunitiesList);
        }
    });
    
  }, []);  
    return (
      <div>
            {data.length === 0 && <div className='spinner'><ClockLoader 
          color="#273b9f" 
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
          /></div>
          }

          {props.all ? (
            <div>  
            {data.map((item) => (
              <Clubs
              desc_title ="Descriptiom"
              sender = {item.sender}
              key={item.id}
              title={item.title}
              description={item.description}
              location = {item.location}
              posted = {item.date}
              join = 'RSVP'
              link = {item.rsvp}
              contact = 'Contacts'
              email = 'https://thumbs.dreamstime.com/z/internship-learnin…er-preparation-concept-working-85688117.jpg?w=992'
              intagram = 'https://thumbs.dreamstime.com/z/internship-learnin…er-preparation-concept-working-85688117.jpg?w=992'
              image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxtTDW7v6ahwQrhTdyln2hydFk9G3dAiqaA&usqp=CAU'
            />
            ))}
          </div>
          ): props.src ? (
            <div className="opp_content">
              {data
                .filter(item => (item.sender === 'src_rw@comms.alustudent.com'))
                .map(item => (
                  <Clubs
              desc_title ="Descriptiom"
              sender = {item.sender}
              key={item.id}
              title={item.title}
              description={item.description}
              location = {item.location}
              posted = {item.date}
              join = 'RSVP'
              link = {item.rsvp}
              contact = 'Contacts'
              email = 'https://thumbs.dreamstime.com/z/internship-learnin…er-preparation-concept-working-85688117.jpg?w=992'
              intagram = 'https://thumbs.dreamstime.com/z/internship-learnin…er-preparation-concept-working-85688117.jpg?w=992'
              image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxtTDW7v6ahwQrhTdyln2hydFk9G3dAiqaA&usqp=CAU'
            />
                ))
                .reverse()
              }
              {data.some(item => (item.sender === 'src_rw@comms.alustudent.com')) && (
                <div>
                  <p>No Job or internship</p>
                </div>
              )}
            </div>
          ) : (
            <div className="opp_content">
              {data
                .filter(item => (item.sender === 'guests_rw@alueducation.com'))
                .map(item => (
                  <Clubs
              desc_title ="Descriptiom"
              sender = {item.sender}
              key={item.id}
              title={item.title}
              description={item.description}
              location = {item.location}
              posted = {item.date}
              join = 'RSVP'
              link = {item.rsvp}
              contact = 'Contacts'
              email = 'https://thumbs.dreamstime.com/z/internship-learnin…er-preparation-concept-working-85688117.jpg?w=992'
              intagram = 'https://thumbs.dreamstime.com/z/internship-learnin…er-preparation-concept-working-85688117.jpg?w=992'
              image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToxtTDW7v6ahwQrhTdyln2hydFk9G3dAiqaA&usqp=CAU'
            />
                ))
                .reverse()
              }
              {data.some(item => (item.sender === 'guests_rw@alueducation.com')) && (
                <div>
                  <p>No Job or internship</p>
                </div>
              )}
            </div>
          )}
      </div>
    
  )}
  
  export default TestComponent