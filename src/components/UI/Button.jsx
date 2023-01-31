import React from "react";
import styled from "styled-components";

const Button = ({
  children,
  variant = "contained",
  borderStyle = "rounded",
  ...rest
}) => {
  return (
    <StyledButton {...rest} borderStyle={borderStyle} variant={variant}>
      {children}{" "}
    </StyledButton>
  );
};

export default Button;

const getBackgroundColor = (props) => {
  return props.variant === "contained" ? "#8a2b06" : "white";
};
const getBorder = (props) => {
  return props.variant === "contained" ? "none" : "1px solid #8a2b06";
};

const getColor = (props) => {
  return props.variant === "contained" ? "white" : "#8a2b06";
};
const getBorderRadius = (props) => {
  return props.borderStyle === "rounded" ? "20px" : "6px";
};

const StyledButton = styled.button`
  background: ${getBackgroundColor};
  border-radius: ${getBorderRadius};
  padding: 10px 32px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${getColor};
  border: ${getBorder};
  cursor: pointer;
  &:hover {
    path {
      stroke: #ffff;
    }
    background: #7e2a0a;
    color: white;
  }

  :active {
    background-color: #993108;
  }
`;
