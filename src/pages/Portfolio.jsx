import projectData from '../data/projectData.js';
import Project from '../components/Project.jsx';

export default function Portfolio() {
  return (
      <div>
          <h1>Portfolio</h1>
          <div className="projectGrid">
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