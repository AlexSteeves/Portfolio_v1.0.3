import React from "react";
import { experience } from "../../Data/ExperienceData";

const ExperienceComponent = () => {
  return (
    <section className="p-5 h-full px-10 bg-pallet-secondary text-pallet-primary m-8 rounded-md" id="experience" >
      <h1 className="mb-4 font-thin border-b-2 border-slate-300 pb-2 text-xl">Experience</h1>
      {experience.map((exp, index) => (
        <div className="flex m-4">
          <div className = 'lg:w-[25%] font-thin'>
            <h3 className = 'm-3 mt-5 text-sm'>{exp.time} </h3>
          </div>
          <div key={index} className=" p-4 mb-4 lg:w-[75%]">
            <h2 className="text-xl font-normal">{exp.jobtitle}</h2>
       
            <h4 className="font-thin py-1">{exp.company}</h4>
            <p className="py-3 font-thin">{exp.body}</p>
            <p className=" font-thin py-2">Skills: <span className = "font-normal" >{exp.skills}</span></p>
            
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceComponent;
