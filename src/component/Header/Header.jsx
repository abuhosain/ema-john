import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header'> 
           <img src={logo} alt="" /> 
           <nav>
           <a href="/shope">shope</a>
           <a href="/oreder">order</a>
           <a href="/inventory">inventory</a>
           <a href="/login">login</a>
           </nav>
        </div>
    );
};

export default Header;