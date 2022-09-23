import calculate from '../logic/calculate';

describe('Calculate logic methods', () => {
  test('pressing the AC button returns an object with all properties set to null', () => {
    const obj = { total: null, next: null, operation: null };
    expect(calculate(obj, 'AC')).toEqual({ total: null, next: null, operation: null });
  });

  test('pressing 0 when next is 0 returns an empty object', () => {
    const obj = { total: null, next: '0', operation: null };
    expect(calculate(obj, '0')).toEqual({});
  });

  test('when operation is not null and next is not 0 next + button should be returned as new next', () => {
    const obj = { total: null, next: '1', operation: '+' };
    expect(calculate(obj, '4')).toEqual({ total: null, next: '14', operation: '+' });
  });

  test('when operation is not null and next is 0 button should be returned as new next', () => {
    const obj = { total: null, next: '0', operation: '+' };
    expect(calculate(obj, '4')).toEqual({ total: null, next: '4', operation: '+' });
  });

  test('when operation is null and next is not 0 next + button should be returned as new next', () => {
    const obj = { total: null, next: '1', operation: null };
    expect(calculate(obj, '4')).toEqual({ total: null, next: '14' });
  });

  test('when operation is null and next is 0 button should be returned as new next', () => {
    const obj = { total: null, next: '0', operation: null };
    expect(calculate(obj, '4')).toEqual({ total: null, next: '4' });
  });

  test('when equals is pressed and there is a next and an operation returns an object with the result of operation', () => {
    const obj = { total: '13', next: '4', operation: 'x' };
    expect(calculate(obj, '=')).toEqual({ total: '52', next: null, operation: null });
  });

  test('when equals is pressed and there either is no next or no operation returns an empty object', () => {
    const obj = { total: '13', next: null, operation: 'x' };
    expect(calculate(obj, '=')).toEqual({});
  });

  test('when +/- is pressed, if there is a next, returns next * -1', () => {
    const obj = { next: '-13' };
    expect(calculate(obj, '+/-')).toEqual({ next: '13' });
  });

  test('when +/- is pressed, if there is a total (but not a next), returns total * -1', () => {
    const obj = { total: '13' };
    expect(calculate(obj, '+/-')).toEqual({ total: '-13' });
  });

  test('when +/- is pressed, if there is no next and no total, returns an empty object', () => {
    const obj = { total: null, next: null };
    expect(calculate(obj, '+/-')).toEqual({});
  });

  test('when button is an operation, but there are no next and total, returns an empty object', () => {
    const obj = { total: null, next: null };
    expect(calculate(obj, 'x')).toEqual({});
  });

  test('when an operation button is pressed and there is an existing operation returns the same object with the new operation', () => {
    const obj = { total: '13', next: null, operation: 'x' };
    expect(calculate(obj, '+')).toEqual({ total: '13', next: null, operation: '+' });
  });
});
