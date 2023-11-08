import React from "react";
import { experience } from "../../Data/ExperienceData";

const ExperienceComponent = () => {
  return (
    <section id="experience" className="p-5 h-full px-10">
      <h1 className="mb-4 font-normal  text-xl">Experience</h1>
      {experience.map((exp, index) => (
        <div className="flex bg-slate-800 m-4 rounded-lg">
          <div >
            <h3 className = 'm-5'>September 2023</h3>
          </div>
          <div key={index} className=" p-4 mb-4  ">
            <h2 className="text-xl font-semibold">{exp.header}</h2>
            <p className="text-slate-200">{exp.title}</p>
            <p className="text-slate-200">{exp.company}</p>
            <p className="text-slate-200">{exp.body}</p>
            <p className="text-slate-200">{exp.skills}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceComponent;
