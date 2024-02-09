import React from "react";
import RightSide from "./Components/RightSide";
import LeftSide from "./Components/LeftSide";

import{ useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./Components/TopBar"
import './App.css'


const App = () => {
  return (
    <div className='relative'>
      <TopBar />
      <div className="min-h-screen lg:flex md:justify-between md:gap-4 lg:mx-20">
        <LeftSide />
        <RightSide />
       
      </div>
    </div>
  );
};

export default App;
