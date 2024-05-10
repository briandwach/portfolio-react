import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation.jsx';
import './Header.css';

function Header() {
    return (
        <div>
            <div className="m-3">
            <Link className="h1 headerName" to="/">
            Brian Wach
             </Link>
             </div>
            <Navigation />
        </div>
    );
}

export default Header;