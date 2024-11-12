import React, { useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const[plants, setPlants] = React.useState([]);
  const[search, setSearch] = React.useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((p) => console.log(p));
  }, [])

  function addPlant(newPlant) { 
    setPlants([...plants, newPlant]);
  }

  const filteredPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <div className="plant-page">
      <NewPlantForm addPlant={addPlant} />
      <Search setSearch={setSearch}  />
      <PlantList plants={filteredPlants} />
    </div>
  );
}

export default PlantPage;
