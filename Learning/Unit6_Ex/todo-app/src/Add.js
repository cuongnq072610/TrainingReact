import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddTodo } from './Action';
 
class Add extends Component {
    HandleSubmit(e){
        e.preventDefault();
        this.props.onHandleSubmit(this.refs.name.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.HandleSubmit.bind(this)}>
                    Add Todo:
                    <input type='text' ref='name' placeholder='Todo'/>
                    <input type='submit' value='Add'/>
                </form>
            </div>
        );
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        onHandleSubmit: (text) => dispatch(AddTodo(text))
    }
}

export default connect(null,mapDispatchToProp)(Add);