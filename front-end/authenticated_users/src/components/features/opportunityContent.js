import React, {useState, useEffect} from "react";
import { Clubs } from "./Clubs";
import { app } from "../authentic/config";
import { getDatabase, ref, onValue } from 'firebase/database';
import "./opportunities.css"



// Function to format timestamp to "time ago" format
const formatTimeAgo = (timestamp) => {
    const now = new Date();
    const pastDate = new Date(timestamp);
  
    const seconds = Math.floor((now - pastDate) / 1000);
    if (seconds < 60) {
      return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }
  
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    }
  
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }
  
    const days = Math.floor(hours / 24);
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  };




function OpportunitiesContent(){
    const [opportunities, setOpportunities] = useState([]);

    useEffect(() => {
        const database = getDatabase(app);
        const dbRef = ref(database, 'opportunities'); // Use the database instance

        onValue(dbRef, snapshot => {
            const data = snapshot.val();
            if (data) {
                const opportunitiesList = Object.values(data);
                setOpportunities(opportunitiesList);
            }
        });
        
      }, []);
    return(
        <div className="opp_content">
            {opportunities.map(opportunity => (
                <Clubs 
                    key = {opportunity.id}
                    desc_title = 'Description'
                    title={opportunity.title}
                    description = {opportunity.description}
                    contact = {opportunity.deadline}
                    join = 'Apply'
                    image = {opportunity.image}
                    id = 'none'
                    link = {opportunity.link}
                    posted = {formatTimeAgo(opportunity.timestamp)}
                />
            )).reverse()}
        </div>
    )
}
export default OpportunitiesContent