import React from "react";
import Button from "../../UI/Button";
import { ReactComponent as PlusIcon } from "../../../assets/icons/plus.svg";
import styled from "styled-components";

const MealItemForm = ({id}) => {
  return (
    <StyledForm>
      <Container>
        <label htmlFor={id}>Amount</label>
        <input type="number" id={id} min={1} max={5} defaultValue={1}/>
      </Container>
      <Button>
        <StyledIcon />
      Add
      </Button>
    </StyledForm>
  );
};

export default MealItemForm;
const StyledIcon = styled(PlusIcon)`
  margin-right: 10px;
  `;

const Container = styled.div`
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
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
