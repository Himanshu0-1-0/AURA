import "./NavbarElement.css"
export default function NavbarElement() {
  return (
         <nav className="navbar navbar-expand-lg  fixed-top" id="nav">
        <div className="container-fluid">
        <a className="nav-link text-nav" href="#" id="home">Home</a>
        <a className="navbar-brand " id="logo" href="#">Aura</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
                <a className="nav-link  text-nav" aria-current="page" href="#">Fashion</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-nav" href="#">Accessories</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-nav" href="#">Footwear</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}
