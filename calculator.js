const fs = require('fs')
const basePriceObj = require('./basePriceObj.js')

module.exports = {
  calculator: calculator,
  findMatch: findMatch,
  add: add,
  totalCart: totalCart


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
}

function add(a, b) {
    return a + b;
}

function totalCart(items, cart) {
  var individualPrice = []
  var totalArray = []
  items.forEach((productCost, i) => {
    let artistMarkup = cart[i]['artist-markup'] / 100
    individualPrice.push((productCost + Math.round(artistMarkup)) * cart[i].quantity)
    totalArray = individualPrice.reduce(add, 0)
    return totalArray
  })
  console.log(totalArray)
}
