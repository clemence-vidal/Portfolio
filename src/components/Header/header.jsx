import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import "./header.scss"
import logo from "../../assets/logo-portfolio.png"
import menuIcon from "../../assets/menu-icon.svg";


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="liens">
                <Link to="home#a-propos">A propos</Link>
                <Link to="home#projets">Projets</Link>
                <Link to="home#formation">Formation</Link>
                <Link to="home#skills">Compétences</Link>
                <Link to="home#contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Header;