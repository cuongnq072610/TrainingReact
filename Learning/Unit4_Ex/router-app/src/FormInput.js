import React, { Component } from 'react';

class FormInput extends Component {
    handleSubmit(event) {
        event.preventDefault();
        var user = this.refs.user.value;
        var age = this.refs.age.value;
        this.props.onHandleUpdateData(user, age)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    user:
                    <input type='text' ref='user' /><br />
                    age:
                    <input type='text' ref='age' /><br />
                    <input type='submit' value='Login' />
                </form>
            </div>
        );
    }
}

export default FormInput;