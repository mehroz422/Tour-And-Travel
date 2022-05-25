import React, { Component } from 'react';
import Productt from './Productt';

class Products extends Component {
    state = { 
        products: [
            { id: 1, name: "Watch", manufacturer: "Japan"},
            { id: 2, name: "Trouser", manufacturer: "Pakistan"},
            { id: 3, name: "Phone", manufacturer: "UK"}
        ]
    };

    handleDelete = (id) => {
        const products = this.state.products.filter(p => p.id != id);
        this.setState({ products });
    };

    render() { 
        return (
            <div>
                {this.state.products.map(products => (
                    <Productt id={products.id} prodName={products.name} maker={products.manufacturer} onDelete={this.handleDelete} />
                ))}
            </div>
        );
    }
}
 
export default Products;