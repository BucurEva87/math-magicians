import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Button from '../components/Button';
import buttons from '../components/buttons';

describe('Calculator interface buttons', () => {
  buttons.forEach((button) => {
    const { id, text } = button;

    test(`${id} button renders on the screen`, () => {
      const { getByTestId } = render(<Button id={id} handleClick={() => {}}>{text}</Button>);

      expect(getByTestId(id)).toBeInTheDocument();
    });
  });

  buttons.forEach((button) => {
    const { id, text } = button;

    test(`${id} button to have ${text} text`, () => {
      const { getByTestId } = render(<Button id={id} handleClick={() => {}}>{text}</Button>);

      expect(getByTestId(id)).toHaveTextContent(text);
    });
  });

  buttons.forEach((button) => {
    const { id, text, className } = button;

    if (!className) return;

    test(`${id} button to have ${className} className`, () => {
      const { getByTestId } = render(
        <Button id={id} handleClick={() => {}} className={className}>{text}</Button>,
      );

      expect(getByTestId(id)).toHaveClass(className);
    });
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Button id="btn4" handleClick={() => {}}>4</Button>);

    expect(tree).toMatchSnapshot();
  });
});
