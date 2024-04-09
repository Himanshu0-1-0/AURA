'use client'
import NavbarElement from "./NavbarElement" 
import "./Navbar.css"
import { useState,useEffect } from "react"
export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {      
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
    <div className="background">
      

      {(showNavbar===false)?<>
        <NavbarElement Show={false}/>
        <div className="text" id="text">Aura</div>
      </>: <>
        <NavbarElement Show={true} />
        <div className="text hideText" id="text">Aura</div>
      </>}
    </div>
    </>
  )
}
