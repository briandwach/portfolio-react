function Footer() {

    const logoStyles = 'max-w-[50px] m-[10px] desktop:hover:opacity-50'

    return (<div className='flex justify-center mt-[20px]'>
        <a href='https://github.com/briandwach' target='_blank' rel='noopener noreferrer'>
            <img className={logoStyles} src='/images/github-mark.png' alt='Github Invertocat logo' />
        </a>
        <a href='https://www.linkedin.com/in/brianwach/' target='_blank' rel='noopener noreferrer'>
            <img className={logoStyles} src='/images/In-Blue-128.png' alt='LinkedIn blue In logo' />
        </a>
    </div>
    );
}

export default Footer;