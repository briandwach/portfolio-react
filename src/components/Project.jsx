import Technologies from './Technologies.jsx';
import TechMobile from './TechMobile.jsx';

import { useState, useEffect } from 'react';

function Project({ name, appUrl, githubUrl, image, alt, desc, tech }) {

    const [imgLoad, setImgLoad] = useState(true);
    const [isDesktop, setIsDesktop] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = image;
        img.onload = () => {
            setImgLoad(false);
        };
    }, [image]);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1067);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        if (isDesktop) {
            setShowInfo(false);
        }
    }, [isDesktop])

    const toggleInfo = (e) => {
        e.preventDefault();

        if (showInfo) {
            setShowInfo(false);
        } else {
            setShowInfo(true);
        }

        console.log(showInfo);
    };

    return (
        <div className='relative desktop:w-[47%] w-[95%] max-w-[764px] m-3'>
            <a href={appUrl} target='_blank' rel='noopener noreferrer' className='z-0'>

                {showInfo ?
                    <div className='group relative border-[10px] border-solid border-base-content rounded-[10px] 
                                shadow-2xl'>
                        <img src={image} alt={alt} className='opacity-25 blur-[1px]' />
                        <TechMobile propStyles='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 w-11/12' desc={desc} tech={tech} />

                        <div className='flex justify-between bg-base-100 absolute bottom-0 w-full'>
                            <div className='my-auto ml-4'>
                                {showInfo ?
                                    <i className='fa-solid fa-xmark fa-2xl' onClick={(e) => toggleInfo(e)}></i>
                                    :
                                    <i className='fa-solid fa-circle-info fa-2xl' onClick={(e) => toggleInfo(e)}></i>
                                }
                            </div>
                            <h2 className='text-2xl text-nowrap text-accent m-2 mr-[50px]'>{name}</h2>
                        </div>
                    </div>

                    :

                    <div className='group relative border-[10px] border-solid border-base-content rounded-[10px] 
                                desktop:hover:border-secondary desktop:hover:shadow-2xl'>
                        {imgLoad ?
                            <img className='w-[764px] aspect-video bg-[#c3c8cb] desktop:group-hover:opacity-25 desktop:group-hover:blur-[1px]' alt={alt}/>
                            :
                            <img src={image} alt={alt} className='desktop:group-hover:opacity-25 desktop:group-hover:blur-[1px]' />
                        }
                        <Technologies propStyles='hidden desktop:group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 w-10/12' desc={desc} tech={tech} />

                        <div className='flex justify-between desktop:justify-end bg-base-100 absolute bottom-0 w-full'>
                            <div className='desktop:hidden my-auto ml-4'>
                                {showInfo ?
                                    <i className='fa-solid fa-xmark fa-2xl' onClick={(e) => toggleInfo(e)}></i>
                                    :
                                    <i className='fa-solid fa-circle-info fa-2xl' onClick={(e) => toggleInfo(e)}></i>
                                }
                            </div>
                            <h2 className='text-2xl text-nowrap text-accent m-2 mr-[50px]'>{name}</h2>
                        </div>
                    </div>
                }
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