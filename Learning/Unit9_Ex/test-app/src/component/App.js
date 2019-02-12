import React, { Component } from 'react';
import CommentBox from './CommentBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>App Component</h1>
        <CommentBox value="HelloWorld"/>
      </div>
    );
  }
}

export default App;
