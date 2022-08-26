import React from 'react';
import "./css/homeherosec.css";
import heroImg from "../assets/headSectionImg-modified.png";
import { Link } from 'react-router-dom';
const HomeHeroSec = () => {
  return (
    <section className='home-hero-sec'>
      <div className='left-area'>
        <h1 className='hero-heading'>I'm Pragyesh <br /> A <span>Mechanical Engineer</span> </h1>
        <p className='hero-para'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni perspiciatis officia, voluptatibus animi laboriosam  </p>
        <div className='btn-cont'>
          <Link className='bttn-primary' to ={"/about"}>About</Link>
          <Link className='bttn-secondary' to={"/contact"}>Contact</Link>
        </div>
      </div>
      <div className='right-area'>
       <img src={heroImg} alt="hero-img" className='hero-img'/>
      </div>
      {/* <div className='hero-icon-cont'></div> */}
    </section>
    )
}

export default HomeHeroSec;