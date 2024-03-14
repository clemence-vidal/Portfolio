import React from "react";
import "./skills.scss"

function Skills({ logo, alt, p }) {
    return (
        <div>
            <img src={logo} alt={alt} />
            <p>{p}</p>
        </div>
    )
}

export default Skills;