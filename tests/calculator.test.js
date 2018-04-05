const fs = require('fs')

const calculator = require('../calculator')

let base =  { hoodie:
            {   smallwhite: 3800,
                smalldark: 3800,
                mediumwhite: 3800,
                mediumdark: 3800,
                largewhite: 3848,
                xlwhite: 4108,
                '2xlwhite': 4108,
                '3xlwhite': 4108,
                largedark: 4212,
                xldark: 4368,
                '2xldark': 4368,
                '3xldark': 4368 },
              sticker:
            {   small: 221,
                medium: 583,
                large: 1000,
                xl: 1417 },
              leggings:
            {   '': 5000 }
          }

let cart = JSON.parse(fs.readFileSync('./data/cart.json', 'utf8'))


test('calculator finds base prices', function () {
    const itemToFind = calculator.findMatch(base, cart)
    console.log(itemToFind)
    expect(itemToFind).toEqual([ 4368, 5000 ])
  })

test('add function works', function () {
  var a = 3
  var b = 4
  const total = calculator.add(a, b)
  expect(total).toBe(7)
})
