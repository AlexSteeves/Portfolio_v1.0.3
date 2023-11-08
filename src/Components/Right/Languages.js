import { languages }  from "../../Data/ExperienceData"

function Languages({list, name}){


    return(
        <>
        <h1 className = "px-10 font-normal  text-xl">{name}</h1>
        <div id="languages" className = " grid grid-cols-3 gap-2 h-full p-5 px-10">
        
           
            {list.map((language, index) =>(
                <div key ={index} className = "bg-slate-800 rounded-md shadow-lg  p-1 mb-1 ">
                    <h1>{language}</h1>
                </div>
            ))}
        </div>
        </>
    )
}

export default Languages;