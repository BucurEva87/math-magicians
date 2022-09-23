import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Display from '../components/Display';

describe('Claculator interface display', () => {
  test('is render on the screan', () => {
    const { getByTestId } = render(<Display>0</Display>);

    expect(getByTestId('display')).toBeInTheDocument();
  });

  test('is render on the screan', () => {
    const { getByTestId } = render(<Display>0</Display>);

    expect(getByTestId('display')).toHaveTextContent('0');
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Display>0</Display>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
