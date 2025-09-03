import NavBar from "./nav.tsx";
import hero from "../assets/desktop/image-hero.jpg";

const Header = () => {
  return (
    <>
      <header>
        <div id="logo-navBar">
          <img src="/src/assets/logo.svg" alt="logo" />
          <NavBar />
        </div>

        <div id="header-description">
          Immersive <br />
          Experiences <br />
          That Deliver
        </div>
      </header>
    </>
  );
};

export default Header;
