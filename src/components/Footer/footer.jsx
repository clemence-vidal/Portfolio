import "./footer.scss"

function Footer() {
    return (
        <footer>
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
            <div className="footer">
                <p>Tous droits réservés © Clémence Vidal 2024</p>
                <p className="secret">v1.2</p>
            </div>
        </footer>
    );
}

export default Footer;