import CardProject from "../../components/CardProject/cardProject";
import "./home.scss";
import booki from "../../assets/booki.png";
import ohmyfood from "../../assets/ohmyfood.png";
import sophiebluel from "../../assets/sophiebluel.png";
import kasa from "../../assets/kasa.png";
import argentbank from "../../assets/argentbank.png";
import CV from "../../assets/CV_Clemence_Vidal.pdf";
// import Modal from "../../components/Modal/modal";
// import { useState } from "react";


function Home() {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [selectedProject, setSelectedProject] = useState(null);

    // function openModal(project) {
    //     console.log("clic");
    //     setIsModalOpen(true);
    //     setSelectedProject(project);
    // }

    // function closeModal() {
    //     setIsModalOpen(false);
    //     setSelectedProject(null);

    // }
    

    return (
        <main>
            <section className="a-propos" id="a-propos">
                <div className="texte-presentation">
                    <h2>A propos de moi</h2>
                    <p>Je m'appelle Clémence Vidal, j'ai 27 ans, et je suis passionnée par ce qui touche principalement au web design. J'aime créer des sites web esthétiques et fonctionnels, offrant une expérience de navigation agréable. Ce portfolio représente l'aboutissement de ma formation Intégrateur web chez Openclassrooms. Vous trouverez également plus bas les projets notables réalisés durant cette formation. <br/>
                    En dehors du développement web, je m'épanouis dans divers activités : j'aime jouer à des jeux vidéo, regarder des animés, lire des mangas ou encore me plonger des romans.
                    </p>    
                </div>            
            </section>
            <section className="projets" id="projets">
                <h2>Mes projets</h2>
                <CardProject 
                image={booki}
                text="Booki"
                title="Projet 3 - Booki"
                presentation="Ce projet avait pour but de me faire travailler les HTML et CSS."
                skill="Compétences : HTML & CSS"
                linkSite="https://booki-projet3-cv.netlify.app"
                linkSiteName="Lien vers mon site Booki"
                linkGit="https://github.com/clemence-vidal/OCProjet3"
                linkGitName="Lien vers mon code"
                />
                <CardProject 
                image={ohmyfood}
                text="ohmyfood"
                title="Projet 4 - ohmyfood"
                presentation="Ce projet avait pour but de me faire développer un site en mobile first, c'est-à-dire que j'ai dû faire la version mobile de l'application avant la version desktop, tout en ajoutant des animations CSS."
                skill="Compétences : mobile first, SASS, animations CSS, Git & Github "
                linkSite="https://ohmyfood-projet4-cv.netlify.app"
                linkSiteName="Lien vers mon site ohmyfood"
                linkGit="https://github.com/clemence-vidal/OpenclassroomsProject4"
                linkGitName="Lien vers mon code"
                />
                <CardProject 
                image={sophiebluel}
                text="Sophie Bluel - Architecte d'intérieur"
                title="Projet 6 - Sophie Bluel - Architecte d'intérieur"
                presentation="Ce projet avait pour but de m'entraîner à créer une page web dynamique à l'aide de Javascript, cela en communiquant avec une API."
                skill="Compétences : Javascript, utilisation d'API"
                linkGit="https://github.com/clemence-vidal/OCProjet6"
                linkGitName="Lien vers mon code"
                />
                <CardProject 
                image={kasa}
                // text="Kasa"  
                title="Projet 8 - Kasa"
                presentation="Ce projet avait pour but de m'apprendre à implémenter le front-end d'une application à l'aide de React et React Router."
                skill="Compétences : React & React Router"
                linkGit="https://github.com/clemence-vidal/OCProjet8"
                linkGitName="Lien vers mon code"
                />
                <CardProject 
                image={argentbank}
                // text="Argent Bank"
                title="Projet 11 - Argent Bank"
                presentation="Ce projet avait pour but de m'apprendre à développer un site internet en utilisant React et Redux. Il fallait également intégrer le front-end avec le back-end à l'aide d'appels API. Enfin, je devais créer un Swagger pour décrire différentes routes et actions nécessaire pour l'API."
                skill="Compétences : React & Redux, utilisation d'API, Swagger"
                linkSite="https://argentbank-projet11-cv.netlify.app"
                linkSiteName="Lien vers mon site Argent Bank"
                linkGit="https://github.com/clemence-vidal/OCProjet11_front"
                linkGitName="Lien vers mon code"
                />
                {/* <Modal project={selectedProject} onClose={closeModal} isModalOpen={isModalOpen}  /> */}
                
            </section>
            <section className="contact" id="contact">
                <div className="form">
                    <h2>Me contacter</h2>
                    <form action="" method="post" netlify={"true"}>
                        <div>
                            {/* <label htmlFor="name">Nom : </label> */}
                            <input type="text" name="name" id="name" placeholder="Nom" required />
                        </div>
                        <div>
                            {/* <label htmlFor="email">Mail : </label> */}
                            <input type="email" name="email" id="email" placeholder="Email" required />
                        </div>
                        <div>
                            {/* <label htmlFor="">Message : </label> */}
                            <textarea id="message" name="message" placeholder="Message" rows={9} required ></textarea>
                        </div>
                        <div>
                            <button type="submit">Envoyer</button>
                        </div>
                    </form>
                </div>
                <div className="links">
                    <a href="https://github.com/clemence-vidal" target="_blank" rel="noreferrer">Github</a>
                    <a href="https://www.linkedin.com/in/clémence-vidal/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href={CV} target="_blank" rel="noreferrer">CV</a>
                </div>
            </section>
        </main>
    );
}

export default Home;