import React, { Component } from 'react';

class Field extends Component {
    render() {
        return (
            <div>
                <input type='text' disabled value={this.props.value}/>
            </div>
        );
    }
}

export default Field;