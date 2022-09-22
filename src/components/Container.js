import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Quote from './Quote';
import CalculatorContainer from './CalculatorContainer';
import Home from './Home';

import '../styles/Container.scss';

const Container = () => (
  <div id="container">
    <Routes>
      <Route path="/quote" element={<Quote />} />
      <Route path="/calculator" element={<CalculatorContainer />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);

export default Container;
