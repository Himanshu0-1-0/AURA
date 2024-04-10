import React from 'react'
import "./Card.css"
export default function Card({imageid}) {
  return (
    <>
    <div className="card">
      <img src={imageid} alt='image ni milri'></img>
    </div>
    </>
  )
}
