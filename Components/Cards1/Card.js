import React from 'react'
import "./Card.css"
export default function Card({imageid,btncontent}) {
  return (
    <>
    <div className="cont">
    <div className="card">
      <img src={imageid} alt='image ni milri'></img>
    </div>
    <button className='butn'>{btncontent}</button>
    </div>
    </>
  )
}
