'use client'
import {useState,useEffect} from "react"
import Card from "@/Components/ProductCard/ProductCard.js"
import "./styles.css"
export default function Page(){
    const[data,setData]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5173/getData')
        .then(response => response.json())
        .then(data => {
            setData(data);
        })
        .catch(error => console.error('Error:', error));
    },[])
    return (
        <>
            <div className = "body">
                {data.map(x=><Card img = {x.photo} des = {x.title} price ={x.price} rating = "5" key={x.title}/>)}
            </div>
        </>
    )
}