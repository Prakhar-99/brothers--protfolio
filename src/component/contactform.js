import React from 'react';
import "./css/contactform.css"
const ContactForm = () => {
  return (
    <section className='contact-form'> 
     <div className='left-contact-area'></div>
    <div className='right-contact-area'>
        <h1 className='contact-heading'>Lets have a <span>Chat</span> </h1>
        <form className='contactform'>
            <label htmlFor="name">Name</label><br />
            <input type="text" name="name" id="name" required /><br />
            <label htmlFor="email">Email-id</label><br />
            <input type="email" name="email" id="email" required /><br />
            <label htmlFor='feedback'> Feedback</label><br/>
            <textarea className='feedback' rows={1} name="feedback"></textarea><br />
            <button className='submmit bttn-primary'>Send</button>
        </form>
    </div>
   
    </section>
    )
}

export default ContactForm;