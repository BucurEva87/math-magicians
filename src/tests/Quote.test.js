import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

let getByTestId;

beforeEach(() => {
  const component = render(<Quote />);
  getByTestId = component.getByTestId;
});

describe('Quote component', () => {
  test('render on screen', () => {
    expect(getByTestId('quote')).toBeInTheDocument();
  });

  test('renders article element on the page', () => {
    expect(getByTestId('quote-article')).toBeInTheDocument();
  });

  test('renders blockquote element on the page', () => {
    expect(getByTestId('quote-blockquote')).toBeInTheDocument();
  });

  test('renders paragraph element on the page', () => {
    expect(getByTestId('quote-p')).toBeInTheDocument();
  });

  test('renders em element on the page', () => {
    expect(getByTestId('quote-em')).toBeInTheDocument();
  });

  test('renders footer element on the page', () => {
    expect(getByTestId('quote-footer')).toBeInTheDocument();
  });

  test('renders em element containg a quote', () => {
    expect(getByTestId('quote-em')).toHaveTextContent(
      'Mathematics is not about numbers, equations, computations or algorithms. It is about understanding.',
    );
  });

  test('renders footer element containg the author', () => {
    expect(getByTestId('quote-footer')).toHaveTextContent('William Paul Thurstone');
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
