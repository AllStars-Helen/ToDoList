import React from "react";
import styled from "styled-components";
import Button from "../components/Button";

const InputStyle = styled.input.attrs(props => ({
  type: "text"
}))`
  width: calc(100% - 125px);
  max-width: 500px;
  padding: 0 15px;
  border-radius: 4px;
  background: #fff;
  color: steelblue;
  border: 2px solid steelblue;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  font: bold 30px Caveat;
`;

class TaskCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskName: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    const value = e.target.value;
    this.setState({
      ...this.state,
      newTaskName: value
    });
  };

  onSubmitTask = () => {
    this.props.createTask(this.state.newTaskName);
    this.setState({
      ...this.state,
      newTaskName: ""
    });
  };

  render() {
    return (
      <form style={{ display: "flex", margin: "40px 0 0" }}>
        <InputStyle
          type="text"
          onChange={this.handleChange}
          value={this.state.newTaskName}
        />
        <Button
          SubmitFunction={this.onSubmitTask}
          Text="Create new task!"
        ></Button>
      </form>
    );
  }
}

export default TaskCreator;
