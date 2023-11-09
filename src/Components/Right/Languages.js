import { languages } from "../../Data/ExperienceData";

function Languages({ list, name }) {
  return (
    <div className = 'p-4 m-4'>
      <h1 className=" font-normal border-b-2 border-slate-300 pb-2 text-xl">
        {name}
      </h1>
      <div id="languages" className=" grid grid-cols-3 gap-2 h-full pt-5 px-5">
        {list.map((language, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-md shadow-lg  p-1 mb-1 "
          >
            <h1>{language}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Languages;
