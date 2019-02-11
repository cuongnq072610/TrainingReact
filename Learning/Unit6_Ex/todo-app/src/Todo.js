import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div>
                <li>{this.props.todo.text}</li>
            </div>
        );
    }
}

export default Todo;