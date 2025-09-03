const Creations = () => {
  const createCreations = () => {
    let creationElements = [];
    let creations = [
      { image: "../assets/desktop/image-deep-earth.jpg", title: "Deep Earth" },
      { image: "../assets/desktop/image-deep-earth.jpg", title: "Deep Earth" },
      { image: "../assets/desktop/image-deep-earth.jpg", title: "Deep Earth" },
      { image: "../assets/desktop/image-deep-earth.jpg", title: "Deep Earth" },
      { image: "../assets/desktop/image-deep-earth.jpg", title: "Deep Earth" },
      { image: "../assets/desktop/image-deep-earth.jpg", title: "Deep Earth" },
      { image: "../assets/desktop/image-deep-earth.jpg", title: "Deep Earth" },
      { image: "../assets/desktop/image-deep-earth.jpg", title: "Deep Earth" },
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
        <button>See All</button>
      </div>
      <div id="creationItems">{createCreations()}</div>
    </>
  );
};

const createCreation = (image: string, title: string = "title") => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} key={title}>
      <p>{title}</p>
    </div>
  );
};

export default Creations;
