const fs = require('fs')
const objectCreation = require('../basePriceObj')

let basePrices = JSON.parse(fs.readFileSync('./data/basePrices.json', 'utf8'))
let cart = JSON.parse(fs.readFileSync('./data/cart.json', 'utf8'))
let testData = require('../data/testData.js');
let base = testData.newObject

test('test setup working', function () {
  expect(true).toBeTruthy()
})

test('output gives final result', function () {
    let data = basePrices
    const outputObjects = objectCreation.priceObject(data)
    expect(outputObjects).toEqual(base)

    const expectedKeyLength = 12
    expect(Object.keys(outputObjects['hoodie']).length).toEqual(expectedKeyLength)

})

test('fillObjects fills the initial Object', function () {
    let data = basePrices
    let object = { hoodie: [], sticker: [], leggings: [] }
    const fillObject = objectCreation.fillObjects(data, object)
    const expectedKeys = ['hoodie', 'sticker', 'leggings']
    expectedKeys.forEach(key => expect(fillObject.hasOwnProperty(key)).toBeTruthy())

    const hoodieLength = 5
    expect(fillObject['hoodie']).toHaveLength(hoodieLength)
  })
