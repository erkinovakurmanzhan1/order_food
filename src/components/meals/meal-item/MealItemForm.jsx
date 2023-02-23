import React, { useState } from "react";
// import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";
import styledComponent from "styled-components";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../../store/basket/basketSlice";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import ButtonMui from "../../UI/ButtonMui";

const MealItemForm = ({ id, title, price }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  const amountChangeHandler = (event) => {
    setAmount(+event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const basketItem = {
      id,
      price,
      title,
      amount,
    };
    dispatch(addToBasket(basketItem));
  };
  return (
    <StyledForm >
      <Container>
        <label htmlFor={id}>Amount</label>
        <StyledTextfield
          onChange={amountChangeHandler}
          id={id}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
          value={amount}
        />
      </Container>
      <StyledAddButton onClick={submitHandler}>
        <AddTwoToneIcon />
        Add
      </StyledAddButton>
    </StyledForm>
  );
};

export default MealItemForm;

const StyledAddButton = styled(ButtonMui)(() => ({
  "&": {
    background: "rgba(138, 43, 6, 1)",
    border: "1px solid #7e2a0a",
    color: "#FFFF",
    borderRadius: "24px",
    width: "65%",
    padding: "9px",
    marginLeft: "3.5rem",
  },
  "&:hover": {
    border: "none",

    background: "#7e2a0a",
    color: "white",
  },
  "&:active": {
    background: "#993108",
  },
}));

const StyledTextfield = styled(TextField)(() => ({
  "&": {
    width: "70px",
  },
  "& .MuiOutlinedInput-input": {
    padding: "4px 10px",
    fontSize: "14px",
  },
}));

const Container = styledComponent.div`
  margin-bottom: 12px;
  label {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #222222;
    margin-right: 20px;
    
  }

  input {
    width: 60px;
    height: 32px;
    border: 1px solid #d6d6d6;
    border-radius: 6px;
    outline: none;
    font-size: 16px;
    text-align: center;
    line-height: 24px;
    padding: 4px 12px;
  }
`;
const StyledForm = styledComponent.form`
  display: flex;
  flex-direction: column;
`;
