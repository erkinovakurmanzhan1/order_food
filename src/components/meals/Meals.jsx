import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/system";
import React, { memo, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styledComponent from "styled-components";
import { getMeals } from "../../store/meals/mealsSlice";
import MealItem from "./meal-item/MealItem";

const Meals = () => {
  const dispatch = useDispatch();
  const { meals, error, isLoading } = useSelector((state) => state.meals);
  const [sortDirection, setSortDirection] = useState("");

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  const sortedMeals = useMemo(() => {
    const notSorted = [...meals];

    return notSorted.sort((a, b) => {
      if (sortDirection === "ASC") {
        return a.price - b.price;
      }
      return b.price - a.price;
    });
  }, [sortDirection,meals]);

  return (
    <Card>
      {isLoading || error ? null : (
        <FormControl sx={{ m: 2, minWidth: 130 }} size="small">
          <StyledLabel
            sx={{ color: "#5A1F08", fonSize: "16px" }}
            id="demo-select-small"
          >
            Meals
          </StyledLabel>
          <StyledSelect
            value={sortDirection}
            label="meals"
            onChange={(e) => setSortDirection(e.target.value)}
          >
            <MenuItem value="">
              <b>none</b>
            </MenuItem>
            <MenuItem value="ASC">cheaper</MenuItem>
            <MenuItem value="DESC">more expensive</MenuItem>
          </StyledSelect>
        </FormControl>
      )}

      {isLoading && !error && <p>loading ...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {sortedMeals.map((meal) => {
        return <MealItem meal={meal} key={meal._id} />;
      })}
    </Card>
  );
};

export default memo(Meals);

const StyledSelect = styled(Select)(() => ({
  "&": {
    width: "230px",
    padding: "10px",
    color: "#5A1F08",
    fontSize:'22px'
  },
}));
const StyledLabel = styled(InputLabel)(() => ({
  "&": {
    textColor: "white",
  },
}));

const Card = styledComponent.div`
  padding: 40px 40px 36px 40px;
  background: #ffffff;
  border-radius: 16px;
  width: 75%;
  margin: 40px auto;
`;
