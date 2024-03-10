import React from "react";
import { experience } from "../../Data/ExperienceData";

const ExperienceComponent = () => {
  return (
    <section id="experience" className="p-5 h-fit px-10 text-pallet-text dark:text-dark-accent">
      <h1 className="mb-4 font-thin border-b-2 border-slate-300 pb-2 text-xl">Experience</h1>
      {experience.map((exp, index) => (
        <div key={index} className="flex m-4 text-pallet-primary dark:text-dark-primary items-start">
          <div className="w-[15%] lg:w-[25%]">
            <h3 className="font-normal text-[12px] lg:text-[16px] mt-0 mb-3">{exp.time}</h3>
          </div>
          <div className="flex-1 p-4 mb-4">
            <h2 className="font-bold body-text">{exp.jobtitle}</h2>
            <h4 className="font-semibold py-1 body-text">{exp.company}</h4>
            <p className="font-normal body-text indent-3">{exp.body}</p>
            <p className="font-normal body-text">Skills: <span className="font-semibold">{exp.skills}</span></p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceComponent;
