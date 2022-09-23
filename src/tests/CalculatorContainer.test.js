import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import CalculatorContainer from '../components/CalculatorContainer';

let getByTestId;

beforeEach(() => {
  const component = render(<CalculatorContainer />);
  getByTestId = component.getByTestId;
});

describe('CalculatorContainer component', () => {
  test('renders on the screen', () => {
    expect(getByTestId('calculatorContainer-section')).toBeInTheDocument();
  });

  test('renders h1 element on the screen', () => {
    expect(getByTestId('calculatorContainer-h1')).toBeInTheDocument();
  });

  test('renders Calculator component on the screen', () => {
    expect(getByTestId('calculator')).toBeInTheDocument();
  });

  test('renders h1 element with correct text content', () => {
    expect(getByTestId('calculatorContainer-h1')).toHaveTextContent('Let\'s do some math!');
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<CalculatorContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
