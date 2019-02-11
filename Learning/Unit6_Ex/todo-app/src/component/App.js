import React, { Component } from 'react';
import Add from './Add';
import List from './List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Add />
        <List />
      </div>
    );
  }
}

export default App;
