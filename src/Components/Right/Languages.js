import { languages } from "../../Data/ExperienceData";

function Languages({ list, name }) {
  return (
    <div className = 'p-4 px-10 md:px-0 md:p-0'>
      <h1 className="font-thin text-pallet-secondary border-b-2 border-slate-300 pb-2 text-xl">
        {name}
      </h1>
      <div id="languages" className="flex flex-col gap-2 h-full pt-5 px-8">
        {list.map((language, index) => (
          <div
            key={index}
            className='text-pallet-primary p-1  font-thin'
          >
            <h1>{language}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Languages;
