import React, { Component } from "react";

class AddTodos extends Component {
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.handleSubmit}>
          <label>
            Add TODO:
            <input
              type="text"
              value={this.props.value}
              placeholder="Enter the Todo"
              onChange={this.props.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default AddTodos;
