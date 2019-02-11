import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this)//Bind event to component
    }

    //Handle remove event from parent 
    handleRemove(){
        var id = this.props.todoItem.id
        this.props.onHandleRemove(id)
    }

    render() {
        return (
            <tr>
                <td>{this.props.todoItem.id}</td>
                <td>{this.props.todoItem.name}</td>
                <td>
                    <button onClick={this.handleRemove}>Remove</button>
                </td>
            </tr>
        );
    }
}

//Validate type of Props
Todo.propTypes = {
    todoItem: PropTypes.object.isRequired,
    onHandleRemove: PropTypes.func
}

export default Todo;