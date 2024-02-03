import { projects } from "../../Data/ExperienceData";

function Projects() {
  return (
    <section id="projects" className="p-5 h-full px-10 bg-pallet-primary m-8 rounded-md text-pallet-secondary">
      <h1 className="mb-4 font-thin text-xl border-b-2 border-slate-300 pb-2">Projects</h1>
      {projects.map((proj, index) => (
        <a href={proj.link} key={index}>
          <div className="project-item p-2 m-4 rounded-lg flex items-center hover:text-pallet-accent  hover:border ">
           
            <div className='text-left'>
              <h2 className="text-xl font-normal">{proj.title}</h2>
              <p className="font-thin pt-1">{proj.description}</p>
              <p className="font-thin pt-1">Skills: <span className="font-normal">{proj.tools}</span></p>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}

export default Projects;
