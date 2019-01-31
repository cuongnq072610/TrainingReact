import React, { Component } from 'react';
import './Button.css';
class ButtonC extends Component {
    onHandelClick(index){
        index = this.props.index;
        this.props.handleOnClick(index);
    }
    componentWillMount(){
        console.log('Will')
    }
    componentDidMount(){
        console.log('Did')
    }
    componentDidUpdate(){
        console.log('Update')
    }
    render() {
        return (
            <button onClick={this.onHandelClick.bind(this)}>{this.props.value}</button>
        );
    }
}

export default ButtonC;