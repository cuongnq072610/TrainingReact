import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Dashboard extends Component {
    componentDidMount() {
        this.props.loading()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>User: {this.props.username|| <span>loading...</span>}</h1>
                <h1>Flight: {this.props.flight|| <span>loading...</span>}</h1>
                <h1>Weather: {this.props.forecast|| <span>loading...</span>}</h1>
            </div>
        );
    }
}

Dashboard.propTypes = {
    user: PropTypes.string,
    flight: PropTypes.string,
    forecast: PropTypes.string,
    loading: PropTypes.func
}

export default (Dashboard);