import { FaBars } from "react-icons/fa";
import NavBar from "./nav.tsx";
import useViewportWidth from "./customHooks.tsx";

const LogoNavBarTop = () => {
  const width = useViewportWidth();

  return width < 1300 ? (
    <div
      id="logo-navBar"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        justifyContent:"space-between",
        alignItems: "center",
      }}
    >
      <img src="/src/assets/logo.svg" alt="logo" />
      <FaBars style={{ width: "5vw", height: "5vw" }} />
    </div>
  ) : (
    <div
      id="logo-navBar"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        alignItems: "start",
      }}
    >
      <img src="/src/assets/logo.svg" alt="logo" />
      <NavBar />
    </div>
  );
};
const LogoNavBarBottom = () => {

  return (
    <div
      id="logo-navBar"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent:"center",
        alignItems: "center",
      }}
    >
      <img src="/src/assets/logo.svg" alt="logo" />
      <NavBar />
    </div>
  );
};

export {LogoNavBarTop,LogoNavBarBottom};
