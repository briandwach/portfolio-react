function Project({ name, appUrl, githubUrl, image, alt }) {
    return (
        <div className='relative desktop:w-[47%] m-3'>
            <a href={appUrl} target='_blank' rel='noopener noreferrer' className='z-0'>
                <div className='relative border-[10px] border-solid border-base-content rounded-[10px] 
                                desktop:hover:border-success desktop:hover:shadow-2xl'>
                    <img src={image} alt={alt} />
                    <div className='flex justify-end bg-base-100 absolute bottom-0 w-full'>
                        <h2 className='text-2xl text-nowrap text-accent m-2 mr-[50px]'>{name}</h2>
                    </div>
                </div>
            </a>
            <div className='absolute bottom-4 right-4 z-10'>
                <a className='flex items-center w-fit desktop:hover:opacity-50' href={githubUrl} target='_blank' rel='noopener noreferrer'>
                    <img className="w-[35px] h-[35px]" src='/images/github-mark.png' alt='Github Invertocat logo' />
                </a>
            </div>
        </div>
    );
}
export default Project;