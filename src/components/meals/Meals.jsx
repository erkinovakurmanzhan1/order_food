import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchApi } from "../../fetchApi";
import { getMeals } from "../../store/meals/mealsReducer";
import MealItem from "./meal-item/MealItem";

const Meals = () => {
  const dispatch = useDispatch();
  const { meals, error, isLoading } = useSelector((state) => state.meals);
  // const [meals, setMeals] = useState([]);
  // const [error, setError] = useState("");
  // const [isLoading,setLoading]=useState(true)

  // const getMeals = async () => {
  //   try {
  //     setLoading(true)
  //     const response = await fetchApi("foods");
  //     setMeals(response.data);
  //     setLoading(false)
  //   } catch (error) {
  //     console.log(error);
  //     setError("Failed to load meals");
  //   }
  // };

  useEffect(() => {
    dispatch(getMeals());
  }, []);

  return (
    <Card>
      {isLoading && !error && <p>loading ...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {meals.map((meal) => {
        return <MealItem meal={meal} key={meal._id} />;
      })}
    </Card>
  );
};

export default Meals;

const Card = styled.div`
  padding: 40px 40px 36px 40px;
  background: #ffffff;
  border-radius: 16px;
  width: 75%;
  margin: 40px auto;
`;
