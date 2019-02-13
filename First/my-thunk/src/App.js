import React, { Component } from 'react';
import Login from './Login';
import Home from './Home';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Route exact path='/' component={Login} />
          <Route path='/home' component={Home} />
        </div>
      </Provider>
    );
  }
}

export default App;
