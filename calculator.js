const fs = require('fs')
const basePriceObj = require('./basePriceObj.js')

module.exports = {
  calculator: calculator
}

function calculator(base, cart) {
  let basePrice = basePriceObj.priceObject(base)
  findMatch(basePrice, cart)
}

function findMatch(base, item) {
  let = itemToFind = []
  let itemName = item[0]['product-type']
  let itemSize = item[0].options.size
  let itemColour = item[0].options.colour
  let itemFind = (itemSize + itemColour)
  let basePrice = base[itemName][itemFind]

  item.forEach(items => {
    itemToFind.push(base[itemName][itemFind])
    cartPrice = base[itemName][itemFind]
  })
  totalCart(itemToFind)
  console.log(itemToFind)
  // return itemToFind
}

// function totalCart() {
//   let artistMarkup () => cart['artist-markup'] * 100
//   let totalArr = []
//
//   totalArr.push(Math.round((basePrice + Math.round(basePrice * artistMarkup) * quantity))
//
// }
