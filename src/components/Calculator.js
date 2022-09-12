import React, { Component } from 'react';
import '../styles/Calculator.scss';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculator extends Component {
  render() {
    return (
      <div id="calculator">
        <div id="result">0</div>
        <div id="allClear">AC</div>
        <div id="switchSign">+/-</div>
        <div id="percent">%</div>
        <div id="divide" className="operation">÷</div>
        <div id="btn7">7</div>
        <div id="btn8">8</div>
        <div id="btn9">9</div>
        <div id="times" className="operation">x</div>
        <div id="btn6">6</div>
        <div id="btn5">5</div>
        <div id="btn4">4</div>
        <div id="minus" className="operation">-</div>
        <div id="btn3">3</div>
        <div id="btn2">2</div>
        <div id="btn1">1</div>
        <div id="plus" className="operation">+</div>
        <div id="btn0">0</div>
        <div id="dot">.</div>
        <div id="equals" className="operation">=</div>
      </div>
    );
  }
}
