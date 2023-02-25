import { AppBar, Box, CardHeader } from "@mui/material";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styledComponent from "styled-components";
// import { getTheme } from "../../lib/constants/theme";
import { getBasket } from "../../store/basket/basketSlice";
import { uiSLiceActions } from "../../store/ui/uiSlice";
import ButtonMui from "../UI/ButtonMui";
import BasketButton from "./BasketButton";

const Header = ({ onShowBasket }) => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.basket);

  const themeMode = useSelector((state) => state.ui.themeMode);
  console.log(themeMode);
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

  const themeChangeHandler = () => {
    const theme = themeMode === "light" ? "dark" : "light";
    dispatch(uiSLiceActions.changeTheme(theme));
  };

  return (
    <>
      <Container>
        <Logo>ReactMeals</Logo>
        <BasketButton
          className={animationClass}
          onClick={onShowBasket}
          count={calculateTotalAmount()}
        />
        <ThemeBtnStyled
          onClick={themeChangeHandler}
          className={animationClass}
          count={calculateTotalAmount}
        >
          {themeMode === "light" ? "🌙 " : " ☀️"}
        </ThemeBtnStyled>
      </Container>
    </>
  );
};

export default Header;

const ThemeBtnStyled = styled(ButtonMui)(({ theme }) => ({
  "&": {
    background: theme.palette.primary.dark,
    width: "100px",
    height: "50px",
  },
}));

const Container = styled(AppBar)(({ theme }) => ({
  "&": {
    background: theme.palette.primary.dark,
    width: "100%",
    height: " 101px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "120px",
    paddingRight: "120px",

  },
}));

const Logo = styledComponent.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #ffffff;
  margin: 0;
`;
