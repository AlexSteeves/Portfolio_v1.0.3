import HeaderText from "./HeaderText";
import NavLinks from "./NavLinks";
export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <HeaderText />
      <NavLinks />
    </header>
  );
}
