import React from 'react';
import styled from "styled-components";
import Button from '../components/Button'
import Header from '../containers/Header'
import Footer from '../containers/Footer'

const StyledCreateScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

function Create () {
  return (
    <StyledCreateScreen id="CreateListWrap">
      <span>Create list</span>
      <Header />
      <Button text="Create a new line"/>
      <Footer />
    </StyledCreateScreen>
  )
}

export default Create;