import React from 'react';
import styled from 'styled-components';
import logo from './../logo.svg';

const Title = styled.title`
  display: block;
  font-size: 24px;
  color: white;
`;

const Header = () => (
    <div>
        <img src={logo} className="App-logo" alt="logo" />
        <Title>ToDo List that you've never met!</Title>
    </div>
)

export default Header;