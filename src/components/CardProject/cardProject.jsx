import React from 'react';
import './cardProject.scss'


function CardProject({ image, title, presentation, skill, linkSite, linkSiteName, linkGit, linkGitName }) {
    return (
        <div className="card-project">
            <div className="card-project-content">
                <h3>{title}</h3>
                <img src={image} alt="" />
                <p>{presentation}</p>
                <p>{skill}</p>
                <div className="liens">
                    <a href={linkSite}>{linkSiteName}</a>
                    <a href={linkGit}>{linkGitName}</a>
                </div>
            </div>
        </div>
    );
}

export default CardProject;