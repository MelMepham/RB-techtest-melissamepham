const fs = require('fs')

const calculator = require('../calculator')
let basePrices = JSON.parse(fs.readFileSync('./data/basePrices.json', 'utf8'))
let cart = JSON.parse(fs.readFileSync('./data/cart.json', 'utf8'))
let testData = require('../data/testData.js');
let base = testData.newObject

test('test setup working', function () {
    expect(true).toBeTruthy()
})

test('calculator imports the base object', function () {
    const testCalculator = calculator.calculator(basePrices, cart)
    expect(testCalculator).toEqual(base)
  })


test('calculator finds base prices', function () {
    const itemToFind = calculator.findMatch(base, cart)
    expect(itemToFind).toEqual([ 4368, 5000 ])
  })


test('totalCart adds up the cart.', function () {
    let items = [ 4368, 5000 ]
    const totalArray = calculator.totalCart(items, cart)
    expect(totalArray).toBe(15984)
  })
