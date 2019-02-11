import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Cart extends Component {
    render() {
        return (
            <div className='container'>
                <Link to='/'>
                    <button className='btn btn-outline-secondary'>Back</button>
                </Link>
                {this.props.list.length > 0?
                    <table className='table' style={{margin: 50}}>
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
                    </table> : <h3 style={{margin: 50}}>Empty Cart</h3>}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            list: state.list_item
        }
    }
)(Cart);