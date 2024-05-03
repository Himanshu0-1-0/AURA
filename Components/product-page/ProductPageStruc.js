'use client'
import React from 'react'
import "./ProductPage.css"
import { useState } from 'react';
import { useCart } from '@/store/CartContext';
export default function ProductPageSt({productData}) {

    const {  addToCart } = useCart();

    const [itemCounter,setItemCounter]= useState(1);
    function increaseCounter(){
      const prev = itemCounter;
      setItemCounter(prev+1);
    }
    function decreaseCounter(){
      const prev=itemCounter;
      if(prev>1){
        setItemCounter(prev-1);
      }
    }
    function cartHandle(){
      const item = {
        id: productData.asin,
        name: productData.product_title,
        price: productData.product_price,
        image: productData.product_photo,
        quantity: itemCounter,
      }
      addToCart(item);
    }
    return (
      <>
      <div id="products">
      <div className="container">
        <div className="producat_wrapper">
          <div className="producat_image">
            <div className="img_thumbnail">
              <img src={productData.product_photo} width="300px" height="550px" alt="i am img" />
              <div className="img_small">
                <img
                  src={productData.product_photos[0]}
                  alt=""
                  className="active"
                />
                <img src={productData.product_photos[1]} alt="" />
                <img src={productData.product_photos[2]} alt="" />
                <img src={productData.product_photos[3]} alt="" />
              </div>
            </div>
          </div>
          <div className="product-content">
            <p className="company_txt">{productData.asin}</p>
            <h2>{productData.product_title}</h2>
            <p className="producat_des">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="price">
              <div className="dicscount_price">
                <p className="normal_price">{productData.product_price}</p>
                <p><span className="discount">50%</span></p>
              </div>
              <p className="total_price">$250.00</p>
            </div>
            <div className="qty">
              <div className="btns">
                <button type="button" className="decreament" onClick={decreaseCounter}>-</button>
                <button type="input" className="qty_numbers">{itemCounter}</button>
                <button type="button" className="increament" onClick={increaseCounter}>+</button>
              </div>
              <button className="add_cart" type="button" onClick={cartHandle}>
                <span
                  ><svg
                    width="22"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                      fill="#ffffff"
                      fillRule="nonzero"
                    /></svg
                ></span>
                <p>Add to Cart</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    );
}