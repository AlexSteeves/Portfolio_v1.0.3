export default function PageLinks() {
    return (
        <section className="h-fill w-fill flex relative p-8 items-center justify-center">
            <ul className="flex flex-row gap-3 font-thin ">
                <li>
                    <div className="py-[1px] px-1 bg-pallet-secondary rounded-xl hover:bg-pallet-accent transition-all duration-300">
                        <a href="#about" className="">
                            <p className="text-pallet-text font-light ">About</p>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="py-[1px] px-1 bg-pallet-secondary rounded-xl hover:bg-pallet-accent transition-all duration-300">
                        <a href="#experience" className="">
                            <span className="text-pallet-text font-light">
                                Experience
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="py-[1px] px-1 bg-pallet-secondary rounded-xl hover:bg-pallet-accent transition-all duration-300">
                        <a href="#projects" className="">
                            <span className="text-pallet-text font-light">
                                Projects
                            </span>
                        </a>
                    </div>
                </li>
                <li>
                    <div className="py-[1px] px-1 bg-pallet-secondary rounded-xl hover:bg-pallet-accent transition-all duration-300">
                        <a href="#languages" className="">
                            <span className="text-pallet-text font-light">
                                Languages
                            </span>
                        </a>
                    </div>
                </li>
            </ul>
        </section>
    );
}
