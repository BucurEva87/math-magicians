import React, { useState, useEffect } from 'react';
import Display from './Display';
import Button from './Button';
import '../styles/Calculator.scss';
import calculate from '../logic/calculate';
import buttons from './buttons';

const Calculator = () => {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const { total, next } = data;

    if (!next && !total) setDisplay('0');
    else setDisplay(next ?? total);
  }, [data]);

  const handleClick = (e) => {
    const buttonName = e.target.textContent;

    setData((prevState) => ({ ...calculate(prevState, buttonName) }));
  };

  return (
    <div id="calculator">
      <Display>{display}</Display>

      {buttons.map((b) => (
        <Button key={b.id} id={b.id} handleClick={handleClick} className={b.className ?? ''}>
          {b.text}
        </Button>
      ))}
    </div>
  );
};

export default Calculator;
