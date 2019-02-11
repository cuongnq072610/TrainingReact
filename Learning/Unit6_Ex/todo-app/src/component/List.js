import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import Done from './Done';
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
                <hr/>
                <ul>
                    {this.props.done ?
                        this.props.done.map((item,index) => {
                            return <Done key={index} todo={item} />
                        }):''}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.todos,
        done: state.done
    }
}

export default connect(mapStateToProps)(List);