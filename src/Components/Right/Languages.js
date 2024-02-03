import { languages } from "../../Data/ExperienceData";

function Languages({ list, name }) {
  return (
    <div className = 'p-4 m-4'>
      <h1 className="font-thin text-pallet-secondary border-b-2 border-slate-300 pb-2 text-xl">
        {name}
      </h1>
      <div id="languages" className=" grid grid-cols-2 gap-2 h-full pt-5 px-8">
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
