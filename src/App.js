import React from "react";
import RightSide from "./Components/RightSide";
import LeftSide from "./Components/LeftSide";

import './App.css'


const App = () => {
  return (
    <div className='relative'>
      <div className="min-h-screen lg:flex md:justify-between md:gap-4 lg:mx-20">
        <LeftSide />
        <RightSide />
       
      </div>
    </div>
  );
};

export default App;
