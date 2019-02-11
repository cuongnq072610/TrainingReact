import React, { Component } from 'react';

class Done extends Component {
    render() {
        return (
            <div>
                <li style={{color: 'green'}}>{this.props.todo.text}</li>
            </div>
        );
    }
}

export default Done;