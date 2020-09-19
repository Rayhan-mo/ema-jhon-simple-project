import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    console.log(props.product);
   const {name, img, seller, price} = props.product;
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt=""/>    
            </div>
            <div className="details">
                  <h4>{name}</h4>
                  <br/>
                  <p>by:{seller}</p>
                  <h5>${price}</h5>
                  <button className="addCartButton"
                    onClick={() => props.handleClick(props.product)}>
                   <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;