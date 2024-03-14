import { useState } from 'react';
import './cardProject.scss'
import Modal from '../Modal/modal';

function CardProject({ image, title, presentation, skill, linkSite, linkSiteName, linkGit, linkGitName }) {
    // const [showModal, setShowModal] = useState(false)

    // function openModal() {
    //     setShowModal(true);
    // }

    // function closeModal() {
    //     setShowModal(false);
    // }

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