import React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MealCard from "./MealCard";
import "./css/Meal.css";
import { useState } from "react";

//Request Url for API Gateway
const registerUrl1 =
  "https://cozqsw9158.execute-api.us-east-2.amazonaws.com/dev/user";

const Meal = () => {
  const [mealDetails, setMeal] = useState({
    user_ID: "",
    meal1Monday: "0",
    meal1Tuesday: "0",
    meal1Wednesday: "0",
    meal1Thursday: "0",
    meal1Friday: "0",
    meal2Monday: "0",
    meal2Tuesday: "0",
    meal2Wednesday: "0",
    meal2Thursday: "0",
    meal2Friday: "0",
    meal3Monday: "0",
    meal3Tuesday: "0",
    meal3Wednesday: "0",
    meal3Thursday: "0",
    meal3Friday: "0",
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

    //createMeal
    const requestBody1 = {
      meal_ID: "Meal 1",
      user_ID: mealDetails.user_ID,
      monday: parseInt(mealDetails.meal1Monday),
      tuesday: parseInt(mealDetails.meal1Tuesday),
      wednesday: parseInt(mealDetails.meal1Wednesday),
      thursday: parseInt(mealDetails.meal1Thursday),
      friday: parseInt(mealDetails.meal1Friday),
    };

    axios.post(registerUrl1, requestBody1).then((response) => {
      console.log(response);
      console.log(response.data);
    });

    const requestBody2 = {
      meal_ID: "Meal 2",
      user_ID: mealDetails.user_ID,
      monday: parseInt(mealDetails.meal2Monday),
      tuesday: parseInt(mealDetails.meal2Tuesday),
      wednesday: parseInt(mealDetails.meal2Wednesday),
      thursday: parseInt(mealDetails.meal2Thursday),
      friday: parseInt(mealDetails.meal2Friday),
    };

    axios.post(registerUrl1, requestBody2).then((response) => {
      console.log(response);
      console.log(response.data);
    });

    const requestBody3 = {
      meal_ID: "Meal 3",
      user_ID: mealDetails.user_ID,
      monday: parseInt(mealDetails.meal3Monday),
      tuesday: parseInt(mealDetails.meal3Tuesday),
      wednesday: parseInt(mealDetails.meal3Wednesday),
      thursday: parseInt(mealDetails.meal3Thursday),
      friday: parseInt(mealDetails.meal3Friday),
    };

    axios.post(registerUrl1, requestBody3).then((response) => {
      console.log(response);
      console.log(response.data);
    });

    toast.success("Success", { position: toast.POSITION.TOP_CENTER });
  };

  return (
    <div className="page">
      <div className="mealPostings">
        <div className="meal1">
          <MealCard
            title="Meal 1"
            firstItem="Hamburger"
            secondItem="Apple"
            drink="Orange Juice"
          />
        </div>
        <div className="meal2">
          <MealCard
            title="Meal 2"
            firstItem="Pizza"
            secondItem="Orange"
            drink="Apple Juice"
          />
        </div>
        <div className="meal3">
          <MealCard
            title="Meal 3"
            firstItem="Chicken Tenders"
            secondItem="Mango"
            drink="Passionfruit Juice"
          />
        </div>
      </div>
      <div className="userIDdiv">
        <input
          className="UserID"
          type="text"
          name="user_ID"
          placeholder="User ID"
          onChange={handleChange}
        ></input>
      </div>
      <div className="weekly">
        <Table striped bordered hover variant="dark" className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Meal 1</td>
              <td>
                <input
                  type="number"
                  min="0"
                  name="meal1Monday"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  name="meal1Tuesday"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  name="meal1Wednesday"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  name="meal1Thursday"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  name="meal1Friday"
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Meal 2</td>
              <td>
                <input
                  type="number"
                  min="0"
                  name="meal2Monday"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  name="meal2Tuesday"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  name="meal2Wednesday"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  name="meal2Thursday"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  name="meal2Friday"
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Meal 3</td>
              <td>
                <input
                  type="number"
                  min="0"
                  name="meal3Monday"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  name="meal3Tuesday"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  name="meal3Wednesday"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  name="meal3Thursday"
                  onChange={handleChange}
                ></input>
              </td>
              <td>
                <input
                  type="number"
                  min="0"
                  name="meal3Friday"
                  onChange={handleChange}
                ></input>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="buttons">
          <form onSubmit={handleSubmit}>
            <button type="submit" className="buttonfx">
              Submit
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Meal;
