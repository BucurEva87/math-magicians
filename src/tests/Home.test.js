import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

let getByTestId;

beforeEach(() => {
  const component = render(<Home />);
  getByTestId = component.getByTestId;
});

describe('Home component', () => {
  test('renders on the screen', () => {
    expect(getByTestId('home-section')).toBeInTheDocument();
  });

  test('renders h1 element on the page', () => {
    expect(getByTestId('home-h1')).toBeInTheDocument();
  });
  test('renders first paragraph element on the page', () => {
    expect(getByTestId('home-p-first')).toBeInTheDocument();
  });
  test('renders second paragraph on the page', () => {
    expect(getByTestId('home-p-second')).toBeInTheDocument();
  });
  test('renders h1 element containg the title', () => {
    expect(getByTestId('home-h1')).toHaveTextContent('Welcome to our page!');
  });
  test('renders first paragraph element containg a text', () => {
    expect(getByTestId('home-p-first')).not.toHaveTextContent('');
  });
  test('renders second paragraph element containg a text', () => {
    expect(getByTestId('home-p-second')).not.toHaveTextContent('');
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
