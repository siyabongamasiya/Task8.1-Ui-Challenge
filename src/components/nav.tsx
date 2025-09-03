import useViewportWidth from "./customHooks";


const NavBar= () => {
  const width = useViewportWidth()
  const dir = width < 1300 ? "column" : "row"
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: dir,
          color: "hsl(0, 0%, 100%)",
          fontFamily:"Atala,sans-serif",
          gap: "10px",
        }}
      >
        <p>About</p>
        <p>Careers</p>
        <p>Events</p>
        <p>Products</p>
        <p>Support</p>
      </div>
    </>
  );
};

export default NavBar;
