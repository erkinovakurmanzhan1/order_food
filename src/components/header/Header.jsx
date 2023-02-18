import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getBasket } from "../../store/basket/basketSlice";
import BasketButton from "./BasketButton";

const Header = ({ onShowBasket }) => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.basket);
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);

  const calculateTotalAmount = () => {
    const sum = items.reduce((s, item) => {
      return s + item.amount;
    }, 0);

    return sum;
  };

  useEffect(() => {
    setAnimationClass("bump");

    const id = setTimeout(() => {
      setAnimationClass("");
    }, 300);

    return () => {
      clearTimeout(id);
    };
  }, [items]);

  return (
    <Container>
      <Logo>ReactMeals</Logo>
      <BasketButton
        className={animationClass}
        onClick={onShowBasket}
        count={calculateTotalAmount()}
      />
    </Container>
  );
};

export default Header;

const Container = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: #8a2b06;
  width: 100%;
  height: 101px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 120px;
  padding-right: 120px;

  .bump {
    animation: bump 300ms ease-out;
  }

  @keyframes bump {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    30% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;
const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;
`;
