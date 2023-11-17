import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

export default function NavLinks() {
  const resumePath = process.env.PUBLIC_URL + '/pictures/resume.pdf';

  return (
    <div> 
      <ul className="flex justify-center items-center space-x-5">
        <li className="text-red-100 text-4xl cursor-pointer shadow-xl">
          <a href="https://github.com/AlexSteeves?tab=repositories"><FaGithub /></a>
        </li>
        <li className="text-red-100 text-4xl cursor-pointer shadow-xl">
          <a href="https://www.linkedin.com/in/alexander-steeves-8122b8178/"><BsLinkedin /></a>
        </li>
        <li className="text-red-100 text-xl font-thin hover:text-red-300 duration-300">
          <a rel="noreferrer" target="_blank" href={resumePath}>Resume</a>
        </li>
      </ul>
    </div>
  );
}
