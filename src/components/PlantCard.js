import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isClicked, setIsClicked] = useState(true);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={"https://via.placeholder.com/400"} alt={plant.name || "plant name"} />
      <h4>{plant.name || "plant name"}</h4>
      <p>Price: {plant.price || "plant price"}</p>
      {isClicked ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
