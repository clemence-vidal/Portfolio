import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Header from "../../components/Header/header";
import CardProject from "../../components/CardProject/cardProject";
import Formation from "../../components/Formation/formation";
import Skills from "../../components/Skills/skills";
import "./home.scss";
import cardData from "../../data/cards.json"
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
            <Navbar />         
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
                {cardData.map((card, index) => (
                    <CardProject
                    key={index}
                    image={card.image}
                    title={card.title}
                    presentation={card.presentation}
                    skill={card.skill}
                    linkSite={card.linkSite}
                    linkSiteName={card.linkSiteName}
                    linkGit={card.linkGit}
                    linkGitName={card.linkGitName}
                    />
                ))}
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
                    <form name="contact" method="post" action="/pages/Sent/sent.jsx" netlify={"true"}>
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