// import React from 'react'

"use client"
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare,faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// import { BiFacebook, BiInstagram } from 'bootstrap-icons-react';

export default function Footer() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_1t2xzug', 'template_fqehl6f', form.current, {
            publicKey: 'QuUCgUcqp5sKKkVOF',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <>
     <div className='footer'>
        <div className="left">
            <div>
                <h4>COMPANY</h4>
                <a href="/">About Aura</a>
                <a href="/">Sustainability</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Terms & Conditions</a>
            </div>

            <div>
                <h4>ASSISTANCE</h4>
                <a href="/">Shipping & Delivery</a>
                <a href="/">Returns & Exchanges</a>
                <a href="/">Account</a>
                <a href="/">FAQS</a>
            </div>

            <div>
                <h4>CONTACT US</h4>
                <a href="/">Email Us</a>
                <a href="/">Whatsapp Us</a>
                <a href="/">DM Us</a>
            </div>
        </div>

        <div className="right">
            <form ref={form} onSubmit={sendEmail}>
                <div className='friends'>
                    <h3>CAN WE BE FRIENDS?</h3>
                </div>
                <div className='email-box'>
                    <input type="email" name ="email" placeholder="Enter your email address" className="footer-email" />
                    <input type="submit" value="Subscribe" className="footer-btn" name="reply_to" />
                </div>
            </form>
            <div className='right-icons'>
                <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faFacebookSquare}/>
                {/* <BiFacebook />  */}
                </a>
                <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faInstagramSquare}/>
                {/* <BiInstagram /> */}
                </a>
            </div>
            <div className='name-logo'>
                @ Aura Clothing
            </div>

        </div>
      
    </div>
    </>
  )
}
