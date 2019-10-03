import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import { throwStatement, tsImportEqualsDeclaration } from '@babel/types';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);

    this.state = { 
      todos: []
  }}
  
  addTodo = (todo) => {
    const newTodo = {
      task: todo,
      id: Date.now(),
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})

  }
  clearCompleted = () => {
    this.setState({todos: this.state.todos.filter(todo => (
      todo.completed === false
    ))})
  }

  checkOff = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }

  render() {
    console.log(this.state.todos)
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted}/>
        <TodoList todos={this.state.todos} checkOff={this.checkOff}/>
      </div>
    );
  }
}

export default App;
