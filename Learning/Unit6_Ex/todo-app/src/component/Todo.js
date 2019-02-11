import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CheckDone } from '../actions/Action';
class Todo extends Component {
    HandleClick(){
        this.props.onHandleClick(this.props.todo.id)
    }
        render() {
            return (
                <div>
                    <li style={{color:'red'}}>{this.props.todo.text}  -   <button onClick={this.HandleClick.bind(this)}>Done</button></li>
                </div>
            );
        }
    }

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleClick: (id) => dispatch(CheckDone(id))
    }
}

export default connect(null, mapDispatchToProps)(Todo);