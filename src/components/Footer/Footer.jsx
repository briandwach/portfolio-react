import './Footer.css';

function Footer() {
    return (<div className="footerContainer">
        <a href="https://github.com/briandwach" target="_blank" rel="noopener noreferrer">
            <img className="logoFooter" src='/images/github-mark.png' alt='Github Invertocat logo' />
        </a>
        <a href="https://www.linkedin.com/in/brianwach/" target="_blank" rel="noopener noreferrer">
            <img className="logoFooter" src='/images/In-Blue-128.png' alt='LinkedIn blue In logo' />
        </a>
        <a href="https://soundcloud.com/afda-glo" target="_blank" rel="noopener noreferrer">
            <img className="logoFooter" src='/images/SoundCloudLogo.jpg' alt='LinkedIn blue In logo' />
        </a>
    </div>
    );
}

export default Footer;