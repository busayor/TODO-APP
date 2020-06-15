import React, { Component } from 'react';

class Product extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h3>Image: {this.props.ImageUrl}</h3>
                <h2>{this.props.name}</h2>
                <h3>Price: =N={this.props.price}<br/>{this.props.productDescription}</h3>
                <hr/>
            </div>
         );
    }
}
 
export default Product;