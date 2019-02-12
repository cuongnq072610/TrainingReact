import React, { Component } from 'react';

class Number extends Component {
    handleOnClick() {
        console.log(this.props.i)
        this.props.onClickHandle(this.props.i)
    }
    render() {
        return (
            <button onClick={this.handleOnClick.bind(this)}>{this.props.i}</button>
        );
    }
}

export default Number;