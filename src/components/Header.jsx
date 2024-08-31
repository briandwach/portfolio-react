import { Link } from 'react-router-dom';

import Navigation from './Navigation.jsx';

function Header() {
    return (
        <div className='center:w-fit center:mx-auto'>
            <div className='m-2 center:w-fit center:mx-auto'>
                <Link className='font-bold text-base-content desktop:hover:text-accent desktop:active:text-success inline-block' to='/'>
                    <h1 className='text-5xl w-fit'>Brian Wach</h1>
                    <h1 className='ml-[2px] w-fit center:mx-auto'>Full Stack Web Developer</h1>
                </Link>
            </div>
            <Navigation />
        </div>
    );
}

export default Header;