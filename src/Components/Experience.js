import React from 'react';
import { experience } from "../Data/ExperienceData"

const ExperienceComponent = () => {
  return (
    <section className="p-5 h-full px-10">
      {experience.map((exp, index) => (
        <div key={index} className="bg-gray-200 p-4 mb-4 rounded-lg hover:opacity-50 transition-all duration-500">
          <h2 className="text-xl font-semibold">{exp.header}</h2>
          <p className="text-gray-600">{exp.title}</p>
          <p className="text-gray-600">{exp.company}</p>
          <p className="text-gray-800">{exp.body}</p>
          <p className="text-gray-700">{exp.skills}</p>
        </div>
      ))}
    </section>
  );
}

export default ExperienceComponent;
