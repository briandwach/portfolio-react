import projectData from '../data/projectData.js';
import Project from '../components/Project.jsx';

export default function Portfolio() {
  return (
      <div>
          <h1 className='text-3xl m-2 center:text-center'>Projects</h1>
          <p className='ml-2 center:ml-0 center:text-center'>
            Checkout my <a href='https://gist.github.com/briandwach/b723b23933ab8149f421629f5caed7f1' target="_blank" rel="noopener noreferrer"
            className='text-accent desktop:hover:text-success desktop:active:text-primary'> 
          Regex Tutorial: Matching a URL
          </a>
          </p>
          <div className='flex flex-wrap justify-center'>
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