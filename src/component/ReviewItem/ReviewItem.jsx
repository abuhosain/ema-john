import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';


const ReviewItem = ({product,handleRemoveFromCard}) => {
    return (
        <div className='review-item'>
            <img src={product.img} alt="" />
            <div className='review-details'>
                <p className='pd-title'>Name:{product.name}</p>
                <p>Price:<span className='orange-text'>${product.price}</span></p>
                <p>Quantity:<span>${product.quantity}</span></p>
            </div>
            <button onClick={()=> handleRemoveFromCard(product.id) } className='btn-delete'>
            <FontAwesomeIcon className='delete-icon' icon={ faTrashAlt} /> 
            </button>
        </div>
    );
};

export default ReviewItem;