import { HashLink as Link } from 'react-router-hash-link';
import "./header.scss"

function Header() {
    return (
        <nav className="navbar">
            <div>
                <Link to="../../pages/Home/home.jsx#a-propos">A propos</Link>
                <Link to="../../pages/Home/home.jsx#projets">Projets</Link>
                <Link to="../../pages/Home/home.jsx#contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Header;