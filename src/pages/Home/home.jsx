import React from "react";
import Header from "../../components/Header/header";
import CardProject from "../../components/CardProject/cardProject";
import Formation from "../../components/Formation/formation";
import Skills from "../../components/Skills/skills";
import "./home.scss";
import booki from "../../assets/booki.png";
import ohmyfood from "../../assets/ohmyfood.png";
import sophiebluel from "../../assets/sophiebluel.png";
import kasa from "../../assets/kasa.png";
import argentbank from "../../assets/argentbank.png";
import ninacarducci from "../../assets/ninacarducci.webp";
import path from "../../assets/path.png";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import sass from "../../assets/skills/sass.png";
import react from "../../assets/skills/react.png";
import reduxtoolkit from "../../assets/skills/reduxtoolkit.png";
import javascript from "../../assets/skills/javascript.png";
import git from "../../assets/skills/git.png";
import github from "../../assets/skills/github.png";
import swagger from "../../assets/skills/swagger.png";
import apirest from "../../assets/skills/apirest.png";
import seo from "../../assets/skills/seo.png";


function Home() {
    return (
        <main>         
            <Header />
            <section className="a-propos" id="a-propos">
                <div className="texte-presentation">
                    <h2>A propos de moi</h2>
                    <p>Je m'appelle Clémence Vidal, j'ai 27 ans, et je suis passionnée par ce qui touche principalement au web design. J'aime créer des sites web esthétiques et fonctionnels, offrant une expérience de navigation agréable. Ce portfolio représente l'aboutissement de ma formation Intégrateur web chez Openclassrooms. Vous trouverez également plus bas les projets notables réalisés durant cette formation. <br/>
                    Depuis que j'ai découvert <span>React</span>, j'ai été captivée par cette technologie et j'ai développé une passion profonde pour son potentiel créatif et ses possibilités infinies. Cela a transformé ma façon de voir le développement web. <br/>
                    En dehors du développement web, je m'épanouis dans divers activités : j'aime jouer à des jeux vidéo, regarder des animés, lire des mangas ou encore me plonger dans des romans.
                    </p>
                </div>            
            </section>
            
            <section className="projets" id="projets">
                <h2>Mes projets</h2>
                <CardProject 
                image={booki}
                title="Booki"
                presentation="Ce troisième projet était le tout premier qui était vraiment concret. Il avait pour but de me faire travailler les HTML et CSS."
                skill="Compétences : HTML & CSS"
                linkSite="https://booki-projet3-cv.netlify.app"
                linkSiteName="Lien vers mon site Booki"
                linkGit="https://github.com/clemence-vidal/OCProjet3"
                linkGitName="Lien vers mon code"
                />
                <CardProject 
                image={ohmyfood}
                title="ohmyfood"
                presentation="Ce quatrième projet avait pour but de me faire développer un site en mobile first, c'est-à-dire que j'ai dû faire la version mobile de l'application avant la version desktop, tout en ajoutant des animations CSS."
                skill="Compétences : mobile first, SASS, animations CSS, Git & Github "
                linkSite="https://ohmyfood-projet4-cv.netlify.app"
                linkSiteName="Lien vers mon site ohmyfood"
                linkGit="https://github.com/clemence-vidal/OpenclassroomsProject4"
                linkGitName="Lien vers mon code"
                />
                <CardProject 
                image={sophiebluel}
                title="Sophie Bluel - Architecte d'intérieur"
                presentation="Ce sixième projet avait pour but de m'entraîner à créer une page web dynamique à l'aide de Javascript, cela en communiquant avec une API."
                skill="Compétences : Javascript, utilisation d'API"
                linkGit="https://github.com/clemence-vidal/OCProjet6"
                linkGitName="Lien vers mon code"
                />
                <CardProject 
                image={kasa}
                title="Kasa"
                presentation="Ce huitième projet avait pour but de m'apprendre à implémenter le front-end d'une application à l'aide de React et React Router."
                skill="Compétences : React & React Router"
                linkSite="https://kasa-projet8-cv.netlify.app"
                linkSiteName="Lien vers mon site Kasa"
                linkGit="https://github.com/clemence-vidal/OCProjet8"
                linkGitName="Lien vers mon code"
                />    
                <CardProject 
                image={ninacarducci}
                title="Nina Carducci"
                presentation="Ce neuvième projet avait pour but de m'apprendre à optimiser le référencement (SEO) d'un site internet à l'aide de différents outils, notamment Lighthouse, Rich snippet, Wave également. J'ai également compris l'importance de bien nommer ses balises, d'en ajouter des meta, ainsi que l'avantage de minifier ses fichiers HTML, CSS et Javascript."
                skill="Compétences : Optimisation du référencement (SEO) d'un site"
                linkSite="https://ninacarducci-projet9-cv.netlify.app"
                linkSiteName="Lien vers mon optimisation du site de Nina Carducci"
                linkGit="https://github.com/clemence-vidal/OCProjet9"
                linkGitName="Lien vers mon code"
                />     
                <CardProject 
                image={argentbank}
                title="Argent Bank"
                presentation="Ce onzième projet avait pour but de m'apprendre à développer un site internet en utilisant React et Redux. Il fallait également intégrer le front-end avec le back-end à l'aide d'appels API. Enfin, je devais créer un Swagger pour décrire différentes routes et actions nécessaires pour l'API."
                skill="Compétences : React & Redux, utilisation d'API, Swagger"
                linkSite="https://argentbank-projet11-cv.netlify.app"
                linkSiteName="Lien vers mon site Argent Bank"
                linkGit="https://github.com/clemence-vidal/OCProjet11_front"
                linkGitName="Lien vers mon code"
                />     
            </section>

            <section className="formation" id="formation">
                <h2>Mes formations</h2>
                <div>
                    <Formation 
                    titre="Intégrateur web"
                    où="Openclassrooms - Distance"
                    quand="2023-2024"
                    />
                    <Formation 
                    titre="Licence Administration Publique"
                    où="Université des Tertiales - Valenciennes"
                    quand="2021-2022"
                    />
                    <Formation 
                    titre="Licence spécialisation Concours, Langues et Métiers de la Culture en Anglais"
                    où="Université du Mont-Houy - Valenciennes"
                    quand="2017-2021"
                    />
                    <Formation 
                    titre="Bac +3 en Informatique"
                    où="SUPINFO, Ecole Supérieure d'Informatique - Valenciennes"
                    quand="2014-2017"
                    />
                </div>
                <div>
                    <img src={path} alt="" />   
                </div>
            </section>

            <section className="skills" id="skills">
                <h2>Mes compétences</h2>
                <div className="liste-skills">
                    <Skills
                    logo={html}
                    alt="logo html"
                    p="HTML"                    
                    />
                    <Skills
                    logo={css}
                    alt="logo css"
                    p="CSS"                    
                    />
                    <Skills
                    logo={sass}
                    alt="logo sass"
                    p="SASS"                    
                    />
                    <Skills
                    logo={react}
                    alt="logo react"
                    p="React"                    
                    />
                    <Skills
                    logo={reduxtoolkit}
                    alt="logo reduxtoolkit"
                    p="Redux Toolkit"                    
                    />
                    <Skills
                    logo={javascript}
                    alt="logo javascript"
                    p="Javascript"                    
                    />
                    <Skills
                    logo={git}
                    alt="logo git"
                    p="Git"                    
                    />
                    <Skills
                    logo={github}
                    alt="logo github"
                    p="Github"                    
                    />
                    <Skills
                    logo={apirest}
                    alt="logo apirest"
                    p="API Rest"                    
                    />
                    <Skills
                    logo={swagger}
                    alt="logo swagger"
                    p="Swagger"                    
                    />
                    <Skills
                    logo={seo}
                    alt="logo seo"
                    p="SEO"                    
                    />
                </div>
            </section>

            <section className="contact" id="contact">
                <div className="form">
                    <h2>Me contacter</h2>
                    <form name="contact" method="post" netlify={"true"}>
                        <input type="hidden" name="form-name" value="contact" />
                        <div>
                            <input type="text" name="name" id="name" placeholder="Nom" autoComplete="off" required />
                        </div>
                        <div>
                            <input type="email" name="email" id="email" placeholder="Email" autoComplete="off" required />
                        </div>
                        <div>
                            <textarea id="message" name="message" placeholder="Message" rows={9} required ></textarea>
                        </div>
                        <div>
                            <button type="submit">Envoyer</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Home;