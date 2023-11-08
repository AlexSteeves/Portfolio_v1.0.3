import { projects } from "../../Data/ExperienceData";

function Projects() {
  return (
    <section id="projects" className="p-5 h-full px-10">
      <h1 className="mb-4 font-normal text-xl">Projects</h1>
      {projects.map((proj, index) => (
        <a href={proj.link} key={index}>
          <div className="p-4 m-4 rounded-lg bg-slate-800 hover:bg-slate-800 duration-500 flex items-center">
            <div className="w-[20%] mr-4">
              <img
                src={process.env.PUBLIC_URL + proj.picture}
                className="border-solid border-2 border-slate-900 lg:w-24 lg:h-24 w-12 h-12 rounded-sm"
                alt={proj.title}
              />
            </div>
            <div className = 'text-left w-[80%]'>
              <h2 className="text-xl font-semibold">{proj.title}</h2>
              <p className="text-slate-200">{proj.description}</p>
              <p className="text-slate-200">{proj.tools}</p>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}

export default Projects;
