import React, { Component } from 'react';
import ButtonC from './ButtonC';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [],
            xTurn: true,
            indexHis: []
        }
    }

    handleOnClick(index) {
        var newValues = this.state.values.slice();
        //Check win and already clicked
        if (this.checkWin(this.state.values) || newValues[index]) {
            return;
        }
        //Change turn
        if (this.state.xTurn) {
            newValues[index] = 'X'
        } else {
            newValues[index] = 'O'
        }
        //Add new pos to history
        var listHis = [...this.state.indexHis, index]
        this.setState({
            values: newValues,
            xTurn: !this.state.xTurn,
            indexHis: listHis
        })
    }

    renderButton(index) {
        return (
            <ButtonC value={this.state.values[index]}
                handleOnClick={this.handleOnClick.bind(this)}
                index={index} />
        );
    }

    checkWin(values) {
        //012
        if (values[0] && values[0] === values[1] && values[1] === values[2]) {
            return values[0]
        }
        //345
        if (values[3] && values[3] === values[4] && values[4] === values[5]) {
            return values[3]
        }
        //678
        if (values[6] && values[6] === values[7] && values[7] === values[8]) {
            return values[6]
        }
        //036
        if (values[0] && values[3] === values[0] && values[3] === values[6]) {
            return values[0]
        }
        //147
        if (values[1] && values[1] === values[4] && values[4] === values[7]) {
            return values[1]
        }
        //258
        if (values[2] && values[2] === values[5] && values[5] === values[8]) {
            return values[2]
        }
        //048
        if (values[0] && values[0] === values[4] && values[4] === values[8]) {
            return values[0]
        }
        //246
        if (values[2] && values[2] === values[4] && values[4] === values[6]) {
            return values[2]
        }
        return null
    }

    render() {
        return (
            <div>
                {this.checkWin(this.state.values) ?
                    <div className='status'>WIN: {this.checkWin(this.state.values)}</div>
                    : ''}
                <div className='row'>
                    {this.renderButton(0)}
                    {this.renderButton(1)}
                    {this.renderButton(2)}
                </div>
                <div className='row'>
                    {this.renderButton(3)}
                    {this.renderButton(4)}
                    {this.renderButton(5)}
                </div>
                <div className='row'>
                    {this.renderButton(6)}
                    {this.renderButton(7)}
                    {this.renderButton(8)}
                </div>
                {/* Clear */}
                <button onClick={() => {
                    this.setState({
                        values: [],
                        indexHis: []
                    })
                }} className='nav'>C</button>
                {/* Redo */}
                <button onClick={() => {
                    var newArrValues = this.state.values.slice();
                    var i = this.state.indexHis.length - 1; //Find history index
                    newArrValues[this.state.indexHis[i]] = null; //Clear step
                    //Return new history index arr
                    var newHis = this.state.indexHis.filter((item) => {
                        return item !== this.state.indexHis[i]
                    })
                    this.setState({
                        values: newArrValues,
                        indexHis: newHis
                    })
                }} className='nav'>R</button>
                <Link to='/'>Back</Link>
            </div>
        );
    }
}

export default Home;