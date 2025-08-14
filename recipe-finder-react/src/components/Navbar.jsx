import logo from "../assets/images/logo.svg";
import hamburgerMenu from "../assets/images/icon-hamburger-menu.svg";
import { useState } from "react";
import "./Navbar.css"

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false)

    const toggleMenu = () => {
        setMenuToggle(!menuToggle);
    }

    return(
        <>
            <nav className="navbarContainer">
                <div className="navbar">
                    <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div onClick={toggleMenu} className="hamburgerMenu">
                    <img src={hamburgerMenu} alt="icon-hamburger-menu" />
                </div>
                </div>
                <div className="nav-list">
                {menuToggle && (
                <ul className="nav-list-ul">
                <li>Home</li>
                <li>About</li>
                <li>Recips</li>
                <li>
                    <button>Browse Recipes</button>
                </li>
                </ul>
            )}
            </div>
            </nav>

        </>
    )
}

export default Navbar;