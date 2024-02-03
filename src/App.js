import React from "react";
import RightSide from "./Components/RightSide";
import LeftSide from "./Components/LeftSide";
import ParticlesBackground from "./Particles/ParticlesBackground";

import './App.css'


const App = () => {
  return (
    <>
    <ParticlesBackground />
    <div className='relative'>
      
      <div className="min-h-screen lg:flex md:justify-between md:gap-4 z-0">
        <LeftSide />
        <main className="lg:w-2/3">
          <RightSide />
        </main>
      </div>
      
    </div>
    </>
  );
};

export default App;


/*

*/
