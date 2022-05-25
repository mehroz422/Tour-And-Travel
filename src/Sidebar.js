import React, { Component } from 'react';

class Sidebar extends Component {
    state = { 
        pic : ("./images/C.png"),
     } 
    render() { 
        return (
                <div className="card" style={{width: "18rem"}}>
  <img src={this.state.pic} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Amazing Tour All over the World  </h5>
    <p className="card-text">
    Get register for Amazing Trips 
    </p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">2000+ Our worldwide guide</li>
    <li className="list-group-item">100% trusted travel agency</li>
    <li className="list-group-item">10+ year of travel experience</li>
    <li className="list-group-item">90% of our traveller happy</li>
  </ul>

</div>
            
        );
    }
}
 
export default Sidebar;
