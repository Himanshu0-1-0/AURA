"use client"
import './Contactform.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contactform() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1t2xzug', 'template_qxjp84e', form.current, {
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

    <div className='form-container'>
      <h1>Send a msg to us!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder='Name'/>
        <input type="email" name="user_email" placeholder='Email'  />
        <textarea name="message" cols="30" rows="4" placeholder='Message' />
        <button type="submit" value="Send"> Submit </button>
      </form>
    </div>
  );
}
