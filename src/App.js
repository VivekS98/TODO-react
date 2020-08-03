import React from "react";
import AddTodos from "./AddTodos";
import TodoList from "./TodoList";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      todos: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      value: "",
      todos: [...this.state.todos, this.state.value]
    });
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }
  componentDidMount() {
    // fetch("http://simpletodolistapi.herokuapp.com/")
    //   .then(data => data.json())
    //   .then(todos => this.setState({ todos }));
  }
  render() {
    const list = this.state.todos.map((val, ind) => {
      return <TodoList val={val} ind={ind} />;
    });
    return (
      <div className="todo-list">
        <AddTodos
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          value={this.state.value}
        />
        <br />
        {list}
      </div>
    );
  }
}

export default App;
