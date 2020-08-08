import React, { Component } from "react";
import './App.css';

class AddTodos extends Component {
  render() {
    return (
      <React.Fragment>
        <form onSubmit={event => this.props.handleSubmit(event)}>
          <label>
            Add TODO:
            <input
              type="text"
              value={this.props.value}
              placeholder="Enter the Todo"
              onChange={event => this.props.handleChange(event)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default AddTodos;
