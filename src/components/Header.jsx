import { Link } from 'react-router-dom';

import Navigation from './Navigation.jsx';

function Header() {
    return (
        <div className="headerBackground">
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