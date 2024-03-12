import { useState } from 'react';
import './cardProject.scss'
import Modal from '../Modal/modal';

function CardProject({ image, text, title, presentation, skill, linkSite, linkSiteName, linkGit, linkGitName }) {
    const [showModal, setShowModal] = useState(false)

    function openModal() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    return (
        <div className="card-project">
            <button className="tooltip" onClick={openModal}>Cliquez pour en savoir plus</button>
            <img src={image} alt="" />
            <p className='card-paragraph'>{text}</p>            
            {showModal && 
                <Modal 
                    show={showModal}
                    title={title}
                    image={image}
                    presentation={presentation}
                    skill={skill}
                    linkSite={linkSite}
                    linkSiteName={linkSiteName}
                    linkGit={linkGit}
                    linkGitName={linkGitName}
                    onClose={closeModal}
                />}
        </div>
    );
}

export default CardProject;