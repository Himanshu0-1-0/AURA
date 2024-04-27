import React from "react";
import "./ProductCard.css"
import { useRouter } from 'next/navigation'

// import Star from "Star.png" ; 

function Card(props) {
    const title= props.des.slice(0,21)+"....";
    const router = useRouter();
    function handleClick(){
        router.push(`/products/${props.prod_id}`);
    }
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={props.img} alt="cards"/>
            </div>
            <div className="info-container">
                <div className="about">
                    <p>{title}</p>
                </div>
                <div className="rating">
                    <img src="Star.png" />
                    <p><span>{props.rating}</span></p>
                </div>
            </div>
            <button onClick={handleClick}>Click</button>
            <div className="pricing">
                <p>{props.price}</p>
            </div>
        </div>
    )

}; 

export default Card;