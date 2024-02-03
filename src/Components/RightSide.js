
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
        <div className = "lg:w-1/2 my-2 h-fill overflow-auto">
            <About />
            <Experience />
            <Projects />
            <Languages list= {languages} name={'Languages'} />
            <Languages list = {frameworks} name={'Frameworks'} />
            <Languages list = {tools } name = {'Tools'} />

            
        

            
            
        </div>
    );
}


export default RightSide;