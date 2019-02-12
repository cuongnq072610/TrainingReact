import React, { Component } from 'react';
import Number from './Number';
import Operation from './Operator';
class Board extends Component {
    renderButtonNumber(i) {
        return (
            <Number i={i} onClickHandle={this.props.onChangeField}/>
        );
    }
    renderButtonOper(oper) {
        return (
            <Operation oper={oper} onClickHandle={this.props.onChangeField}/>
        );
    }

    render() {
        return (
            <div>
                <div>
                    {this.renderButtonNumber(7)}
                    {this.renderButtonNumber(8)}
                    {this.renderButtonNumber(9)}
                </div>
                <div>
                    {this.renderButtonNumber(4)}
                    {this.renderButtonNumber(5)}
                    {this.renderButtonNumber(6)}
                </div>
                <div>
                    {this.renderButtonNumber(1)}
                    {this.renderButtonNumber(2)}
                    {this.renderButtonNumber(3)}
                    {this.renderButtonNumber(0)}
                </div>
                <div>
                    {this.renderButtonOper('+')}
                    {this.renderButtonOper('-')}
                    {this.renderButtonOper('-')}
                    {this.renderButtonOper('/')}
                    {this.renderButtonOper('=')}
                </div>

            </div>
        );
    }
}

export default Board;