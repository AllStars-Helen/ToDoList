import React from "react";
import Checkbox from "../components/Checkbox";
import propTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 50px;
`;

export default class Task extends React.Component {
  constructor() {
    super();
    this.state = {
      controlsIsShown: false
    };
  }

  toggleControls = () => {
    this.setState({
      ...this.state,
      controlsIsShown: !this.state.controlsIsShown
    });
  };

  render() {
    const { name, id, status } = this.props;
    return (
      <Wrapper>
        <label>{name}</label>
        <Checkbox setTaskStatus={this.setTaskStatus}></Checkbox>
      </Wrapper>
    );
  }
}

Task.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  status: propTypes.oneOf(["new", "done", "undone", "pending"]).isRequired
};

Task.defaultProps = {
  name: "New task",
  status: "new"
};
