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
                <Link className="nav-link text-nav " aria-current="page" href="/Cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                </Link>
            </li>
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