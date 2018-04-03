const calculator = require('../calculator')

test('two numbers equal the same thing', function () {
  const cart = 4
  const base = 5
  const total = calculator.input()

  expect(total).toBe(console.log("you have 9 products in your cart"))
})
