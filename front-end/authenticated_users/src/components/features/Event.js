import TestComponent from "./Eventcontent";
import "./Event.css"
import React, { useState, useEffect } from "react";
import ClockLoader from "react-spinners/RingLoader";
function Event(){
  const [src, setSrc] = useState()
  const [all, setAll] = useState()
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(false);


  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    if (selectedFilter === 'All'){
      setAll(true)
    } else if (selectedFilter === 'Event'){
      setSrc(true)
      setAll(false)

    } else if (selectedFilter === 'Jobs opp'){
      setSrc(false)
      setAll(false)
    }
    setTimeout(() => {
      setIsLoading(false); // Stop the loading spinner after the operation is done
    }, 2000);
  }, [selectedFilter])
  return(
    <div className="main-Events">
      <h3 className="c_tody_title">Experience the convenience of seamlessly browsing through the latest campus updates </h3>     
      <div className='opp_head clubs_header'></div>
        <div className='filters eventfilter'>
            <label htmlFor="filterSelect">Filter by: </label>
            <select id="filterSelect"  value={selectedFilter} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Event">SRC updates</option>
            <option value="Jobs opp">ALU guests</option>

            </select>
          </div> 

          {isLoading && 
        (<div className='shareSpinner'>
          <ClockLoader color='#273b9f' size={100} aria-label='Loading Spinner' data-testid='loader' />
          </div>
      )}
      {!isLoading && (<div className="updates_body"><TestComponent 
        all = {all}
        src = {src}/></div>)}
    </div>
  )
}
export default Event