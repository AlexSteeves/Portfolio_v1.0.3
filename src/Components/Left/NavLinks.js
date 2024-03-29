import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

export default function NavLinks() {
  const resumePath = process.env.PUBLIC_URL + '/pictures/resume.pdf';

  return (
    <div className="flex justify-start lg:justify-center">
      <ul className="flex justify-center gap-6 items-center space-x-5 w-full max-w-xs lg:max-w-md">
        <li className="text-pallet-secondary hover:text-pallet-primary dark:text-dark-accent dark:hover:text-dark-primary duration-300 text-[29px] md:text-[34px] lg:text-[37px] cursor-pointer">
          <a href="https://github.com/AlexSteeves?tab=repositories"><FaGithub /></a>
        </li>
        <li className="text-pallet-secondary md:text-[34px] hover:text-pallet-primary duration-300 text-[29px] lg:text-[37px] cursor-pointer dark:text-dark-accent dark:hover:text-dark-primary ">
          <a href="https://www.linkedin.com/in/alexander-steeves-8122b8178/"><BsLinkedin /></a>
        </li>
        <li className="text-pallet-secondary md:text-[24px] hover:text-pallet-primary duration-300 text-[16px] lg:text-[28px] cursor-pointer dark:text-dark-accent dark:hover:text-dark-primary ">
          <a rel="noreferrer" target="_blank" href={resumePath}>Resume</a>
        </li>
        <li className="text-pallet-secondary md:text-[24px] hover:text-pallet-primary duration-300 text-[16px] lg:text-[28px] cursor-pointer dark:text-dark-accent dark:hover:text-dark-primary ">
          <a rel="noreferrer" target="_blank" href="mailto:alqusteeves@gmail.com">Contact</a>
        </li>
      </ul>
    </div>
  );
}
