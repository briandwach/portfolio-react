export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
        Download my <a className="resumeLink" href='/images/wachresume.pdf' target="_blank" rel="noopener noreferrer">resume</a>
      </p>

      <div className="skills">
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>

        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>PostgreSQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>graphQL</li>
        </ul>
      </div>
    </div>
  );
}