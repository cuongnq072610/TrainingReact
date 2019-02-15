import React, { Component } from 'react';
import Item from './Item';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../action/Action'

class Menu extends Component {
    render() {
        var { isLogin } = this.props
        return (
            <div className='container'>
                {isLogin ?
                    <div>
                        <Link to='/Cart'>
                            <button className='btn btn-outline-secondary'>Cart</button>
                        </Link>
                        <button className='btn btn-outline-secondary'
                            onClick={this.props.handleLogout}>Logout</button>
                            <span style={{float:'right'}}>Hello, {this.props.user}</span>
                    </div>
                    :
                    <Link to='/Login'>
                        <button className='btn btn-outline-secondary'>Login</button>
                    </Link>
                }
                <h2>Simple Shopping Page</h2>
                <table className='table' style={{ margin: 50 }}>
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Add</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leftList.map(item => {
                            return <Item key={item.id} item={item} isLogin={this.props.isLogin} />
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            leftList: state.left_item,
            isLogin: state.isLogin,
            user: state.user
        }
    },
    (dispatch) => {
        return {
            handleLogout: () => dispatch(logout())
        }
    }
)(Menu);