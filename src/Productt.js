import React, { Component } from 'react';

class Productt extends Component {
    state = {  } 


    render() { 
        return (
            <div>
                <h1>Product Name: {this.props.prodName}</h1>
                <h2>Maker: {this.props.maker}</h2>
                <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
            </div>
        );
    }
}
 
export default Productt;