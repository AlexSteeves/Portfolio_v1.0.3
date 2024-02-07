
import React from "react";
import About from "./Right/About"
import Experience from "./Right/Experience"
import Projects from "./Right/Projects"
import Languages from "./Right/Languages"
import List from "./Right/List";

import { languages }  from "../Data/ExperienceData";
import { frameworks } from "../Data/ExperienceData";
import {tools } from "../Data/ExperienceData";
function RightSide() {
    return(
        <div className = "lg:w-1/2  py-10 lg:overflow-auto">
            <About />
            <Experience />
            <Projects />

            <div className = "flex flex-col md:flex-row overflow-x-none justify-evenly">

            <Languages list= {languages} name={'Languages'} />
            <Languages list = {frameworks} name={'Frameworks'} />
            <Languages list = {tools } name = {'Tools'} />
            </div>
           

            
        

            
            
        </div>
    );
}


export default RightSide;