import {projects} from "../Data/ExperienceData";

function Projects() {
  return (
    <section id="projects" className="p-5 h-full px-10">
      <h1 className="mb-4 font-normal  text-xl">Projects</h1>
      {projects.map((proj, index) => (
        <div
          key={index}
          className=" p-4 mb-4 rounded-lg hover:bg-gray-800 duration-500"
        >
          <h2 className="text-xl font-semibold">{proj.title}</h2>
          <img src={proj.picture} className = "w-10 h-10 md:w-36 md:h-36"></img>
          <p className="text-slate-200">{proj.description}</p>
          <p className="text-slate-200">{proj.link}</p>
         
        </div>
      ))}
    </section>
  );
}

export default Projects;

