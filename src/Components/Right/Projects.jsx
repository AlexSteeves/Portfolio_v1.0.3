import { projects } from "../../Data/ExperienceData";

function Projects() {
  return (
    <section id="projects" className="p-5 h-fit px-10 text-pallet-text dark:text-dark-accent">
      <h1 className="mb-4 font-thin text-xl border-b-2 border-slate-300 pb-2">Projects</h1>
      {projects.map((proj, index) => (
        <a href={proj.link} key={index}>
          <div className="p-8 m-2 rounded-lg flex items-center hover:opacity-60 duration-500 text-pallet-text dark:text-dark-text ">
            <div className="w-[20%] mr-2">
              <img
                src={process.env.PUBLIC_URL + proj.picture}
                className="border-solid border-2 border-slate-900 w-fill h-fill rounded-sm"
                alt={proj.title}
              />
            </div>
            <div className='text-left w-[80%]'>
              <h2 className="text-xl font-normal">{proj.title}</h2>
              <p className="font-semi pt-1 exp-text">Skills: <span className="font-normal exp-text">{proj.tools}</span></p>
              <p className="font-thin pt-1 exp-text">{proj.description}</p>
              
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}

export default Projects;
