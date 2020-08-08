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
  }
   async fetchRequest(method,url,body) {
    const result = await fetch(url,{
      method: method,
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    return result;
  }
  complete(val) {
    const result = this.fetchRequest( 'PUT', `/api/todos/${val._id}`, {...val, completed: !val.completed} )
      result.then(data => data.json())
            .then(data => {
              this.setState({todos: this.state.todos.map((value => {
                if(value.title === val.title) {
                  return {...val, completed: !value.completed}
                } else return value;
              }))})
              return data;
            })
            .then(data => console.log(data))
  }
  deleteTodo(val) {
    const result = this.fetchRequest('DELETE', `/api/todos/${val._id}`)
        result.then(data => data.json())
              .then(data => {
                this.setState({todos: this.state.todos.filter(valu => {
                  return valu._id !== val._id;
                })})
                return data;
              })
              .then(data => console.log(data));
  }
  handleSubmit(event) {
    event.preventDefault();
    const result = this.fetchRequest( 'POST', "/api/todos", {title: this.state.value} );
    result.then(data => data.json())
          .then(data => this.setState({todos: [...this.state.todos, data], value: ""}))
          .then(data => console.log(data));
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }
  componentDidMount() {
    const response = this.fetchRequest( 'GET', "/api/todos" )
      response.then(data => data.json())
      .then(data => {
        console.log(data);
        return data;
      })
      .then(todos => this.setState({ todos }));
  }
  render() {
    const list = this.state.todos.map((val, ind) => {
      return <TodoList 
                key={ind} 
                val={val} 
                deleteTodo={(val) => this.deleteTodo(val)}
                complete={(val) => this.complete(val)} 
            />;
    });
    return (
      <div className="todo-list">
        <AddTodos
          handleSubmit={(e) => this.handleSubmit(e)}
          handleChange={(e) => this.handleChange(e)}
          value={this.state.value}
        />
        <br />
        {list}
      </div>
    );
  }
}

export default App;
