import React from "react";
import styled from "styled-components";
import MealItem from "./meal-item/MealItem";
const DUMMY_MEALS = [
  {
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    id: '1',
  },
  {
    title: "SusSchnitzel",
    description: "A german specialty!",
    price: 16.01,
    id: '2',
  },
  {
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    id:'3',
  },
  {
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
    id:'4',
  },
];

const Meals = () => {
  return (
    // <Card>
      <Card>
        {DUMMY_MEALS.map((meal) => {
          return <MealItem meal={meal} key={meal.id}/>
        })}
      </Card>
    // </Card>
  );
};

export default Meals;

const Card = styled.div`
padding: 40px 40px 36px 40px;
background: #FFFFFF;
border-radius: 16px;
width: 75%;
margin: 40px auto;
`
