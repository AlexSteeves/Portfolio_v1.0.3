export default function PageLinks() {
  return (
    <section className="p-8 flex justify-center">
      <ul className="flex space-x-6">
        <li>
          <a href="#about" className="hover:text-cyan-500 duration-300 drop-shadow-xl">About</a>
        </li>
        <li>
          <a href="#experience" className="hover:text-cyan-500 duration-300 drop-shadow-xl">Experience</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-cyan-500 duration-300 drop-shadow-xl">Projects</a>
        </li>
        <li>
          <a href="#languages" className="hover:text-cyan-500 duration-300 drop-shadow-xl">Languages and Tools</a>
        </li>
      </ul>
    </section>
  );
}
