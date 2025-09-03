import logo from "../assets/images/logo.svg";
import hamburgerMenu from "../assets/images/icon-hamburger-menu.svg";
import { useState } from "react";
import "./Navbar.css"
import ButtonToRecipes from "./ButtonToRecipes";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    const navigate = useNavigate();

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
                    <div className={`nav-list ${menuToggle ? "active" : ""}`}>
                           <ul className="nav-list-ul">
                                <li className="li">
                                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="li">
                                    <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                        About
                                    </NavLink>
                                </li>
                                <li className="li">
                                    <NavLink to="/recipes" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                        Recipes
                                    </NavLink>
                                </li>
                            </ul>
                        <div className="liButton">
                                <ButtonToRecipes text="Browse recipes" className="" />
                        </div>
                    </div>
                </div>
                
            </nav>

        </>
    )
}

export default Navbar;