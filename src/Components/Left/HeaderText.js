import React from 'react';


export default function HeaderText() {
  return (
    <div className="p-8 mx-8  mt-8 lg:mb-4 rounded-t-md lg:rounded-md  font-sans text-center bg-pallet-primary">
      <img src={process.env.PUBLIC_URL + 'pictures/Headshot.png'} className="w-52 h-52 mx-auto rounded-full" alt="Headshot" />

      <h1 className="header-text text-pallet-secondary">
        Alexander Steeves
      </h1>

      <h2 className="sub-header-text text-pallet-background">
        Fullstack Developer and Computer Engineering Student
      </h2>
    </div>
  );
}
