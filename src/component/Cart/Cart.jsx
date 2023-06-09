import React, { Children } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt} from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, handleClearCart, children}) => {
    // const cart = props.cart; // option 1
    // const {cart} = props // option 2
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;
    
    for(const product of cart){
        // if(product.quantity === 0){
        //     product.quantity ==1;
        // }
        // product.quantity = product.quantity || 1;
      
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        console.log(cart)
        console.log(product.quantity)
         quantity = quantity + product.quantity
    //    console.log(product.quantity)
    }
    const tax = total * 7 /100;
    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order summery</h4>
            <p>Selected items:{quantity}</p>
            <p>Total Price:{total}</p>
            <p>Total Shipping:{totalShipping}</p>
            <p>Tax:{tax}</p>
            <h6>Grand Total:{grandTotal}</h6>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span>Clear Cart</span>
            <FontAwesomeIcon className='' icon={ faTrashAlt} /> 
                </button>
                {children}
        </div>
    );
};

export default Cart;