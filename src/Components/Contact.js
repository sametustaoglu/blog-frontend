import React from 'react'
import './Contact.css'
import {useRef} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function Contact() {

    const showToastMessage = () => {
        toast.success('Email has been sent successfully!', {
            position: toast.POSITION.BOTTOM_CENTER
        });
    };


    const name = useRef(null);
    const email = useRef(null);
    const message = useRef(null);

    const sendEmail = async (name, email, message) => {
        await fetch('https://mail.sametustaoglu.com/sendMail', {
           method: 'POST',
           body: JSON.stringify({
              name: name,
              from: email,
              text: message,
              subject: 'Personal Website'
           }),
           headers: {
              'Content-type': 'application/json; charset=UTF-8',
           },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.result);
            console.log(data.message);
        })
        .catch((err) => {
            console.log(err.message);
        });
     };
     
     const handleOnSubmit = (e) => {
        const formData = new FormData(e.currentTarget);
        e.preventDefault();
       
        sendEmail(formData.get('name'), 
        formData.get('email'), 
        formData.get('message'));

        showToastMessage();
        e.target.reset();
     };    

    return (
        <div className='contact' id='contact'>
            <h2 className='contact-title'>Contact</h2>
            <div className="contact-container">
                <img className='contact-image' src='./assets/contact.png' alt=''></img>
                <form onSubmit={handleOnSubmit}>
                    <label htmlFor="name">Name</label>
                    <input ref={name} type="text" id="name" name="name" placeholder="Your name.." required/>

                    <label htmlFor="email">Email</label>
                    <input ref={email} type="text" id="email" name="email" placeholder="Your email..." required/>

                    <label htmlFor="message">Message</label>
                    <textarea ref={message} id="message" name="message"  placeholder="Write something.." required></textarea>

                    <input type="submit" value="Submit" />
                    <ToastContainer />
                    
                </form>
            </div>
        </div>
    )
}

export default Contact