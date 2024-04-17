'use client'
import {useState,useEffect,useRef} from "react"
import axios from 'axios';
import Card from "@/Components/ProductCard/ProductCard.js"
import "./styles.css"
export default function Page(){
    const[data,setData]= useState([]);
    const searchInputRef = useRef(null);
    async function handleSearch(){ 
        const query = searchInputRef.current.value;
        if (!query) {
        alert('Please enter a search query');
        return;
        }

        try {
            const response = await fetch(`http://localhost:5173/getData?query=${encodeURIComponent(query)}`);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            
            const products = await response.json();
            setData(products);
          } catch (error) {
            console.error('Error fetching data:', error);
            alert('An error occurred while fetching data');
        }
    }
    // useEffect(()=>{
    //     fetch('http://localhost:5173/getData')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data);
    //     })
    //     .catch(error => console.error('Error:', error));
    // },[])
    return (
        <> 
            <div className="search">
             <input type="text" ref={searchInputRef}  />
             <button onClick={handleSearch}>Search</button>
            </div>
            <div className = "body">
                {data.map(x=><Card img = {x.photo} des = {x.title} price ={x.price} rating = "5" key={x.title}/>)}
            </div>
        </>
    )
}