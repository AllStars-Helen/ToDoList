import React from "react";

class TaskCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskName: ""
    };
  }

  handleChange = e => {
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
      <form>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.newTaskName}
        />
        <button type="button" onClick={this.onSubmitTask}>
          Create
        </button>
      </form>
    );
  }
}

export default TaskCreator;
