import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        return (
            <div style={{display: "flex"}}>
                
                <input type='checkbox' onChange={this.props.checkOff.bind(this, this.props.todo.id)} />{' '}
                { this.props.todo.task }
               
            </div>
        )
    }
}
