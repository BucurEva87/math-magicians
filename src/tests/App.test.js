import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import App from '../App';

let getByTestId;
let header;
let container;

beforeEach(() => {
  const component = render(<App />);

  getByTestId = component.getByTestId;

  header = getByTestId('header-header');
  container = getByTestId('container');
});

describe('App component', () => {
  test('renders Header component on screen', () => {
    expect(header).toBeInTheDocument();
  });

  test('renders Container component on screen', () => {
    expect(container).toBeInTheDocument();
  });

  test('renders Home component on screen by default', () => {
    expect(getByTestId('home-section')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<App />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
