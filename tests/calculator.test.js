const calculator = require('../calculator')

// test('can add two values together', function () {
//   const cart = {"percent": 4, "value":5}
//   // const base = null
//   const total = calculator.input(cart)
//   expect(total).toBe(console.log("you have 9 products in your cart"))
// })



test('test markup with percentage', function () {
  const cart = [
    {
      "product-type": "hoodie",
      "options": {
        "size": "small",
        "colour": "white",
        "print-location": "front"
      },
      "artist-markup": 20,
      "quantity": 1
    }
  ]
  const base = [
    {
      "product-type": "hoodie",
      "options": {
        "colour": ["white", "dark"],
        "size": ["small", "medium"]
      },
      "base-price": 3800
    }
  ]
  const total = calculator.calculator(cart, base)
  expect(total).toBe(4560)
})
