function Technologies({ propStyles, desc, tech}) {

    const paragraphStyles = 'text-base-100 block text-center'

    return (
        <div className={`bg-neutral rounded-[10px] p-3 shadow-2xl ${propStyles}`}>
            <p className={`${paragraphStyles} text-xl`}>{desc}</p>
            <br></br>
            <p className={`${paragraphStyles} text-2xl font-bold`}>{tech}</p>
        </div>
    );
}

export default Technologies;