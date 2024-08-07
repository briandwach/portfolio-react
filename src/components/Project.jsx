import Technologies from './Technologies.jsx';

function Project({ name, appUrl, githubUrl, image, alt, desc, tech }) {
    return (
        <div className='relative desktop:w-[47%] max-w-[764px] m-3'>
            <a href={appUrl} target='_blank' rel='noopener noreferrer' className='z-0'>
                <div className='group relative border-[10px] border-solid border-base-content rounded-[10px] 
                                desktop:hover:border-secondary desktop:hover:shadow-2xl'>
                    <img src={image} alt={alt} className='desktop:group-hover:opacity-25' />
                    <Technologies propStyles='hidden desktop:group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 ' desc={desc} tech={tech} />
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