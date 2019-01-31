import React, { Component } from 'react';
import LoginApp from './LoginApp'
import Home from './Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LoginApp}/>
          <Route path='/Home' component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
