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

  // test('reducting the code into one object per product-type', function () {
  //     let data = Object.keys(basePrices)
  //     const reduceObject = objectCreation.simplifyingObjects(data)
  //     expect(reduceObject).toBe(base)
  //   })

  test('reducting the code into one object per product-type 2 option', function () {
      let data = basePrices
        let price = data[0]['base-price']
        let size = data[0].options.size
        let colour = data[0].options.colour
        const expected = {"mediumdark": 3800, "mediumwhite": 3800, "smalldark": 3800, "smallwhite": 3800}
        const reduceObject = objectCreation.combineTwo(data, price, size, colour)
        expect(reduceObject).toEqual(expected)
    })

    test('reducting the code into one object per product-type 1 option', function () {
        let data = basePrices
          let price = data[5]['base-price']
          let size = data[5].options.size
          const expected = {"small": 221}
          const reduceObject = objectCreation.combineOne(data, price, size)
          expect(reduceObject).toEqual(expected)
      })

      test('reducting the code into one object per product-type no options', function () {
          let data = basePrices
            let price = data[9]['base-price']
            const expected = {"": 5000}
            const reduceObject = objectCreation.combineWithNoOptions(data, price)
            expect(reduceObject).toEqual(expected)
        })
