import { Link } from 'react-router-dom';

import Navigation from './Navigation.jsx';

function Header() {
    return (
        <div className="bg-">
            <div className='m-2'>
            <Link className='font-bold text-base-content desktop:hover:text-accent desktop:active:text-success' to='/'>
            <h1 className='text-5xl'>Brian Wach</h1>
            <h1 className='ml-[2px]'>Full Stack Web Developer</h1>
             </Link>
             </div>
            <Navigation />
        </div>
    );
}

export default Header;