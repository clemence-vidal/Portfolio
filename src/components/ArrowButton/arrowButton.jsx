import React from "react";
import "./arrowButton.scss"

function ArrowButton() {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="scroll-top-button">
            <button className="scroll-top-button" onClick={scrollTop} title="retour en haut de la page">^</button>
        </div>
    )
}

export default ArrowButton;