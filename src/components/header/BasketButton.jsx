import React from "react";
import styled from "styled-components";
import { ReactComponent as BasketIcon } from "../../assets/icons/basket-icon.svg";

const BasketButton = ({ count ,...rest}) => {
  return (
    <BasketButtonSTyled {...rest} >
      <BasketIcon />
      <StyledTitle>Your cart</StyledTitle>
      <StyledCount id="counter">{count || 0}</StyledCount>
    </BasketButtonSTyled>
  );
};

export default BasketButton;

const BasketButtonSTyled = styled.button`
background: #5A1F08;
  border-radius: 20px;
  padding: 10px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffff;
  display: flex;
  align-items: center;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #2c0f08;
  }

  &:hover > #counter {
    background-color: #5f1c0b;
  }
`;

const StyledTitle = styled.span`
  margin-left: 12px;
  margin-right: 24px;
`;
const StyledCount = styled.span`
  background: #8a2b06;
  border-radius: 30px;
  padding: 4px 20px;
  font-weight: 700;
  font-size: 20p;
  line-height: 27px;
  color: #fff;
`;
