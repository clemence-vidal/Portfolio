import "./modal.scss";

function Modal({ title, image, presentation, skill, link, onClose, show }) {
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
                <a href={link}>{link}</a>
            </div>
            <button type="button" onClick={onClose}>Fermer</button>
        </div>
    )
};

export default Modal;