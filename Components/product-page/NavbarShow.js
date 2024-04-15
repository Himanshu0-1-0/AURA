import React from 'react'
import "./NavbarShow.css"
import Link from 'next/link'
export default function NavbarShow() {
    return (
      <>
       <nav className= " navbar navbar-expand-lg  fixed-top showNav" id="nav">
        <div className="container-fluid">
        <Link className="nav-link text-nav " href="/" id="home">Home</Link>
        <div className='logo-aura'>
                AURA
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
                <a className="nav-link text-nav " aria-current="page" href="#">Profile</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-nav " href="#">About Us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-nav " href="#">Support</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
      </>
    )
}