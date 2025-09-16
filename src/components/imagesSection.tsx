import vrImage from "../assets/desktop/image-interactive.jpg"

const ImageSection = () => {
  return (
    <>
      <div id="imagesSection">
        <img
          id="vr-image"
          src={vrImage}
          alt="interactive"
        />
        <div id="imageSection-description-container">
          <p id="imageSection-title">
            The Leader In <br /> Interactive VR <br />
          </p>
          <p id="imageSection-description">
            Founded in 2011,Loopstudios has been producing world-class <br />
            Virtual reality projects for some of the best companies around the{" "}
            <br />
            globe. Our award-winning creations have transformed <br />
            businesses through digital experiences that bind to their brand.{" "}
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default ImageSection;
