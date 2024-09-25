import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" className='logo'/>
      <div className='nav-links'>
        <a href="#home">Home</a>
        <a href="#trending">Trending</a>
        <a href="/watchlist">Watchlist</a>
        <a href="/about">About</a>
        <div className='dropdown'>
          <button className='dropbtn' onClick={toggleDropdown}>Profile</button>
          {isOpen && (
            <div className='dropdown-content'>
              <a href="/profile">My Profile</a>
              <a href="/settings">Settings</a>
              <a href="/logout">Logout</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;


