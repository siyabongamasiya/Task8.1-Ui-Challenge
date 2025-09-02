type navBarProps = {};

const NavBar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          
          gap: "10px",
        }}
      >
        <p>about</p>
        <p>careers</p>
        <p>Events</p>
        <p>Products</p>
        <p>Support</p>
      </div>
    </>
  );
};

export default NavBar;
