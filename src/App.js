import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Container from './components/Container';

import './styles/index.scss';

export default function App() {
  return (
    <Router>
      <Header />
      <Container />
    </Router>
  );
}
