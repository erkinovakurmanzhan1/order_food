import React from "react";
import styledComponent from "styled-components";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";
import ButtonMui from "../UI/ButtonMui";
import { styled } from "@mui/system";

const BasketButton = ({ count, ...rest }) => {
  return (
    <StyledBasketButton {...rest}>
      <AddShoppingCartTwoToneIcon />
      <StyledTitle>Your cart</StyledTitle>
      <StyledCount id="counter">{count || 0}</StyledCount>
    </StyledBasketButton>
  );
};

export default BasketButton;

const StyledBasketButton = styled(ButtonMui)(() => ({
  "&": {
    background: "#5A1F08",
  },
  "&:hover": {
    background: "#2c0f08",
  },
  "&:hover > #counter": {
    background: "#5f1c0b",
  },
  borderRadius: "20px",
  padding: "10px 32px",
  fontWeight: "600",
  fontSize: "16px",
  lineHeight: "24px",
  textColor: "#ffff",
  border: "none",
  cursor: "pointer",
}));



const StyledTitle = styledComponent.span`
  margin-left: 12px;
  margin-right: 24px;
`;
const StyledCount = styledComponent.span`
  background: #8a2b06;
  border-radius: 30px;
  padding: 4px 20px;
  font-weight: 700;
  font-size: 20p;
  line-height: 27px;
  color: #fff;
`;
