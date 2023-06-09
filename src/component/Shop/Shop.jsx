import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=> {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))   
    },[]);

    useEffect(()=>{
        const storCart = getShoppingCart();
        const savedCart = []
        for(const id in storCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
           
        }
        setCart(savedCart)
    },[products])

    const handleAddToCart = (product) =>{
        let  newCart = []
        const exists = cart.find(pd => pd.id == product.id)
        if(!exists){
            product.quantity = 1;
             newCart = [...cart, product];
        } else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id = product.id);
            newCart = [...remaining, exists]
        }
        setCart(newCart);
        addToDb(product.id)
    }

    const handleClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }

   
    return (
        <div className='shop-container'>
            <div className="products-container">
              {
                products.map(product => <Product
                key={product.id}
                product={product}
                handleAddToProduct={handleAddToCart}
                > </Product>)
              }
            </div>
            <div className="cart-container">
                <Cart key={cart.quantity} handleClearCart={handleClearCart} cart={cart}><div><Link to="/orders" ><button className='btn-proceed'>Review Order</button></Link></div></Cart>
            </div>
        </div>
    );
};

export default Shop;