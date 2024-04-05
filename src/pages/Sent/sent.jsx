import React from "react";
import "./sent.scss";

function Sent() {
    return (
        <div className="sent-message">
            <div>
                <h3>Merci pour votre message. <br/>
                Je tâcherai d'y répondre dans les plus brefs délais.</h3>
                <a href="/home">Retourner vers le site</a>
            </div>
        </div>
    )
}

export default Sent;