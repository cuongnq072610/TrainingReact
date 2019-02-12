import React, { Component } from 'react';
import Board from './Board';
import Field from './Field';
class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      number: ''
    }
    this.changeField = this.changeField.bind(this);
  }

  changeField(number){
    if(this.state.number.length===0 && number===0 ){
      return
    } else {
      this.setState({
        number: this.state.number.concat(number)
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Field value={this.state.number}/>
        <Board onChangeField={this.changeField}/>
      </div>
    );
  }
}

export default App;
