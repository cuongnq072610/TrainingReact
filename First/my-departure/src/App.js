import React, { Component } from 'react';
import Dashboard from './Dashboard'
import {connect } from 'react-redux'

class App extends Component {
  render() {
    const {user, flight, forecast} = this.props
    return (
      <div className="App">
        <Dashboard 
        username={user.username} 
        flight={flight.flight} 
        forecast={forecast.forecast}
        loading={this.props.loadDashboard}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      user: state.user,
      flight: state.flight,
      forecast: state.forecast
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      loadDashboard: () => (dispatch({ type: 'LOAD_DASHBOARD' }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
