import React, { Component } from 'react';

class Us extends Component {
    state = { 
        pic : ("./assets/images/A1.png"),
     } 
    render() { 
        return (
            <div style={{display:"flex",flexDirection:"row"}}>
                <img src={this.state.pic} style={{marginLeft:"100px"}}/>
                <div style={{width:"500px"}} >
                <h3 style={{marginLeft:"30px"}}>TourX</h3>
                <h1 style={{marginLeft:"20px"}}>The Best Travel Agency Company.</h1>
                <br/>
                <p style={{marginLeft:"30px"}}>Welcome to website of Travel & Culture Services, a Tour-operator and travel agent in, Pakistan. We are licensed by the Ministry of Tourism Government of Pakistan to operate Tours to Pakistan and International which include culture tours, adventure tours and trekking in Pakistan, for foreigners and Pakistanis. Our License Number is 4428

                </p>
                </div>
            </div>
        );
    }
}
 
export default Us;