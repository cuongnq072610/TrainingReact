import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

class List extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.list ?
                        this.props.list.map((item,index) => {
                            return <Todo key={index} todo={item} />
                        }):''}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.todos
    }
}

export default connect(mapStateToProps)(List);