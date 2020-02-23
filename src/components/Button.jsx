import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 125px;
  padding: 10px 15px;
  border-radius: 4px;
  background: violet;
  color: #ffffff;
  cursor: pointer;
`;

const Button = ({ children }) => <ButtonStyle> {children} </ButtonStyle>;

export default Button;
