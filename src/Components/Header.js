import HeaderText from "./HeaderText";
import NavLinks from "./NavLinks";
import PageLinks from "./PageLinks";
export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col">
      <HeaderText />
      <PageLinks />
      <NavLinks />
    </header>
  );
}
