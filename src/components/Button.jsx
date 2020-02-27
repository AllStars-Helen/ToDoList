import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 125px;
  height: 42px;
  padding: 10px;
  border-radius: 4px;
  background: steelblue;
  color: #ffffff;
  cursor: pointer;
  border: 2px solid steelblue;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font: bold 14px "Indie Flower";
`;

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ButtonStyle
        type="button"
        onClick={() => {
          this.props.SubmitFunction(this.state.onSubmitTask);
        }}
      >
        {this.props.Text}
      </ButtonStyle>
    );
  }
}
