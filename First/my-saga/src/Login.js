import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
        this.inputId = React.createRef();
        this.inputPass = React.createRef();
    }

    handleOnSubmit(e) {
        e.preventDefault();
        this.setState({
            isLogin: true
        })
    }

    render() {
        let { isLogin } = this.state
        console.log(isLogin)
        return (
            <div>
                {isLogin ?
                    <Redirect to='/home' />
                    :
                    <div>
                        <h3>LOGIN FORM</h3>
                        <form onSubmit={this.handleOnSubmit.bind(this)}>
                            Username: <input type='text' ref={this.inputId} placeholder='username' /><br />
                            Password: <input type='password' ref={this.inputPass} placeholder='password' /><br />
                            <button>Login</button>
                        </form>
                    </div>
                }
            </div>
        );
    }
}

export default Login;