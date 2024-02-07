import HeaderText from "./Left/HeaderText";
import NavLinks from "./Left/NavLinks";
import PageLinks from "./Left/PageLinks";


export default function LeftSide() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col overflow-hidden py-10 ">
      <HeaderText />
      <div className = "hidden lg:block">
      <PageLinks />
      </div>
  
      <NavLinks />
    </header>
  );
}
