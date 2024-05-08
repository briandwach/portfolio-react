import projectData from '../data/projectData.js';
import Project from '../components/Project/Project.jsx';

export default function Portfolio() {
  return (
      <div>
          <h1>Portfolio</h1>
          <div>
              {projectData.map((project) => (
                  <Project
                      key={project.name}
                      name={project.name}
                      appUrl={project.appUrl}
                      githubUrl={project.githubUrl}
                      image={project.image}
                      alt={project.alt}
                  />
              ))}
          </div>
      </div>
  );
}