export default function PageLinks() {
    return (
        <section className="h-fill w-fill flex relative p-8 items-center justify-center">
            <ul className="flex flex-row gap-3 font-thin ">
                <li>
                    <div className="py-[1px] px-3 bg-pallet-secondary rounded-xl hover:bg-pallet-accent transition-all duration-300 dark:bg-dark-secondary dark:hover:bg-dark-accent ">
                        <a href="#about" className="">
                            <p className="text-pallet-text font-normal dark:text-dark-text ">About</p>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="py-[1px] px-3 bg-pallet-secondary rounded-xl hover:bg-pallet-accent transition-all duration-300 dark:bg-dark-secondary dark:hover:bg-dark-accent ">
                        <a href="#experience" className="">
                            <span className="text-pallet-text font-normal dark:text-dark-text ">
                                Experience
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="py-[1px] px-3 bg-pallet-secondary rounded-xl hover:bg-pallet-accent transition-all duration-300 dark:bg-dark-secondary dark:hover:bg-dark-accent ">
                        <a href="#projects" className="">
                            <span className="text-pallet-text dark:text-dark-text font-normal">
                                Projects
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="py-[1px] px-3 bg-pallet-secondary dark:bg-dark-secondary rounded-xl hover:bg-pallet-accent dark:hover:bg-dark-accent transition-all duration-300">
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
