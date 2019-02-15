import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem } from '../action/Action';
class Item extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.price}</td>
                {this.props.check === 'cart' ?
                    <td>{this.props.item.quantity}</td>
                    :
                    <td>
                        <button onClick={(e) => {
                            this.props.handleAdd(this.props.item)
                        }} className='btn btn-primary' disabled={!this.props.isLogin}>Add</button>
                    </td>
                }
                {this.props.check === 'cart' ?
                    <td>
                        <button onClick={(e) => {
                            this.props.handleDelete(this.props.item)
                        }} className='btn btn-primary'>Delete</button>
                    </td>
                    :
                    <td></td>
                }
            </tr>
        );
    }
}

export default connect(
    null,
    (dispatch) => {
        return {
            handleAdd: (item) => dispatch(addItem(item)),
            handleDelete: (item) => dispatch(deleteItem(item))
        }
    }
)(Item);