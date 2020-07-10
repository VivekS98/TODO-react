import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      todos: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({todos: [...this.state.todos, this.state.value], value: ''});
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    const list = this.state.todos.map((val, ind) => {
        return <li key={ind}>{val}</li>
    });
    return (
      <div className="todo-list">
        <form onSubmit={this.handleSubmit}>
          <label>
            Add TODO:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}

export default App;