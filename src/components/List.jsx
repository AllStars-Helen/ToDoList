import React, { useDebugValue } from "react";
import styled from "styled-components";
import Task from "../components/Task";
import TaskCreator from "../components/TaskCreator";

const StyledCreateScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

const tasks = [];

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      ...this.state,
      tasks: tasks
    };
  }

  createTask = name => {
    const id = this.state.tasks.length
      ? this.state.tasks[this.state.tasks.length - 1].id + 1
      : 0;
    const task = {
      name,
      id,
      status: "new"
    };
    if (name) {
      const newList = this.state.tasks.concat(task);
      this.setState({
        ...this.state,
        tasks: newList
      });
      setTimeout(() => this.changeNewStatus(task), 1000);
    }
  };

  changeNewStatus = task => {
    const createdTask = this.state.tasks.find(
      addedTask => addedTask.id === task.id
    );
    if (createdTask) {
      this.setState({
        ...this.state,
        status: "undone"
      });
    }
  };

  deleteTask = id => {
    if (id) {
      const newList = this.state.tasks.filter(task => task.id !== id);
      this.setState({
        ...this.state,
        tasks: newList
      });
    }
  };

  setTaskStatus = (id, status) => {
    if (id) {
      const currentTask = this.state.tasks.find(task => task.id === id);

      if (currentTask) {
        currentTask.status = status;

        const newList = this.state.tasks.filter(task => task.id !== id);
        newList.push(currentTask);

        this.setState({
          ...this.state,
          tasks: newList
        });
      }
    }
  };

  render() {
    return (
      <StyledCreateScreen id="CreateListWrap">
        <span>Create task</span>
        <h1>You have {this.state.tasks.length} active tasks</h1>
        <ol>
          {this.state.tasks ? (
            this.state.tasks.map(task => (
              <li
                key={task.id}
                className={`new-task ${this.props.status ? "new" : ""}`}
              >
                <Task
                  {...task}
                  deleteTask={this.deleteTask}
                  setTaskStatus={this.setTaskStatus}
                />
              </li>
            ))
          ) : (
            <p>You don't have tasks!</p>
          )}
        </ol>
        <TaskCreator createTask={this.createTask} />
      </StyledCreateScreen>
    );
  }
}

export default List;
