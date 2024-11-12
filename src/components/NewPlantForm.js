import React, { useState } from "react";

function NewPlantForm({ addPlant }) {
  const [newPlant, setNewPlant] = useState({
    name: "",
    image: "",
    price: 0,
  });

  function onSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((r) => r.json())
      .then((p) => {
        addPlant(newPlant);
        console.log(p);
        setNewPlant({
          name: "",
          image: "",
          price: 0,
        });
      });
  }

  function handleChange(e) {
    setNewPlant({
      ...newPlant,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={newPlant.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newPlant.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={newPlant.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
