import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.skintech} alt="app logo"/>
    </div>

    <ul className="app__navbar-links">
      <li className="p__opensans"><a href='#home'>Home</a></li>
      <li className="p__opensans"><a href='#aboutus'>About us</a></li>
      <li className="p__opensans"><a href='#products'>Our Products</a></li>
      <li className="p__opensans"><a href='#contactus'>Contact us</a></li>
    </ul>
    <div className="app__navbar__smallscreen">
      <GiHamburgerMenu color="black" fontSize={27} onClick={() => {}}/>

      <div className="app__navbar__smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu color="black" fontSize={27} className="overlay__close" onClick={() => {}}/>
        <ul className="app__navbar-smallscreen-links">
          <li className="p__opensans"><a href='#home'>Home</a></li>
          <li className="p__opensans"><a href='#aboutus'>About us</a></li>
          <li className="p__opensans"><a href='#products'>Our Products</a></li>
          <li className="p__opensans"><a href='#contactus'>Contact us</a></li>
        </ul>
      </div>      
    </div>

  </nav>
);

export default Navbar;
