import React from "react";
import styled from "styled-components";
import Task from "../components/Task";
import TaskCreator from "../components/TaskCreator";
import Title from "../components/Title";
import VerticalBorder from "../components/VerticalBorder";

const StyledCreateScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  height: 100vh;
  padding: 10% 15px;
  & * {
    box-sizing: border-box;
  }
`;

const TaskList = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 15px 15px 15px 55px;
  width: 100%;
  max-width: 738px;
  min-height: 250px;
  box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.15);
  position: relative;
  margin-top: 40px;
  font-family: "Indie Flower";
  background-image: repeating-linear-gradient(
    white 0px,
    white 24px,
    steelblue 25px
  );
  &:after,
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #eee;
    border: 1px solid #eee;
    border-radius: 4px;
    box-shadow: 2px 1px 1px rgba(0, 0, 0, 0.15);
  }
  :after {
    left: 8px;
    top: 8px;
    z-index: -2;
  }
  &:before {
    left: 4px;
    top: 4px;
    z-index: -1;
  }
  li {
    line-height: 25px;
    font-size: 1.5em;
    &.new {
      color: green;
      text-shadow: 1px 1px 1px #00ff00;
    }
    &.undone {
      color: #000;
      text-shadow: none;
      transition: color 1s ease-out 0.3s, text-shadow 2s ease-out 0.3s;
    }
    &.done {
      color: #999;
      text-decoration: line-through;
    }
  }
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
      createdTask.status = "undone";
      this.setState({
        ...this.state,
        tasks: this.state.tasks
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

  setTaskStatus = id => {
    if (id) {
      const currentTask = this.state.tasks.find(task => task.id === id);
      if (currentTask) {
        currentTask.status = "undone" ? "done" : "undone";
        this.setState({
          ...this.state,
          tasks: this.state.tasks
        });
      }
    }
  };

  render() {
    return (
      <StyledCreateScreen id="CreateListWrap">
        <TaskList>
          <VerticalBorder></VerticalBorder>
          <Title>You have {this.state.tasks.length} active tasks</Title>
          <ol>
            {this.state.tasks ? (
              this.state.tasks.map(task => (
                <li key={task.id} className={task.status}>
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
        </TaskList>
        <TaskCreator createTask={this.createTask} />
      </StyledCreateScreen>
    );
  }
}

export default List;
