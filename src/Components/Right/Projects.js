import { projects } from "../../Data/ExperienceData";

function Projects() {
  return (
    <section id="projects" className="p-5 h-full px-10">
      <h1 className="mb-4 font-normal text-xl">Projects</h1>
      {projects.map((proj, index) => (
        <a href ={proj.link}>
        <div
          key={index}
          className="p-4 mb-4 rounded-lg bg-slate-700 hover:bg-slate-800 duration-500 flex items-center"
        >
          <div className="w-10 h-10 md:w-36 md:h-36 mr-4">
            <img src={process.env.PUBLIC_URL + proj.picture} className="lg:w-24 lg:h-24 w-12 h-12 rounded-sm" alt={proj.title} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{proj.title}</h2>
            <p className="text-slate-200">{proj.description}</p>
            <p className='text-slate-200'>{proj.tools}</p>
          </div>
        </div>
        </a>
      ))}
    </section>
  );
}

export default Projects;
