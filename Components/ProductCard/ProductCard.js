import React from "react";
import "./ProductCard.css"
// import Star from "Star.png" ; 

function Card(props) {
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={props.img} alt="cards" />
            </div>
            <div className="info-container">
                <div className="about">
                    <p>{props.des}</p>
                </div>
                <div className="rating">
                    <img src="Star.png" />
                    <p><span>{props.rating}</span></p>
                </div>
            </div>
            <div className="pricing">
                <p>${props.price}</p>
            </div>
        </div>
    )

};

export default Card;