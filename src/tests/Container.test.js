import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from '../components/Container';

let getByTestId;

beforeEach(() => {
  const component = render(<Router><Container /></Router>);
  getByTestId = component.getByTestId;
});

describe('Container component', () => {
  test('renders on the screen', () => {
    expect(getByTestId('container')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Router><Container /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
