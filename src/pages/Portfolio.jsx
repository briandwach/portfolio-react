import projectData from '../data/projectData.js';
import Project from '../components/Project.jsx';

export default function Portfolio() {
  return (
      <div>
          <h1 className='text-3xl m-2 center:w-fit center:mx-auto'>Projects</h1>
          <div className='desktop:flex desktop:flex-wrap desktop:justify-center flex flex-wrap justify-center'>
              {projectData.map((project) => (
                  <Project
                      key={project.name}
                      name={project.name}
                      appUrl={project.appUrl}
                      githubUrl={project.githubUrl}
                      image={project.image}
                      alt={project.alt}
                      desc={project.desc}
                      tech={project.tech}
                  />
              ))}
          </div>
      </div>
  );
}