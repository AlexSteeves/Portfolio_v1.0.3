import { FaGithub, } from "react-icons/fa";
import { BsLinkedin, BsNewspaper } from "react-icons/bs";
export default function NavLinks() {
    const styles = "mr-5 text-white text-4xl cursor-pointer shadow-xl";
  return (
    <ul className="flex justify-center items-center ">
      <li className={styles}>
        <FaGithub  />
      </li>
      <li className={styles}>
        <BsLinkedin  />
      </li>
      <li className={styles}>
        <BsNewspaper  />
      </li>
     
    </ul>
  );
}
