'use client'
import "./Cart.css"
import { useState,useEffect } from "react";
import { useCart } from '@/store/CartContext';
export default function Cart({displayRazorpay}) {
    const { cart, removeFromCart,updateCart } = useCart();
    function handleRemove(id){
        removeFromCart(id);
    }
    function handleDec(id){
        updateCart(id,'-1')
    }
    function handleInc(id){
        updateCart(id,'+1')
    }

    return (
        <div className="cart-container">
            <h1>Cart</h1>
            <div className="cart-items">
                {cart.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div className="cart-item-info">
                            <p className="cart-item-name">{item.name}</p>
                            <p>Price: {item.price}</p>
                        </div>
                        <div className="cart-item-quantity">
                            <button onClick={()=> handleDec(item.id)}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={()=> handleInc(item.id)}>+</button>
                        </div>
                        <div className="cart-item-actions">
                            <button className="cart-item-remove" onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div>
            <button onClick={displayRazorpay}>Pay Here..</button>
            </div>
        </div>
    );
}
