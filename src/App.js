import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Experience from "./Components/Experience";

function App() {
  return (
    <div className="bg-gradient-to-r from-gray-800 via-blue-900 to-gray-800 p-4 text-white bg-fixed">
      <section className="lg:flex min-h-screen md:justify-between md:gap-4">
        <Header />
        <main className="lg:w-1/2">
          <div>
            <About />
            <Experience id="Experience"/>
          </div>
        </main>
      </section>
    </div>
  );
}

export default App;
