import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class LoginApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            error: false
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        // Authenticate login user
        if (this.refs.user.value === 'cuongnq' && this.refs.pass.value === '1') {
            this.setState({
                isLogin: !this.state.isLogin,
                error: false
            })
        } else {
            this.setState({
                error: !this.state.error
            })
        }
    }

    render() {
        const { isLogin, error } = this.state
        return (
            <div>
                {/* Show error msg when wrong user */}
                {error ? <h4>Wrong User</h4> : ""}
                {/* Check if login or not
                    If login redirect to Home */}
                {!isLogin ?
                    <div>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            User:
                            <input type='text' placeholder='Username' ref='user' required />
                            <br />
                            Pass:
                            <input type='password' placeholder='Password' ref='pass' required />
                            <br />
                            <input type='submit' value='Login' />
                        </form>
                        <br />
                    </div> : <Redirect to='/Home' />}
            </div>
        )
    }
}

export default LoginApp;