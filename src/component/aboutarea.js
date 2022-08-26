import React from 'react';
import aboutImg from '../assets/about-img-modified.png';
import "./css/aboutarea.css";
import { Link } from 'react-router-dom';
const AboutArea = () => {
  return (
    <div className='about-content-container' id='about'>
          <div className='about-img-cont'>
            <img src={aboutImg} alt="about-img" />
        </div>
        <div className='about-text-cont'>
            <h2 className='about-heading'>About Me</h2>
            <p className='about-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus asperiores modi inventore debitis sunt excepturi ducimus laudantium nulla aut doloribus ea nemo iusto a, illum eaque est eveniet expedita libero quibusdam quaerat architecto voluptatem minima voluptatum sint. Aut sint architecto doloremque, consequatur laborum dolorem itaque maxime officia quisquam quos ad nulla voluptatem earum labore sapiente! Cum eum laborum corporis distinctio numquam consequuntur sequi pariatur error rem, repudiandae minus aperiam unde excepturi sint? Mollitia corrupti officiis tempore neque voluptatem distinctio nostrum cum unde earum deleniti soluta repellat excepturi pariatur rerum fugiat expedita, voluptate voluptatum hic impedit deserunt. Maxime aut earum quaerat.</p>
            <div>
            <Link to={"/contact"} className='bttn-secondary'>contact </Link>
            </div>
        </div>
    </div>
  )
}

export default AboutArea;