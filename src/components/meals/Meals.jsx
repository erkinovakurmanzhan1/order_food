import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getMeals } from "../../store/meals/mealsSlice";
import MealItem from "./meal-item/MealItem";

const Meals = () => {
  const dispatch = useDispatch();
  const { meals, error, isLoading } = useSelector((state) => state.meals);

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

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

export default memo(Meals);

const Card = styled.div`
  padding: 40px 40px 36px 40px;
  background: #ffffff;
  border-radius: 16px;
  width: 75%;
  margin: 40px auto;
`;
