import React from "react";
import "./formation.scss";


function Formation({ titre, où, quand }) {
    return (
        <div className="formation-content">
            <h3>{titre}</h3>
            <h4>{où}</h4>
            <h5>{quand}</h5>
        </div>
    )
}

export default Formation;