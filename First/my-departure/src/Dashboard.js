import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/loading.css'
class Dashboard extends Component {
    componentDidMount() {
        this.props.loading()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>
                    User: {this.props.username ||
                        <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
                </h1>
                <h1>
                    Flight:{this.props.flight ||
                        <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
                </h1>
                <h1>
                    Weather: {this.props.forecast ||
                        <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}
                </h1>
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