const { add, substract } = require('../index');

test('Add two numbers', () => {
  const number1 = 1;
  const number2 = 2;
  const result = add(number1, number2);
  expect(result).toBe(3);
});

test('Substract two numbers', () => {
  const number1 = 1;
  const number2 = 2;
  const result = substract(number1, number2);
  expect(result).toBe(-1);
});
