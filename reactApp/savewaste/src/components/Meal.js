import React from "react";
import MealCard from "./MealCard";
import "./css/Meal.css";
import { useState } from "react";

const Meal = () => {
  const [mealDetails, setMeal] = useState({
    meal1: "",
    meal2: "",
    meal3: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMeal((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mealDetails.meal1);
    console.log(mealDetails.meal2);
    console.log(mealDetails.meal3);
  };

  return (
    <div className="page">
      <div className="subPage">
        <div className="meal1">
          <MealCard
            title="Meal 1"
            firstItem="Hamburger"
            secondItem="Apple"
            drink="Orange Juice"
          />
          <input type="number" min="0" name="meal1" onChange={handleChange} />
        </div>
        <div className="meal2">
          <MealCard
            title="Meal 2"
            firstItem="Pizza"
            secondItem="Orange"
            drink="Apple Juice"
          />
          <input type="number" min="0" name="meal2" onChange={handleChange} />
        </div>
        <div className="meal3">
          <MealCard
            title="Meal 3"
            firstItem="Chicken Tenders"
            secondItem="Mango"
            drink="Passionfruit Juice"
          />
          <input type="number" min="0" name="meal3" onChange={handleChange} />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <button type="submit" name="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Meal;
