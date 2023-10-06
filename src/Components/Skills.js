import { skills }  from "../Data/ExperienceData"

function Skills(){


    return(
        <>
        <h1 className = "px-10 font-normal  text-xl">Skills</h1>
        <div id="skills" className = " grid grid-cols-2 gap-2 h-full p-5 px-10">
        
           
            {skills.map((skill, index) =>(
                <div key ={index} className = "rounded-md shadow-lg  p-4 mb-2 hover:bg-slate-800 duration-500">
                    <h1>{skill}</h1>
                </div>
            ))}
        </div>
        </>
    )
}

export default Skills;