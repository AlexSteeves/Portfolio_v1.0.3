import React from "react";

export default function HeaderText() {
    return (
        <div className=" p-8   text-left lg:text-center ">
            <div className="flex justify-start items-start lg:justify-center lg:items-center">
                <img
                    src={process.env.PUBLIC_URL + "pictures/Headshot.png"}
                    className="w-24 h-24 md:w-36 md:h-36 lg:w-56 lg:h-56  rounded-full"
                    alt="Headshot"
                />
            </div>

            <h1 className="header-text">Alexander Steeves</h1>

            <h2 className="subheader-text">
                Avid Developer and Computer Engineering Graduate
            </h2>
        </div>
    );
}
