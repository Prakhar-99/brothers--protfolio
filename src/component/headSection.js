import React from 'react'
import "./css/headSection.css";
import {FaArrowAltCircleDown} from "react-icons/fa"
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter} from "react-icons/ai"
import { Link } from 'react-router-dom';
const HeadSection = (props) => {
  return (
    <section className='head-section'>
       <h1 className='head-sec-heading'> know more <span> about</span>  me </h1> 
     <Link to = {"/contact"}><button className='bttn-secondary'>contact</button></Link>  
     
       <a href="#about">  < FaArrowAltCircleDown size={40} color= '#eaece2' className='down-icon' /> </a>
     <div className='social-icon-cont'>
    <AiOutlineFacebook size={30} color='var(--secondary-color)' className='social-icon' />
    <AiOutlineInstagram size={30} color='var(--secondary-color)'  className='social-icon'/>
    <AiOutlineTwitter size={30} color='var(--secondary-color)'  className='social-icon'/>
     </div>
      
    </section>
  )
}

export default HeadSection