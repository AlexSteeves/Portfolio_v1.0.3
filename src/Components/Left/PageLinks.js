export default function PageLinks() {
  return (
    <section className=" flex relative p-8"> 
    <ul className="flex flex-row gap-3 font-thin">
      <li>
        <a href="#about" className="">
          <p className= "text-red-100 hover:text-red-hover">About</p>
        </a>
      </li>
      <li>
        <a href="#experience" className="">
          <span className="text-red-100 hover:text-red-hover">Experience</span>
        </a>
      </li>
      <li>
        <a href="#projects" className="">
          <span className="text-red-100 hover:text-red-hover">Projects</span>
        </a>
      </li>
      <li>
        <a href="#languages" className="">
          <span className="text-red-100 hover:text-red-hover">Languages and Tools</span>
        </a>
      </li>
    </ul>
  </section>
  
  );
}
