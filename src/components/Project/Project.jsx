import './Project.css';

function Project({ name, appUrl, githubUrl, image, alt }) {
    return (
        <div className="project position-relative m-3">
            <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <img className="img-fluid" src={image} alt={alt} />
            </a>
            <div className="projectOverlay">
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                    <h2 className="projectName m-2">{name}</h2>
                </a>
                <a className="logoAnchor" href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <img className="githubLogoProject align-bottom" src='/images/github-mark.png' alt='Github Invertocat logo' />
                </a>
            </div>
        </div> 
    );
}

export default Project;