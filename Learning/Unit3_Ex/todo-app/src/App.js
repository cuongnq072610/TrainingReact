import React, { Component } from 'react';
import TodoList from './TodoList';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, name: 'Todo1' },
        { id: 2, name: 'Todo4' },
        { id: 3, name: 'Todo3' },
        { id: 4, name: 'Todo2' },
      ]
    }
    this.onHandleRemove = this.onHandleRemove.bind(this);//Bind event to component
  }

  //Function remove item
  onHandleRemove(id) {
    var newTodos = this.state.todos.filter(item => {
      return item.id !== id
    })
    //Set new state for todos
    this.setState({
      todos: newTodos
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.todos.length > 0 ?
          <TodoList todos={this.state.todos} onHandleRemove={this.onHandleRemove} /> :
          <div>Empty List</div>
        }
      </div>
    );
  }
}

export default App;
