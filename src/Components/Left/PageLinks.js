export default function PageLinks() {
    return (
        <section className=" flex relative mx-8 mt-4 mb-4 ">
            <ul className="flex flex-grow bg-pallet-secondary p-1 rounded-md">


                <li className = "flex-grow ">
                    <a href="#about">
                        <p className="link-text ">
                            About
                        </p>
                    </a>
                </li>
                <li className = "flex-grow">
                    <a href="#experience">
                        <span className="link-text ">
                            Experience
                        </span>
                    </a>
                </li>
                <li className = "flex-grow">
                    <a href="#projects">
                        <span className="link-text ">
                            Projects
                        </span>
                    </a>
                </li>
                <li className = "flex-grow">
                    <a href="#languages">
                        <span className="link-text ">
                            Skills
                        </span>
                    </a>
                </li>
            </ul>
        </section>
    );
}
