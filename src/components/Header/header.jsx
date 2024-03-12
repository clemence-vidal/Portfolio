import { HashLink as Link } from 'react-router-hash-link';
import "./header.scss"

function Header() {
    return (
        <nav className="navbar">
            <div>
                <Link to="home#a-propos">A propos</Link>
                <Link to="home#projets">Projets</Link>
                <Link to="home#contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Header;