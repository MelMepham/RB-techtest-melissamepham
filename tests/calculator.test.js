const calculator = require('../calculator')

test('can add two values together', function () {
  const cart = {"percent": 4, "value":5}
  // const base = null
  const total = calculator.input(cart)
  expect(total).toBe(console.log("you have 9 products in your cart"))
})
