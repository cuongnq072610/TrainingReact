import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Menu from './Menu';
import Store from '../store/Store';
import Cart from './Cart';
import Login from './LoginApp';
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Route exact path='/' component={Menu} />
        <Route path='/Cart' component={Cart} />
        <Route path='/Login' component={Login} />
      </Provider>
    );
  }
}

export default App;
