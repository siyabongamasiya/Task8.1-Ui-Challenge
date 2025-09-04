import deepEarth from "../assets/desktop/image-deep-earth.jpg";
import nightArcade from "../assets/desktop/image-night-arcade.jpg";
import soccerTeam from "../assets/desktop/image-soccer-team.jpg";
import grid from "../assets/desktop/image-grid.jpg";
import above from "../assets/desktop/image-from-above.jpg";
import pocketBorealis from "../assets/desktop/image-pocket-borealis.jpg";
import curiosity from "../assets/desktop/image-curiosity.jpg";
import fisheye from "../assets/desktop/image-fisheye.jpg";
import useViewportWidth from "./customHooks";

const Creations = () => {
  const width = useViewportWidth();
  const createCreations = () => {
    let creationElements = [];
    let creations = [
      { image: deepEarth, title: `Deep\nEarth` },
      { image: nightArcade, title: `Night\nArcade` },
      { image: soccerTeam, title: `Soccer\nTeam` },
      { image: grid, title: `The\nGrid` },
      { image: above, title: `From Up\nAbove` },
      { image: pocketBorealis, title: `Pocket\nBorealis` },
      { image: curiosity, title: `The\nCuriosity` },
      { image: fisheye, title: `Make It\nFisheye` },
    ];
    let count: number = 0;

    while (count <= creations.length - 1) {
      creationElements.push(
        createCreation(creations[count].image, creations[count].title)
      );
      count++;
    }

    return creationElements;
  };

  return (
    <>
      <div id="creationTitle-button">
        <p id="creationTitle">Our Creations</p>
        {width > 1300 ? <button id="seeAllButton">See All</button> : ""}
      </div>
      <div id="creationItems">{createCreations()}</div>
    </>
  );
};

const createCreation = (image: string, title: string = "title") => {
  const width = useViewportWidth();
  const height = width > 1300 ? "75vh" : "25vh";
  return (
    <div
      style={{
        height: height,
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "end",
        alignItems: `${width < 1300 ? "start" : "center"}`,
        color: "hsl(0, 0%, 80%)",
        fontSize: "2rem",
        fontFamily: "Josefin Sans  ",
      }}
      key={title}
    >
      <p
        style={{
          whiteSpace: "pre-wrap",
          width:"100%",
          background:
            "linear-gradient(to right, rgba(150, 147, 147, 0.03), rgba(199, 199, 194, 0))",
        }}
      >
        {title}
      </p>
    </div>
  );
};

//background: ;
export default Creations;
