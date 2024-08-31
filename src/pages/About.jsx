import { useState, useEffect } from 'react';

function About() {

  const imgSrc = '/images/headshot.png';

  const [imgLoad, setImgLoad] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => {
      setImgLoad(false);
    }
  }, [imgSrc]);

  return (
    <div className='center:max-w-[580px]'>
      <h1 className='text-3xl m-2'>About Me</h1>
      <div className='center:flex flex-row'>
        {imgLoad ?
          <img className='w-[300px] h-[200px] m-2 bg-[#c3c8cb]' alt='Headshot of Brian Wach'/>
          :
          <img className='rounded-3xl w-3/4 h-3/4 max-w-[300px] m-2' src={imgSrc} alt='Headshot of Brian Wach' />
        }
        <div className='text-xl text-base-content m-2'>
          <ul>
            <li>Full Stack Web Developer</li>
            <li>Audio Visual Technician</li>
            <li>Musician</li>
          </ul>
          <br></br>
          <p>
            Focused on creating intuitive web applications to serve the needs of businesses and people.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;