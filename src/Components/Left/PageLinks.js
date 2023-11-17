export default function PageLinks() {
  return (
    <section className="p-8 flex ml-14 relative h-52"> 
      <ul className="flex flex-col gap-3 text-red-100 font-thin">
        <li>
          <a href="#about" className="group">
            <span className="hover:text-cyan-500 hover:text-xl duration-300 drop-shadow-xl transition-all">About</span>
          </a>
        </li>
        <li>
          <a href="#experience" className="group">
            <span className="hover:text-cyan-500 hover:text-xl duration-300 drop-shadow-xl transition-all">Experience</span>
          </a>
        </li>
        <li>
          <a href="#projects" className="group">
            <span className="hover:text-cyan-500 hover:text-xl duration-300 drop-shadow-xl transition-all">Projects</span>
          </a>
        </li>
        <li>
          <a href="#languages" className="group">
            <span className="hover:text-cyan-500 hover:text-xl duration-300 drop-shadow-xl transition-all">Languages and Tools</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
