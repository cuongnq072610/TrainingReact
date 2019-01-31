import React, { Component } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';
class TodoList extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Todo</td>
                            <td>Remove</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Render item */}
                        {this.props.todos.map(todo => {
                            return <Todo todoItem={todo}
                                key={todo.id}
                                onHandleRemove={this.props.onHandleRemove} />
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

//Validate type of Props
TodoList.protoType = {
    //Protypes of array
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    )
}

export default TodoList;