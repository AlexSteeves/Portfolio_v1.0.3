import { languages } from "../../Data/ExperienceData";

function Languages({ list, name }) {
  return (
    <div className = 'p-4 px-10 lg:px-0 lg:p-0'>
      <h1 className="font-thin text-pallet-text dark:text-dark-accent border-b-2 border-slate-300 pb-2 text-xl flex-1">
        {name}
      </h1>
      <div id="languages" className="flex flex-col gap-2 h-full pt-5 " >
        {list.map((language, index) => (
          <div
            key={index}
            className='text-pallet-primary dark:text-dark-primary p-1  font-thin'
          >
            <h1>{language}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Languages;
