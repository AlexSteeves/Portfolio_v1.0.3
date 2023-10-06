import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
function App() {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900  text-white bg-fixed">
      <section className="lg:flex min-h-screen md:justify-between md:gap-4">
        <Header />
        <main className="lg:w-1/2">
          <div>
            <About />
            <Experience />
            <Projects />
            <Skills  />
          </div>
        </main>
      </section>
    </div>
  );
}

export default App;
