import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
        </ul>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;
