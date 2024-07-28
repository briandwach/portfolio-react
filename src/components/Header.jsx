import { Link } from 'react-router-dom';

import Navigation from './Navigation.jsx';

function Header() {
    return (
        <div className="bg-">
            <div className='m-2'>
            <Link className='text-5xl text-base-content hover:text-accent active:text-success' to='/'>
            Brian Wach
             </Link>
             </div>
            <Navigation />
        </div>
    );
}

export default Header;