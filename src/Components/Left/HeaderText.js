import React from 'react';


export default function HeaderText() {
  return (
    <div className="p-8 font-sans text-center">
      <img src={process.env.PUBLIC_URL + 'pictures/Headshot.png'} className="w-52 h-52 mx-auto rounded-full" alt="Headshot" />

      <h1 className="font-light text-3xl lg:text-5xl text-red-100 drop-shadow-md tracking-tight mt-4">
        Alexander Steeves
      </h1>

      <h2 className="mt-2 text-lg font-extralight text-red-100 drop-shadow-md tracking-tight">
        Fullstack Developer and Computer Engineering Student
      </h2>
    </div>
  );
}
