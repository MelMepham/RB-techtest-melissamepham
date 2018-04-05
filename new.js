let fs = require('fs')

const base = JSON.parse(fs.readFileSync('./data/basePrices.json', 'utf8'))

function getPriceObject (data) {
  return data.reduce(extractProductWithPrice, {})
}

function extractProductWithPrice (priceObject, item) {
  if (!priceObject.hasOwnProperty(item['product-type'])) {
    priceObject[item['product-type']] = []
  }
  return priceObject
}

function buildKey (item) {
  return [
    item['product-type'],
    ...Object.values(item.options)
  ]
    .join(',')
}

console.log(getPriceObject(base))
