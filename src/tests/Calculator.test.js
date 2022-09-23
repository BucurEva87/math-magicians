import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';
import buttons from '../components/buttons';

let getByTestId;
let display;
let btn0;
let btn4;
let divide;
let times;
let plus;
let minus;
let equals;
let switchSign;
let dot;

beforeEach(() => {
  const calculator = render(<Calculator />);

  getByTestId = calculator.getByTestId;
  display = getByTestId('display');
  btn0 = getByTestId('btn0');
  btn4 = getByTestId('btn4');
  divide = getByTestId('divide');
  times = getByTestId('times');
  plus = getByTestId('plus');
  minus = getByTestId('minus');
  equals = getByTestId('equals');
  switchSign = getByTestId('switchSign');
  dot = getByTestId('dot');
});

describe('Calculator', () => {
  test('renders on the screen', () => {
    expect(getByTestId('calculator')).toBeInTheDocument();
  });

  test('buttons clicks update the display', () => {
    buttons.forEach((button) => {
      const { id, text } = button;

      if (!/\d/.test(id)) return;

      expect(display).toHaveTextContent('0');

      fireEvent.click(getByTestId(id));

      expect(display).toHaveTextContent(text);

      fireEvent.click(getByTestId('allClear'));
    });
  });

  test('pressing two numerical buttons in a row correctly update the display', () => {
    const btn9 = getByTestId('btn9');

    expect(display).toHaveTextContent('0');

    fireEvent.click(btn4);
    fireEvent.click(btn9);

    expect(display).toHaveTextContent('49');
  });

  test('pressing +/- button switches signs when display has other value than 0', () => {
    expect(display).toHaveTextContent('0');

    fireEvent.click(btn4);

    expect(display).toHaveTextContent('4');

    fireEvent.click(switchSign);

    expect(display).toHaveTextContent('-4');
  });

  test('pressing +/- button does not switch signs when display has a value of 0', () => {
    expect(display).toHaveTextContent('0');

    fireEvent.click(switchSign);

    expect(display).toHaveTextContent('0');
  });

  test('pressing +/- button twice does not switch the sign', () => {
    expect(display).toHaveTextContent('0');

    fireEvent.click(btn4);

    expect(display).toHaveTextContent('4');

    fireEvent.click(switchSign);
    fireEvent.click(switchSign);

    expect(display).toHaveTextContent('4');
  });

  test('pressing the dot button adds a decimal sign at the end of the display', () => {
    expect(display).toHaveTextContent('0');

    fireEvent.click(dot);

    expect(display).toHaveTextContent('0.');
  });

  test('pressing the dot button multiple times adds a single decimal sign at the end of the display', () => {
    expect(display).toHaveTextContent('0');

    for (let i = 0; i < 5; i += 1) fireEvent.click(dot);

    expect(display).toHaveTextContent('0.');
  });

  test('pressing the 0 button has no impact if the displayed value is already 0', () => {
    expect(display).toHaveTextContent('0');

    fireEvent.click(btn0);

    expect(display).toHaveTextContent('0');
  });

  test('trying to divide by zero returns a math violation inside the display', () => {
    expect(display).toHaveTextContent('0');

    fireEvent.click(btn4);

    expect(display).toHaveTextContent('4');

    fireEvent.click(divide);

    expect(display).toHaveTextContent('4');

    fireEvent.click(btn0);

    expect(display).toHaveTextContent('0');

    fireEvent.click(equals);

    expect(display).toHaveTextContent('Can\'t divide by 0.');
  });

  test('pressing divide button correctly divides the two operands', () => {
    expect(display).toHaveTextContent('0');

    fireEvent.click(btn4);
    fireEvent.click(btn0);

    expect(display).toHaveTextContent('40');

    fireEvent.click(divide);
    fireEvent.click(btn4);
    fireEvent.click(equals);

    expect(display).toHaveTextContent('10');
  });

  test('pressing times button correctly multiplies the two operands', () => {
    expect(display).toHaveTextContent('0');

    fireEvent.click(btn4);

    expect(display).toHaveTextContent('4');

    fireEvent.click(times);
    fireEvent.click(btn4);
    fireEvent.click(equals);

    expect(display).toHaveTextContent('16');
  });

  test('pressing times button correctly multiplies two operands of negative signs', () => {
    expect(display).toHaveTextContent('0');

    fireEvent.click(btn4);
    fireEvent.click(switchSign);

    expect(display).toHaveTextContent('-4');

    fireEvent.click(times);
    fireEvent.click(btn4);
    fireEvent.click(switchSign);
    fireEvent.click(equals);

    expect(display).toHaveTextContent('16');
  });

  test('pressing times button correctly multiplies two operands of mixed signs', () => {
    expect(display).toHaveTextContent('0');

    fireEvent.click(btn4);
    fireEvent.click(switchSign);

    expect(display).toHaveTextContent('-4');

    fireEvent.click(times);
    fireEvent.click(btn4);
    fireEvent.click(equals);

    expect(display).toHaveTextContent('-16');
  });

  test('pressing plus button correctly adds the two operands', () => {
    expect(display).toHaveTextContent('0');

    fireEvent.click(btn4);

    expect(display).toHaveTextContent('4');

    fireEvent.click(plus);
    fireEvent.click(btn4);
    fireEvent.click(equals);

    expect(display).toHaveTextContent('8');
  });

  test('pressing minus button correctly subtracts the second operand from the first', () => {
    expect(display).toHaveTextContent('0');

    fireEvent.click(btn0);
    fireEvent.click(minus);
    fireEvent.click(btn4);
    fireEvent.click(equals);

    expect(display).toHaveTextContent('-4');
  });

  test('executing multiple operations in a row works correctly', () => {
    const btn7 = getByTestId('btn7');
    const btn3 = getByTestId('btn3');

    expect(display).toHaveTextContent('0');

    fireEvent.click(btn7);
    fireEvent.click(times);
    fireEvent.click(btn3);
    fireEvent.click(equals);

    expect(display).toHaveTextContent('21');

    fireEvent.click(divide);
    fireEvent.click(btn4);
    fireEvent.click(equals);

    expect(display).toHaveTextContent('5.25');
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
