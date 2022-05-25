import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function Form()  {
    const location = useLocation();
    const { name,email,title,image,cost,duration } = location.state;
    const [locationName,setLocationName] = useState(name);
    const [locationEmail,setLocationEmail] = useState(email);
    const [locationTitle,setLocationTitle] = useState(title);
    const [locationImage,setLocationImage] = useState(image);
    const [locationCost,setLocationCost] = useState(cost);
    const [locationDuration,setLocationDuration] = useState(duration);
    const [toggle,setToggle] = useState(false);

    const handleDelete = () => {
      setLocationName("");
      setLocationEmail("");
      setLocationImage(null);
      setLocationCost("");
      setLocationDuration("");
      setLocationTitle("");
      setToggle(true);
    } 

    if(toggle )
    {
      return(
        <div><h1 style={{marginLeft:"-900px" ,marginTop:"50px"}}>Tour Booked</h1></div>
      )
    }
    else
    {
      return (
        <div>
            <h1 style={{marginLeft:"-900px" ,marginTop:"50px"}}>Tour Booked</h1>

            <div class="card mb-3" style={{maxWidth: "740px", marginLeft:"100px", marginTop:"50px"}}>
             <div class="row g-0">
              <div class="col-md-4">
               <img src={locationImage} class="img-fluid rounded-start" alt="..."/>
              </div>
             <div class="col-md-8">
               <div class="card-body">
                 <h3 style={{color: "blue"}}>{locationTitle}</h3>
                <h5 class="card-title">{locationName}</h5>
                  <h6 class="card-title">{locationEmail}</h6>
                    <p class="card-text">{locationCost}</p>
                    <p class="card-text"><small class="text-muted">{locationDuration}</small></p>
                    {locationName && locationEmail ? <button className="btn btn-danger" onClick={handleDelete}>Cancel Booking</button> : ""}
                </div>
              </div>
              </div>
            </div>
        </div>  
      );
    }   
}
 
export default Form;