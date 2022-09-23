import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

let getByTestId;

beforeEach(() => {
  const component = render(<Router><Header /></Router>);
  getByTestId = component.getByTestId;
});

describe('Header component', () => {
  test('renders on the screen', () => {
    expect(getByTestId('header-header')).toBeInTheDocument();
  });

  test('renders logo element on the screen', () => {
    expect(getByTestId('header-logo')).toBeInTheDocument();
  });

  test('renders logo span element on the screen', () => {
    expect(getByTestId('header-logo-span')).toBeInTheDocument();
  });

  test('renders logo span element with correct text on the screen', () => {
    expect(getByTestId('header-logo-span')).toHaveTextContent('Math Magicians');
  });

  test('renders nav element on the screen', () => {
    expect(getByTestId('header-nav')).toBeInTheDocument();
  });

  test('renders nav ul element on the screen', () => {
    expect(getByTestId('header-nav-ul')).toBeInTheDocument();
  });

  test('renders nav ul li first element on the screen', () => {
    expect(getByTestId('header-li-1')).toBeInTheDocument();
  });

  test('renders nav ul li first element with correct link text on the screen', () => {
    expect(getByTestId('header-li-1')).toHaveTextContent('Home');
  });

  test('renders nav ul li second element on the screen', () => {
    expect(getByTestId('header-li-2')).toBeInTheDocument();
  });

  test('renders nav ul li second element with correct link text on the screen', () => {
    expect(getByTestId('header-li-2')).toHaveTextContent('Calculator');
  });

  test('renders nav ul li third element on the screen', () => {
    expect(getByTestId('header-li-3')).toBeInTheDocument();
  });

  test('renders nav ul li third element with correct link text on the screen', () => {
    expect(getByTestId('header-li-3')).toHaveTextContent('Quote');
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Router><Header /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
