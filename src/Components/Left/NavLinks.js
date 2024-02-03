import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

export default function NavLinks() {
  const resumePath = process.env.PUBLIC_URL + '/pictures/resume.pdf';

  return (
    <div className = "bg-pallet-primary mx-8 lg:mt-4 py-2 lg:rounded-md"> 
      <ul className="flex justify-center items-center space-x-5">
        <li className="text-pallet-background hover:text-pallet-accent duration-300 text-4xl cursor-pointer shadow-xl">
          <a href="https://github.com/AlexSteeves?tab=repositories"><FaGithub /></a>
        </li>
        <li className="text-pallet-background hover:text-pallet-accent duration-300  text-4xl cursor-pointer shadow-xl">
          <a href="https://www.linkedin.com/in/alexander-steeves-8122b8178/"><BsLinkedin /></a>
        </li>
        <li className="text-pallet-background hover:text-pallet-accent duration-300 text-3xl font-thin ">
          <a rel="noreferrer" target="_blank" href={resumePath}>Resume</a>
        </li>
      </ul>
    </div>
  );
}
