import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from './pngwing.com.png';
import img from '../../source/IMG_20220705_211027.jpg';




const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-link'>
        <div className="navbar-links_logo">
          <img src={img} alt="Logo" />
        </div>
        <div className='alin'>
        <p><a href="#alin">ALINJOE</a></p>
        </div>

        <div className='hmcontainer'>
          
          <p><a href="#home">HOME</a></p>
          <p><a href="#about">ABOUT</a></p>
          <p><a href="#project">PROJECT</a></p>
          <p><a href="#contact">CONTACT</a></p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
