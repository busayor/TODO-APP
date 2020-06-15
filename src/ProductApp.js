import React, { Component } from 'react';
import Product from './components/Product';
import productData from './Data/productsData'

class ProductApp extends Component {
    render() { 
        const productsComponent = productData.map(product =>{
            return (
              <Product 
                key = {product.id}
                name={product.name} 
                price={product.price} 
                ImageUrl = {product.ImageUrl}
                productDescription = {product.productDescription}
              />
            )
          }
        )
        return ( 
            <div>{productsComponent}</div>
            
         );
    }
}
 
export default ProductApp;