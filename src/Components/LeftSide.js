import HeaderText from "./Left/HeaderText";
import NavLinks from "./Left/NavLinks";



export default function LeftSide() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:items-center lg:justify-center overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full md:pb-20">
      <HeaderText />
      
      
  
      <NavLinks />

      </div>
     
    </header>
  );
}

/*
import PageLinks from "./Left/PageLinks";
      <div className = "hidden lg:block">
      <PageLinks />
      </div>
  */
