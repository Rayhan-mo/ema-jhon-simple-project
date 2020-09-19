import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total +prd.price , 0);
    
    let shipping=0;
    if(total > 35){
        shipping= 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total >0){
        shipping = 12.99;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision); 
    }
    return (
        <div>
            <h4>Order Summery</h4>
            <h5>Total Ordered: {cart.length}</h5>
            <p>Shipping Cost: {formatNumber(shipping)}</p>
            <p>Vat : {tax}</p>
            <h5>Total price: {grandTotal}</h5>
        </div>
    );
};

export default Cart;