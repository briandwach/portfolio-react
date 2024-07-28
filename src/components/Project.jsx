function Project({ name, appUrl, githubUrl, image, alt }) {
    return (
        <div className="relative m-3 border-[10px] border-solid border-base-content rounded-[10px] 
        desktop:hover:border-success desktop:hover:shadow-2xl desktop:w-[47%]">
            <a href={appUrl} target="_blank" rel="noopener noreferrer">
                <img className="" src={image} alt={alt} />
            </a>
            <a className="" href={appUrl} target="_blank" rel="noopener noreferrer">
            <div className="flex justify-end bg-base-100 p-[3px] absolute bottom-0 w-full">
                
                    <h2 className="text-2xl text-nowrap text-accent m-2">{name}</h2>
                
                <a className="flex items-center w-fit desktop:hover:opacity-50" href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <img className="w-[35px] h-[35px]" src='/images/github-mark.png' alt='Github Invertocat logo' />
                </a>
            </div>
            </a>
        </div> 
    );
}

export default Project;