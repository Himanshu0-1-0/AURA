'use client'
import NavbarElement from "./NavbarElement" 
import "./Navbar.css"
import { useState,useEffect } from "react"
export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {      
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    }

    function handleScroll2 () {
      const btn = document.getElementById('btn1');
      const btnRect = btn.getBoundingClientRect();
      const parentRect = btn.parentElement.getBoundingClientRect();
      
      // Calculate how much the parent div is scrolled
      const scrollYRelativeToParent = window.scrollY + btnRect.height - parentRect.top;

      // Calculate the threshold for changing the position (e.g., 50% from the bottom)
      const threshold = parentRect.height * 0.49;

      // Determine if the button should switch from fixed to absolute
      if (scrollYRelativeToParent >= threshold) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll2);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScroll2);
    };
  }, []);

  function pooja(){
    window.scrollTo(0,1065);
  }
  
  return (
    <>
    <div className="background">
      

      {(showNavbar===false)?<>
        <NavbarElement Show={false}/>
        <div className="text showText" id="text">Aura</div>
      </>: <>
        <NavbarElement Show={true} />
        <div className="text hideText" id="text">Aura</div>
      </>}
      {/* <Btn /> */}
      <button className={isFixed?"btn1":"btn2"} id="btn1" onClick={pooja}>Explore Our Collection</button>
    </div>
    </>
  )
}
