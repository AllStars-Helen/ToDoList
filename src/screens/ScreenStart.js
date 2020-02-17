import React from 'react';
import styled from "styled-components";
import Button from '../components/Button'
import Header from '../containers/Header'
import Footer from '../containers/Footer'

const StyledStartScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh
`;

function Start () {
  return (
    <StyledStartScreen id="startScreenWrap">
      <span>Hello!</span>
      <Header />
      <Button text="Let's Start!"/>
      <Footer />
    </StyledStartScreen>
  )
}

export default Start;