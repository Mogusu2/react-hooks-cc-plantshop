import React, { useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [])

  return (
    <div className="plant-page">
      <Search />
      <NewPlantForm />
      <PlantList />
    </div>
  );
}

export default PlantPage;
