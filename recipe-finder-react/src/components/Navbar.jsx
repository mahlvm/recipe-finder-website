import logo from "../assets/images/logo.svg";
import hamburgerMenu from "../assets/images/icon-hamburger-menu.svg";
import { useState } from "react";
import "./Navbar.css"
import ButtonToRecipes from "./ButtonToRecipes";

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
                <li className="li">Home</li>
                <li className="li">About</li>
                <li className="li">Recips</li>
                <li className="liButton">
                    <ButtonToRecipes text="Browse recipes" className="" />
                </li>
                </ul>
            )}
            </div>
            </nav>

        </>
    )
}

export default Navbar;