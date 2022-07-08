/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className='menu'>
               <a href="#">Home</a>
               <a href="#">Contact</a>
               <a href="#">Help</a>
            </nav>
        </div>
    );
};

export default Header;