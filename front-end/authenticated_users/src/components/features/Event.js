import React from "react";
import "./Event.css"
import Card from "./Card";

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';

const firebaseConfig = {
  // Your Firebase app configuration options
  apiKey: "AIzaSyDbloeJNjdhU840mPSdQiYaIJkKWCMKOI4",
  authDomain: "alu-hackathon.firebaseapp.com",
  databaseURL: "https://alu-hackathon-default-rtdb.firebaseio.com",
  projectId: "alu-hackathon",
  storageBucket: "alu-hackathon.appspot.com",
  messagingSenderId: "903657003269",
  appId: "1:903657003269:web:cdf7eb75098b7aea6ebf6c",
  measurementId: "G-M355NDKVJ1"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase Realtime Database
function TestComponent() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      // Get a reference to the Firebase Realtime Database
      const db = getDatabase();
  
      // Define a reference to the location of your data
      const myDataRef = ref(db, 'events');
  
      // Listen for changes to the data and update the state
      onValue(myDataRef, (snapshot) => {
        const data = snapshot.val();
        setData(data);
      });
    }, []);
    const mydatas = data && Array.isArray(data) ? data.slice(1) : [];
    
    const cards_map = mydatas.map(items => {
        return(

          <Card 
            key = {items.title}
            {...items}
          />
        )
      })
    
    
    return (
      <div className="main-Events">
        
        {cards_map}
       
 
      </div>
    );
  }
  
  export default TestComponent;