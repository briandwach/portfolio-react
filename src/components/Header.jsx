import { Link } from 'react-router-dom';

import Navigation from './Navigation.jsx';

function Header() {
    return (
        <div className="headerBackground">
            <div className='m-2'>
            <Link className='text-5xl text-secondary' to='/'>
            Brian Wach
             </Link>
             </div>
            <Navigation />
        </div>
    );
}

export default Header;