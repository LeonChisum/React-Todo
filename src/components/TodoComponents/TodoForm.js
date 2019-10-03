import React, { Component } from 'react'

export default class TodoForm extends Component {
    state = {
        todo: ''
    }
    
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.todo)
        this.setState({todo: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text'
                           name='todo' 
                           value={this.state.todo} 
                           onChange={this.onChange} 
                           placeholder='Add Todo'/>
                    <button type='button' onClick={this.onSubmit}>Add New Todo</button>
                    <button type='button' onClick={this.props.clearCompleted}>Clear Finished Todos</button>
                </form>
            </div>
        )
    }
}
