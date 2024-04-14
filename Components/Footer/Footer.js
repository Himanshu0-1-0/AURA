import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare,faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
// import { BiFacebook, BiInstagram } from 'bootstrap-icons-react';

export default function Footer() {
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
            <div className='friends'>
                <h3>CAN WE BE FRIENDS?</h3>
            </div>
            <div className='email-box'>
                <input type="email" placeholder="Enter your email address" className="footer-email" />
                <input type="submit" value="Subscribe" className="footer-btn" />
            </div>
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
