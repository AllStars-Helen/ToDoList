import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
  width: 125px;
  padding: 10px 15px;
  border-radius: 4px;
  background: violet;
  color: #FFFFFF;
  cursor: pointer;
`;

const Button = (button) => (
  <ButtonStyle> {button.text} </ButtonStyle>
)

export default Button;