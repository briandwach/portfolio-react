import projectData from '../data/projectData.js';
import Project from '../components/Project.jsx';

export default function Portfolio() {
  return (
      <div>
          <h1 className='text-3xl m-2'>Portfolio</h1>
          <div className='desktop:flex desktop:flex-wrap desktop:w-full desktop:ml-[1%] desktop:mr-[1%]'>
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