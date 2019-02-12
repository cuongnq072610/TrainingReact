import React, { Component } from 'react';

class Operator extends Component {
    handleOnClick(){
        console.log(this.props.oper)
        this.props.onClickHandle(this.props.oper)
    }
    render() {
        return (
            <button onClick={this.handleOnClick.bind(this)}>{this.props.oper}</button>
        );
    }
}

export default Operator;