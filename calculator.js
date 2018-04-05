const fs = require('fs')
const basePriceObj = require('./basePriceObj.js')

module.exports = {
  calculator,
  findMatch,
  totalCart
}

function calculator(base, cart) {
  let basePrice = basePriceObj.priceObject(base)
  findMatch(basePrice, cart)
}

function findMatch(base, cart) {
  let itemToFind = []
  cart.forEach(items => {
    let itemName = items['product-type']
    let itemSize = items.options.size
    let itemColour = items.options.colour
    let itemFind = ((itemSize ? itemSize : '') + (itemColour ? itemColour : ''))
    let basePrice = (base[itemName][itemFind] ? base[itemName][itemFind] : '')
    itemToFind.push(base[itemName][itemFind])
    cartPrice = base[itemName][itemFind]
  })
  totalCart(itemToFind, cart)
  return itemToFind
}

function totalCart(items, cart) {
  var add = (a, b) => a + b;
  var individualPrice = []
  items.forEach((productCost, i) => {
    let artistMarkup = (cart[i]['artist-markup'] / 100) * productCost
    individualPrice.push((productCost + Math.round(artistMarkup)) * cart[i].quantity)
  })
  let totalArray = individualPrice.reduce(add, 0)
  console.log(totalArray)
  return totalArray
}
