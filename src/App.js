//@ts-check

import React, { Component } from 'react';
import TodoList from './TodoList'
//import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm';

class App extends Component {

  constructor() {
    super();

    const todos = [
      {
        id: 1,
        title: "Hello, React!",
        desc: "React始めました",
        done: false,
      },
      {
        id: 2,
        title: "Hello, Redux!",
        desc: "Reduxも始めました",
        done: false,
      },
    ];
    
    this.state = {
      todos: todos,
      countTodo: todos.length + 1,
    };

  };

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const todos = this.state.todos.slice();
    const countTodo = this.state.countTodo;

    todos.push({
      id: countTodo,
      title: title,
      desc: desc,
      done: false,
    });

    this.setState({ todos });
    this.setState({ countTodo: countTodo + 1 });

    e.target.title.value = '';
    e.target.desc.value = '';

  }

  render() {
    return (
      <div className="App">
        <h1>todoアプリを作ってみた</h1>
        <TodoForm handleSubmit={this.handleSubmit.bind(this)} />
        <TodoList
          todos={this.state.todos}
        />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
