import React, { Component } from 'react';
import Footer from './Footer';
import Recommend from './Recommend';
import Testimonials from './Testimonalis';

class Services extends Component {
    state = { 
        pic : ("./assets/images/S1.png"),
     } 
    render() { 
        return (
            <div>
            <link to="/services"></link>
            <div>
            <img src={this.state.pic} alt="..." style={{width:"100%"}}/>
            <Recommend/>
            <br/>
            <br/>
            <Testimonials/>
            <br/>
            <br/>
            <Footer/>
            </div>
            </div>
        );
    }
}
 
export default Services;