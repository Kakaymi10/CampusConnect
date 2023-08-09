import React, {useState, useEffect} from "react";
import { Clubs } from "./Clubs";
import { app } from "../authentic/config";
import { getDatabase, ref, onValue } from 'firebase/database';
import "./opportunities.css"
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
                />
            ))}
        </div>
    )
}
export default OpportunitiesContent