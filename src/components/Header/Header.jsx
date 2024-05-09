import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation.jsx';
import './Header.css';

function Header() {
    return (
        <div>
            <Link to="/">
            Brian Wach
             </Link>
            <Navigation />
        </div>
    );
}

export default Header;