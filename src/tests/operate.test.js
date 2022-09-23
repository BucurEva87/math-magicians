import operate from '../logic/operate';

describe('Operate logic methods', () => {
  test('plus operation operates properly', () => {
    expect(operate('34', '51', '+')).toBe('85');
  });

  test('minus operation operates properly', () => {
    expect(operate('34', '51', '-')).toBe('-17');
  });

  test('times operation operates properly', () => {
    expect(operate('34', '51', 'x')).toBe('1734');
  });

  test('divide operation operates properly', () => {
    expect(operate('1024', '4', '÷')).toBe('256');
  });

  test('divide operation can not divide by zero', () => {
    expect(operate('1024', '0', '÷')).toBe('Can\'t divide by 0.');
  });

  test('modulo operation operates properly', () => {
    expect(operate('1023', '2', '%')).toBe('1');
  });

  test('modulo operation can not divide by zero', () => {
    expect(operate('1024', '0', '%')).toBe('Can\'t find modulo as can\'t divide by 0.');
  });

  test('an unknown operation will throw an error', () => {
    expect(() => operate('1024', '0', '<3')).toThrowError('Unknown operation \'<3\'');
  });
});
