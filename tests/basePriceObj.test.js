const fs = require('fs')

const objectCreation = require('../basePriceObj')

let basePrices = JSON.parse(fs.readFileSync('./data/basePrices.json', 'utf8'))
let cart = JSON.parse(fs.readFileSync('./data/cart.json', 'utf8'))
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

test('test setup working', function () {
  expect(true).toBeTruthy()
})

test('output gives final result', function () {
    let data = basePrices
    const outputObjects = objectCreation.priceObject(data)
    expect(outputObjects).toEqual(base)
})

test('fillObjects fills the initial Object', function () {
    let data = basePrices
    let object = { hoodie: [], sticker: [], leggings: [] }
    const fillObject = objectCreation.fillObjects(data, object)
    const expectedKeys = ['hoodie', 'sticker', 'leggings']
    expectedKeys.forEach(key => expect(fillObject.hasOwnProperty(key)).toBeTruthy())

    const hoodieLength = 5
    console.log(fillObject['hoodie'])
    expect(fillObject['hoodie']).toHaveLength(hoodieLength)
  })
