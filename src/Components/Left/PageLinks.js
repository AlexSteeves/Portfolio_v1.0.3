export default function PageLinks() {
    return (
        <section className="h-fit w-fill flex  p-8 items-center justify-center">
            <ul className="flex flex-row gap-1 font-thin ">
                <li>
                    <div className="page-links  ">
                        <a href="#about" className="">
                            <p className="text-pallet-text font-normal dark:text-dark-text ">About</p>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="page-links ">
                        <a href="#experience" className="">
                            <span className="text-pallet-text font-normal dark:text-dark-text ">
                                Experience
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="page-links ">
                        <a href="#projects" className="">
                            <span className="text-pallet-text dark:text-dark-text font-normal">
                                Projects
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="page-links">
                        <a href="#languages" className="">
                            <span className="text-pallet-text dark:text-dark-text  font-normal">
                                Languages
                            </span>
                        </a>
                    </div>
                </li>
            </ul>
        </section>
    );
}
