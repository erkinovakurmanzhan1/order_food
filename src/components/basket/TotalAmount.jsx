import { styled } from "@mui/system";
import React from "react";
import styledComponent from "styled-components";
import ButtonMui from "../UI/ButtonMui";

const TotalAmount = ({ price, onClose, onOrder }) => {
  const orderButton = price > 0 && (
    <StyledOrderButtons onClick={onOrder}>Order</StyledOrderButtons>
  );

  const fixedPrice = price.toFixed(2);
  return (
    <div>
      <InfoContainer>
        <Label>Total amount</Label>
        <Price>${fixedPrice}</Price>
      </InfoContainer>
      <ActionButtonsContainer>
        <StyledCLoseButtons onClick={onClose} variant="outlined">
          Close
        </StyledCLoseButtons>
        {orderButton}
      </ActionButtonsContainer>
    </div>
  );
};

export default TotalAmount;

const StyledCLoseButtons = styled(ButtonMui)(() => ({
  "&": {
    padding: "7px 14px",
    background: "none",
    border: "1px solid #7e2a0a",
    borderRadius: "20px",
    color: "#7e2a0a",

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
const StyledOrderButtons = styled(ButtonMui)(() => ({
  "&": {
    background: "#7e2a0a",
    border: "2px solid #7e2a0a",
    borderRadius: "20px",
    color: "#FFFF",
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
const Label = styledComponent.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #222222;
  margin: 0;
`;

const Price = styledComponent.p`
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #8a2b06;
  margin: 0;
`;
const InfoContainer = styledComponent.div`
    display: flex;
    justify-content: space-between;
`;

const ActionButtonsContainer = styledComponent.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 24px;
    gap: 16px;
`;
