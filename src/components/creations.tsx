const Creations = () => {
  const createCreations = () => {
    let creations = [];
    let count: number = 0;

    while (count <= 8) {
      creations.push(createCreation("", `${count}`));
      count++;
    }

    return creations; 
  };

  return (
    <>
      <div>
        <p>Our Creations</p>
        <button>See All</button>
      </div>
      <div>{createCreations()}</div>
    </>
  );
};

const createCreation = (image: string, title: string = "title") => {
  return (
    <div key={title}>
      <p>{title}</p>
    </div>
  );
};


export default Creations;
