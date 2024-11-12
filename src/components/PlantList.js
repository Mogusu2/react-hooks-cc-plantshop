import React from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  return (
    <ul 
    className="cards">{DataTransfer.map((plant) => <PlantCard key={plant.id} />)}</ul>
  );
}

export default PlantList;
