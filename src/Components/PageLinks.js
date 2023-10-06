export default function PageLinks() {
  return (
    <section className="p-14">
      <ul>
        <li className = "pb-2">
          <a href="#about" className = "hover:text-cyan-500 duration-300 drop-shadow-xl">About</a>
        </li>
        <li className = "pb-2">
          <a href = "#experience" className = "hover:text-cyan-500 duration-300 drop-shadow-xl">Experience</a>
        </li>
        <li className = "pb-2">
          <a href = "#projects" className = "hover:text-cyan-500 duration-300 drop-shadow-xl">Projects</a>
        </li>
        <li className = "pb-2">
          <a href = "#skills" className = "hover:text-cyan-500 duration-300 drop-shadow-xl">Skills</a>
        </li>
        
      </ul>
    </section>
  );
}
