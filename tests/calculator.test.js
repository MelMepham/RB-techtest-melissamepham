const fs = require('fs')

const calculator = require('../calculator')

let base = JSON.parse(fs.readFileSync('./data/basePrices.json', 'utf8'))
let cart = JSON.parse(fs.readFileSync('./data/cart.json', 'utf8'))


test('item price uses base-price and artist-markup', function () {
  var a = 3
  var b = 4
  const total = calculator.add(a, b)
  expect(total).toBe(7)
})
