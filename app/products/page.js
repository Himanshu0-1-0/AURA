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
                {/* <h1 className="heading"> We got you!</h1> */}
                {/* <Card img = "trial.jpg" des = "i m just girl" price ="450" rating = "5"/>
                <Card img = "trial.jpg" des = "i m just girl" price ="450" rating = "5"/>
                <Card img = "trial.jpg" des = "i m just girl" price ="450" rating = "5"/>
                <Card img = "trial.jpg" des = "i m just girl" price ="450" rating = "5"/>
                <Card img = "trial.jpg" des = "i m just girl" price ="450" rating = "5"/>
                <Card img = "trial.jpg" des = "i m just girl" price ="450" rating = "5"/>
                <Card img = "trial.jpg" des = "i m just girl" price ="450" rating = "5"/>
                <Card img = "trial.jpg" des = "i m just girl" price ="450" rating = "5"/>
                <Card img = "trial.jpg" des = "i m just girl" price ="450" rating = "5"/>
                <Card img = "trial.jpg" des = "i m just girl" price ="450" rating = "5"/>
                <Card img = "trial.jpg" des = "i m just girl" price ="450" rating = "5"/>
                <Card img = "trial.jpg" des = "i m just girl" price ="450" rating = "5"/> */}

                {data.map(x=><Card img = {x.photo} des = {x.title} price ={x.price} rating = "5"/>)}
            </div>
        </>
    )
}