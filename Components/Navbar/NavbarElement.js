import "./NavbarElement.css"
import Link from "next/link"
import { useAuth } from "@/store/AuthContext"
import { useRouter } from "next/navigation";
export default function NavbarElement({Show}) {
    const router = useRouter();
    const {isLoggedIn,login,logout} =useAuth();
    function handleLogout(){
        logout();
    }
    function profileClick(){
        router.push("/profile")
    }
  return (
         <nav className={(Show)? " navbar navbar-expand-lg  fixed-top showNav":"navbar navbar-expand-lg  fixed-top" }  id="nav">
        <div className="container-fluid">
        <a className={Show ?"nav-link text-nav " :"nav-link text-nav MakeBlue Hide" } href="#" id="home">Home</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item space">
                {isLoggedIn?
                // <button className={Show ?"nav-link text-nav " :"nav-link text-nav MakeBlue" } onClick={handleLogout}>Logout</button>
                    <div class="dropdown">
                        <button className="btn btn-secondary dropdown-toggle prof" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                            </svg>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button className="dropdown-item" onClick={profileClick}>Profile</button>
                            <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                            <Link className="dropdown-item" href="/Cart">Cart</Link>
                        </div>
                    </div>
                :<Link className={Show ?"nav-link text-nav " :"nav-link text-nav MakeBlue" } aria-current="page" href="/login?state=login">Login</Link>}
            </li>
            <li className="nav-item">
                <Link className={Show ?"nav-link text-nav " :"nav-link text-nav MakeBlue" } href="/aboutus">About Us</Link>
            </li>
           
            </ul>
        </div>
        </div>
    </nav>
  )
}
