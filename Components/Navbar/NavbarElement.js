import "./NavbarElement.css"
import Link from "next/link"
import { useAuth } from "@/store/AuthContext"
export default function NavbarElement({Show}) {
    const {isLoggedIn,login,logout} =useAuth();
    function handleLogout(){
        logout();
    }
  return (
         <nav className={(Show)? " navbar navbar-expand-lg  fixed-top showNav":"navbar navbar-expand-lg  fixed-top" }  id="nav">
        <div className="container-fluid">
        <a className={Show ?"nav-link text-nav " :"nav-link text-nav MakeBlue Hide" } href="#" id="home">Home</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
                {isLoggedIn?
                <button className={Show ?"nav-link text-nav " :"nav-link text-nav MakeBlue" } onClick={handleLogout}>Logout</button>
                :<Link className={Show ?"nav-link text-nav " :"nav-link text-nav MakeBlue" } aria-current="page" href="/login">Login</Link>}
            </li>
            <li className="nav-item">
                <a className={Show ?"nav-link text-nav " :"nav-link text-nav MakeBlue" } href="#">About Us</a>
            </li>
            <li className="nav-item">
                <a className={Show ?"nav-link text-nav " :"nav-link text-nav MakeBlue" } href="#">Support</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}
