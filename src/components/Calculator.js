import React, { PureComponent } from 'react';
import Display from './Display';
import Button from './Button';
import '../styles/Calculator.scss';
import calculate from '../logic/calculate';

export default class Calculator extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      display: '0',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const buttonName = e.target.textContent;

    this.setState((prevState) => ({ ...calculate(prevState, buttonName) }), this.displayOnScreen);
  }

  displayOnScreen() {
    const { total, next } = this.state;

    if (!next && !total) this.setState({ display: '0' });
    else this.setState({ display: next ?? total });
  }

  render() {
    const { display } = this.state;

    return (
      <div id="calculator">
        <Display>{display}</Display>
        <Button id="allClear" handleClick={this.handleClick}>AC</Button>
        <Button id="switchSign" handleClick={this.handleClick}>+/-</Button>
        <Button id="percent" handleClick={this.handleClick}>%</Button>
        <Button id="Buttonide" handleClick={this.handleClick} className="operation">÷</Button>
        <Button id="btn7" handleClick={this.handleClick}>7</Button>
        <Button id="btn8" handleClick={this.handleClick}>8</Button>
        <Button id="btn9" handleClick={this.handleClick}>9</Button>
        <Button id="times" handleClick={this.handleClick} className="operation">x</Button>
        <Button id="btn6" handleClick={this.handleClick}>6</Button>
        <Button id="btn5" handleClick={this.handleClick}>5</Button>
        <Button id="btn4" handleClick={this.handleClick}>4</Button>
        <Button id="minus" handleClick={this.handleClick} className="operation">-</Button>
        <Button id="btn3" handleClick={this.handleClick}>3</Button>
        <Button id="btn2" handleClick={this.handleClick}>2</Button>
        <Button id="btn1" handleClick={this.handleClick}>1</Button>
        <Button id="plus" handleClick={this.handleClick} className="operation">+</Button>
        <Button id="btn0" handleClick={this.handleClick}>0</Button>
        <Button id="dot" handleClick={this.handleClick}>.</Button>
        <Button id="equals" handleClick={this.handleClick} className="operation">=</Button>
      </div>
    );
  }
}
