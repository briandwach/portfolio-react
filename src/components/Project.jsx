function Project({ name, appUrl, githubUrl, image, alt }) {
    return (
        <div className="project position-relative m-3">
            <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <img className="img-fluid projectImage" src={image} alt={alt} />
            </a>
            <a className="nameAnchor" href={appUrl} target="_blank" rel="noopener noreferrer">
            <div className="projectOverlay">
                
                    <h2 className="projectName m-2">{name}</h2>
                
                <a className="logo logoAnchor" href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <img className="githubLogoProject" src='/images/github-mark.png' alt='Github Invertocat logo' />
                </a>
            </div>
            </a>
        </div> 
    );
}

export default Project;