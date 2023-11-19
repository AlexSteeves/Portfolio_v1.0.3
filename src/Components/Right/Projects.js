import { projects } from "../../Data/ExperienceData";

function Projects() {
  return (
    <section id="projects" className="p-5 h-full px-10 text-red-100">
      <h1 className="mb-4 font-thin text-xl border-b-2 border-slate-300 pb-2">Projects</h1>
      {projects.map((proj, index) => (
        <a href={proj.link} key={index}>
          <div className="project-item p-8 m-4 rounded-lg flex items-center hover:bg-red-400 duration-300">
            <div className="w-[20%] mr-4">
              <img
                src={process.env.PUBLIC_URL + proj.picture}
                className="border-solid border-2 border-slate-900 lg:w-24 lg:h-24 w-12 h-12 rounded-sm"
                alt={proj.title}
              />
            </div>
            <div className='text-left w-[80%]'>
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
