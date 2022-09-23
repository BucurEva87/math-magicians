import React from 'react';
import Calculator from './Calculator';

import style from '../styles/CalculatorContainer.module.scss';

const CalculatorContainer = () => (
  <section className={style['container-section']} data-testid="calculatorContainer-section">
    <h1 data-testid="calculatorContainer-h1">Let&apos;s do some math!</h1>
    <Calculator />
  </section>
);

export default CalculatorContainer;
