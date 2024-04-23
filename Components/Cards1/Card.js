import React from 'react'
import { useRouter } from 'next/navigation'
import "./Card.css"
export default function Card({imageid,btncontent}) {
  
  const router = useRouter();
  function handleClick(){
    router.push(`/products?path=${btncontent}`)
  }
  return (
    <>
    <div className="card">

      <img src={imageid} alt='image ni milri'></img>
      <button className='butn' onClick={handleClick}>{btncontent}</button>
    </div>
    </>
  ) 
}
