import React from "react";

import RightSide from "./Components/RightSide";
import LeftSide from "./Components/LeftSide";

function App() {
  return (
    <div className = 'bg-slate-900 text-white bg-fixed '>
      <section className="lg:flex min-h-screen md:justify-between md:gap-4 ">
        
        <LeftSide />

        <main className="lg:w-2/3  "> 
          <RightSide />
        </main>
      </section>
    </div>
  );
}

export default App;
