function Technologies() {
    return (
        <div>
            <div className='m-2'>
            <Link className='font-bold text-base-content desktop:hover:text-accent desktop:active:text-success inline-block' to='/'>
            <h1 className='text-5xl w-fit'>Brian Wach</h1>
            <h1 className='ml-[2px] w-fit'>Full Stack Web Developer</h1>
             </Link>
             </div>
            <Navigation />
        </div>
    );
}

export default Technologies;