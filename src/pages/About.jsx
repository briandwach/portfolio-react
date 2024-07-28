export default function About() {
  return (
    <div>
      <h1 className='text-3xl m-2'>About Me</h1>
      <div className='mobile:flex flex-row'>
        <img className='rounded-3xl w-3/4 h-3/4 max-w-[300px] m-2' src='/images/headshot.png' alt='Headshot of Brian Wach' />
        <div className='text-xl text-base-content m-2'>
        <p>
          Full Stack Web Developer - Audio Visual Technician - Musician
        </p>
        <br></br>
        <p>
          Focused on creating intuitive web applications to serve the needs of businesses and people.
        </p>
        </div>
      </div>
    </div>
  );
}