import React from "react";
import propTypes from "prop-types";

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
    return <div>{name}</div>;
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
