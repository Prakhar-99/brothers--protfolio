import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./css/navbar.css";
import heroImg from "../assets/logo.png";
import {FaBars} from "react-icons/fa"
import { useState} from 'react';
const Navbar = () => {

  const [showLink, isShowLink] = useState('false');
 
  return (
    <nav className='nav-bar'>
        <div className='logo'>
       <Link to={"/"}><img src={heroImg} alt="logo" /></Link>   
       {/* <Link to={"/"}>  <h1>Protfolio</h1> </Link> */}
        </div>
        <ul className={showLink ? 'nav-link-container': 'mobile-link'}>
        <li><NavLink to={"/"}  >Home</NavLink></li>
        <li><NavLink to={"/about"} >About</NavLink></li>
        <li><NavLink to={"/contact"} >Contact</NavLink></li>
        </ul>
        <button className='hamburger' onClick={() => isShowLink(!showLink)}>  <FaBars  color="var(--secondary-color)" className='hamburger-icon'/></button>
      
    </nav>
  )
}

export default Navbar;