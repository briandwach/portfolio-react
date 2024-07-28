import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const currentPage = useLocation().pathname;

    const navbarPages = [
        '',
        'Portfolio',
        'Contact',
        'Resume'
    ];

    const btnStyle = 'btn mr-1';
    const normNavStyle = 'btn-primary'
    const currentNavStyle = 'btn-success';
    
    return (
        <div className="navbar">
            {navbarPages.map((page) => (
                <Link
                    key={page}
                    to={`/${page}`}
                    className={currentPage === `/${page}`
                        ? `${btnStyle} + ' ' + ${currentNavStyle}`
                        : `${btnStyle} + ' ' + ${normNavStyle}`}
                >
                    {page === '' ? 'About' : page}
                </Link>
            ))}
        </div>
    );
}

export default Navigation;