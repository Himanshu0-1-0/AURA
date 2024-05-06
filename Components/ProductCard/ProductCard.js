import React from "react";
import "./ProductCard.css"
import { useRouter } from 'next/navigation'
import { useCart } from '@/store/CartContext';
// import Star from "Star.png" ; 

function Card(props) {
    const title= props.des.slice(0,21)+"....";
    const {addToCart} = useCart();
    const router = useRouter();
    function handleClick(){
        router.push(`/products/${props.prod_id}`);
    }
    function handleAdd(){
        const item ={
            id: props.prod_id,
            name: props.des,
            price: props.price,
            quantity: 1,
            image: props.img
        }
        addToCart(item);
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
            <button onClick={handleAdd}>Add To Cart</button>
            <div className="pricing">
                <p>{props.price}</p>
            </div>
        </div>
    )

}; 

export default Card;