export default function Resume() {
  return (
    <div>
      <h1 className='text-3xl m-2'>Resume</h1>
      <p className='m-2 mb-5'>
        Download my <a href='/images/wachresume.pdf' target="_blank" rel="noopener noreferrer"
        className='text-accent desktop:hover:text-success desktop:active:text-base-content'>
        resume
        </a>
      </p>

      <div className="m-[10px]">
        <h3 className='text-2xl font-bold'>Front-end Proficiencies</h3>
        <ul className='list-disc mb-8 ml-4'>
          <li>React</li>
          <li>JavaScript</li>
          <li>Responsive Design</li>
          <li>CSS</li>
          <li>Tailwind</li>
          <li>HTML</li>
          <li>jQuery</li>          
          <li>Bootstrap</li>
        </ul>

        <h3 className='text-2xl font-bold'>Back-end Proficiencies</h3>
        <ul className='list-disc mb-8 ml-4'>
          <li>MongoDB, Mongoose</li>
          <li>Express</li>
          <li>Node</li>
          <li>graphQL</li>
          <li>APIs</li>
          <li>PostgreSQL, Sequelize</li>
          <li>REST</li>       
        </ul>
      </div>
    </div>
  );
}