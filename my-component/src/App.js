import React, { Component } from 'react';
import ReactTable from 'react-table'
import "react-table/react-table.css";
import { Button } from 'reactstrap'
import Modal from './Modal'

const data = [{
  name: 'Roy Agasthyan',
  age: 26
}, {
  name: 'Sam Thomason',
  age: 22
}, {
  name: 'Michael Jackson',
  age: 36
}, {
  name: 'Samuel Roy',
  age: 1
}, {
  name: 'Rima Soy',
  age: 2
}, {
  name: 'Suzi Eliamma',
  age: 3
}, {
  name: 'Roy Agasthyan',
  age: 4
}, {
  name: 'Sam Thomason',
  age: 8
}, {
  name: 'Michael Jackson',
  age: 6
}, {
  name: 'Samuel Roy',
  age: 5
}, {
  name: 'Rima Soy',
  age: 8
}, {
  name: 'Suzi Eliamma',
  age: 9
}];

const columns = [{
  Header: 'Name',
  accessor: 'name'
}, {
  Header: 'Age',
  accessor: 'age'
}]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle() {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="App">
        <Button onClick={this.handleToggle}>Open</Button>
        <Modal show={this.state.show} handleToggle={this.handleToggle}/>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={3}
          pageSizeOptions={[3, 6]}
        />
      </div>
    );
  }
}

export default App;
