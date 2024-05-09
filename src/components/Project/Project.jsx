import './Project.css';

function Project({ name, appUrl, githubUrl, image, alt }) {
    return (
        <div className="project position-relative">
            <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <img className="img-fluid" src={image} alt={alt} />
            </a>
            <div className="projectOverlay">
                <a href={appUrl} target="_blank" rel="noopener noreferrer">
                    <h2 className="projectName">{name}</h2>
                </a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <img className="githubLogoProject align-bottom" src='/images/github-mark.png' alt='Github Invertocat logo' />
                </a>
            </div>
        </div>
    );
}

export default Project;