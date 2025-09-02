import NavBar from "./nav.tsx";
import hero from "../assets/desktop/image-hero.jpg"

const Header = () => {
  return (
    <>
      <header
        style={{
          backgroundColor:"red",
          display:"flex",
          color:"white",
          height:"50%",
          backgroundImage: `url(${hero})`,
          flexDirection:"column"
        }}
      >
        <div style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-between"
        }}>
          <img src="/src/assets/logo.svg" alt="logo" />
          <NavBar />
        </div>
        <div>Immersive Experiences That Deliver</div>
      </header>
    </>
  );
};

export default Header;
