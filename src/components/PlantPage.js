import React, { useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const[plants, setPlants] = React.useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((p) => console.log(p));
  }, [])

  return (
    <div className="plant-page">
      <NewPlantForm />
      <Search />
      <PlantList />
    </div>
  );
}

export default PlantPage;
