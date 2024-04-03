import React from 'react';
import "./header.scss"
import CV from "../../assets/CV_Clemence_Vidal.pdf";
import avatar from "../../assets/avatar2.png";


function Header() {
    return (
        <div className="en-tete">
            <img src={avatar} alt="avatar" />
            <h1>CLÉMENCE VIDAL</h1>
            <p>Développeuse front-end</p>
            <p className='recherche'>Recherche une alternance pour Développeur d'application JavaScript React<br/>
            Valenciennes et environs</p>
            <div className="links">
                <a href="https://github.com/clemence-vidal" target="_blank" rel="noreferrer">Github</a>
                <a href="https://www.linkedin.com/in/clémence-vidal/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href={CV} target="_blank" rel="noreferrer">CV</a>
            </div>
        </div>
    )
}

export default Header;