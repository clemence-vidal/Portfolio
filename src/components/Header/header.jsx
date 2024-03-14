import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import "./header.scss"
import logo from "../../assets/logo-portfolio.png"


function Header() {
    const [showLinks, setShowLinks] = useState(false);

    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <div className="logo">Logo</div>
            <ul className="liens">
                <li className="liens-item">
                    <Link to="home#a-propos">A propos</Link>
                </li>
                <li className="liens-item">
                    <Link to="home#projets">Projets</Link>
                </li>
                <li className="liens-item">
                    <Link to="home#formation">Formation</Link>                    
                </li>
                <li className="liens-item">
                    <Link to="home#skills">Compétences</Link>                    
                </li>
                <li className="liens-item">
                    <Link to="home#contact">Contact</Link>                    
                </li>
            </ul>
            <button className="burger" onClick={handleShowLinks}>
                <span className="burger-bar"></span>
            </button>
        </nav>
    );
}

export default Header;