import React, { useState } from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import "./header.scss"
// import logo from "../../assets/logo.png"
import CV from "../../assets/CV_Clemence_Vidal.pdf";
import avatar from "../../assets/avatar2.png";


function Header() {
    return (
        <div className="en-tete">
            <img src={avatar} alt="avatar" />
            <h1>CLÉMENCE VIDAL</h1>
            <p>Développeuse front-end</p>
            <div className="links">
                <a href="https://github.com/clemence-vidal" target="_blank" rel="noreferrer">Github</a>
                <a href="https://www.linkedin.com/in/clémence-vidal/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href={CV} target="_blank" rel="noreferrer">CV</a>
            </div>
        </div>
    )





//     const [showLinks, setShowLinks] = useState(false);

//     const handleShowLinks = () => {
//         setShowLinks(!showLinks);
//     };

//     return (
//         <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
//             <img src={logo} alt="logo" />
//             <ul className="liens">
//                 <li className="liens-item">
//                     <Link to="home#a-propos">A propos</Link>
//                 </li>
//                 <li className="liens-item">
//                     <Link to="home#projets">Projets</Link>
//                 </li>
//                 <li className="liens-item">
//                     <Link to="home#formation">Formation</Link>                    
//                 </li>
//                 <li className="liens-item">
//                     <Link to="home#skills">Compétences</Link>                    
//                 </li>
//                 <li className="liens-item">
//                     <Link to="home#contact">Contact</Link>                    
//                 </li>
//             </ul>
//             <button className="burger" onClick={handleShowLinks}>
//                 <span className="burger-bar"></span>
//             </button>
//         </nav>
//     );
}

export default Header;