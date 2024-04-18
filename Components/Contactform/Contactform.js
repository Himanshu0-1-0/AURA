import React from 'react'
import './Contactform.css'

export default function Contactform(){
  return (
    <div className='form-container'>
    <h1>Send a msg to us!</h1>
    <form action="">
      <input placeholder='Name' type="text" />
      <input placeholder='Email' type="Email" />
      <input placeholder='Subject' type="text" />
      <textarea name="" id="" cols="30" rows="4" placeholder='Message'></textarea>
      <button>Send Message</button>
    </form>
  </div>
  );
}

