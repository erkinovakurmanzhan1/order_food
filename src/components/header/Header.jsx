import React from "react";
import styled from "styled-components";
import BasketButton from "./BasketButton";
// import { ReactComponent as BasketIcon } from "../../assets/icons/basket-icon.svg";

const Header = () => {
  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketButton></BasketButton>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: #8A2B06;
  width: 100%;
  height: 101px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 120px;
  padding-right: 120px;
`;
const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;
`;
