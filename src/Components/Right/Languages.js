import { languages } from "../../Data/ExperienceData";
import Chip from '@mui/material-next/Chip';

function Languages({ list, name }) {
  return (
    <div className = 'p-4 m-4'>
      <Chip  className='text-red-100 rounded-md shadow-md p-1 mb-1 font-thin' label="Chip Filled" />
      <h1 className="font-thin text-red-100 border-b-2 border-slate-300 pb-2 text-xl">
        {name}
      </h1>
      <div id="languages" className=" grid grid-cols-3 gap-2 h-full pt-5 px-10">
        {list.map((language, index) => (
          <div
            key={index}
            className='text-red-100 rounded-md shadow-md p-1 mb-1 font-thin'
          >

            
            <h1>{language}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Languages;
