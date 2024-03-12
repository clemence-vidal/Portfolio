import "./modal.scss";

function Modal({ title, image, presentation, skill, linkSite, linkSiteName, linkGit, linkGitName, onClose, show }) {
    // const { title, presentation, link } = project;
    // console.log(project);
    const modalClass = show ? "modal active" : "modal";

    // if (!project) {
    //     return null;
    // }

    return (
        <div className={modalClass}>
            <h3>{title}</h3>
            <div className="modal-div">
                <img src={image} alt="" />
                <p>{presentation}</p>
                <p>{skill}</p>
                <div className="liens">
                    <a href={linkSite}>{linkSiteName}</a>
                    <a href={linkGit}>{linkGitName}</a>
                </div>
            </div>
            <button type="button" onClick={onClose}>Fermer</button>
        </div>
    )
};

export default Modal;