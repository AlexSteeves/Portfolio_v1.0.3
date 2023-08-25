import Header from "./Components/Header";
import About from "./Components/About";
import Experience from "./Components/Experience";
import "./App.css";

function App() {
  return (
    <div className = "bg-gray-900 mx-auto ">
      <section className="lg:flex min-h-[100vh] md:justify-between md:gap-4">
        <Header />
        <main className = "lg:w-1/2" >
          <div >
            <About />
            <Experience />
          </div>
        </main>
      </section>
    </div>
  );
}

export default App;
