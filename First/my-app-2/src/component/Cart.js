import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/loading.css'

class Cart extends Component {
    render() {
        return (
            <div className='container'>
                <Link to='/'>
                    <button className='btn btn-outline-secondary'>Back</button>
                </Link>
                <br/>
                <h2>{this.props.user}'s CART</h2>
                <span>Total: {this.props.total}</span>
                {this.props.list.length > 0 ?
                    <div>
                        <table className='table' style={{ margin: 50 }}>
                            <thead>
                                <tr>
                                    <td>No</td>
                                    <td>Name</td>
                                    <td>Price</td>
                                    <td>Quantity</td>
                                    <td>Delete</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.list.map(item => {
                                    return <Item check='cart' key={item.id} item={item} />
                                })}
                            </tbody>
                        </table>
                        {this.props.paying ?
                            <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                            :
                            <button onClick={this.props.onPay.bind(this)}>Pay</button>}
                    </div>
                    : <h3 style={{ margin: 50 }}>Empty Cart</h3>}

            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            list: state.list_item,
            total: state.total,
            paying: state.isPaying,
            user: state.user
        }
    },
    (dispatch) => {
        return {
            onPay: () => dispatch({type:'PAYING'})
        }
    }
)(Cart);