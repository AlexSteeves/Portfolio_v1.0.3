import React from "react";

export default function HeaderText() {
    return (
        <div className="px-14 p-8 lg:p-8  text-left lg:text-center ">
            <div className="flex justify-start items-start md:justify-center md:items-center">
                <img
                    src={process.env.PUBLIC_URL + "pictures/Headshot.png"}
                    className="w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 mx-auto rounded-full"
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
