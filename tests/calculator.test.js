const calculator = require('../calculator')

// test('can add two values together', function () {
//   const cart = {"percent": 4, "value":5}
//   // const base = null
//   const total = calculator.input(cart)
//   expect(total).toBe(console.log("you have 9 products in your cart"))
// })

const cart = {
  "product-type": "hoodie",
  "options": {
    "size": "small",
    "colour": "white",
    "print-location": "front"
  },
  "artist-markup": 20,
  "quantity": 1
}
const base = {
  "product-type": "hoodie",
  "options": {
    "colour": ["white", "dark"],
    "size": ["small", "medium"]
  },
  "base-price": 3800
}

test('item price uses base-price and artist-markup', function () {
  const total = calculator.individualItemPrice(base, cart)
  expect(total).toBe(console.log("1 hoodie = 4560"))
})
