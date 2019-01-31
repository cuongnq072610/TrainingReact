import React, { Component } from 'react';
import FormInput from './FormInput';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'Unidentified User',
            age: ''
        }
        this.onHandleUpdateData = this.onHandleUpdateData.bind(this);
    }

    onHandleUpdateData(user,age){
        this.setState({
            user: user,
            age: age
        })
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <div>THIS IS CONTACT PAGE</div>
                <div>Hello {this.state.user}</div>
                <FormInput onHandleUpdateData={this.onHandleUpdateData}/>
            </div>
        );
    }
}

export default Contact;