import React from "react";
import { experience } from "../../Data/ExperienceData";

const ExperienceComponent = () => {
  return (
    <section id="experience" className="p-5 h-full px-10">
      <h1 className="mb-4 font-normal border-b-2 border-slate-300 pb-2 text-xl">Experience</h1>
      {experience.map((exp, index) => (
        <div className="flex bg-slate-800 m-4 rounded-lg">
          <div className = 'lg:w-[25%] '>
            <h3 className = 'm-3 mt-5 text-sm'>{exp.time} </h3>
          </div>
          <div key={index} className=" p-4 mb-4 lg:w-[75%]">
            <h2 className="text-xl font-bold">{exp.jobtitle}</h2>
       
            <h4 className="text-slate-200 font-semibold p-1">{exp.company}</h4>
            <p className="text-slate-200 p-3">{exp.body}</p>
            <p className="text-slate-200 pl-3">{exp.skills}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceComponent;
