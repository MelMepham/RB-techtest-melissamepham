const fs = require('fs')
const basePriceObj = require('./basePriceObj.js')

module.exports = {
  calculator: calculator
}

function calculator(base, cart) {
  let basePrice = basePriceObj.priceObject(base)
  findMatch(basePrice, cart)
}

function findMatch(base, cart) {
  let = itemToFind = []
  cart.forEach(items => {
    let itemName = items['product-type']
    let itemSize = items.options.size
    let itemColour = items.options.colour
    let itemFind = (itemSize + (itemColour ? itemColour : ''))
    let basePrice = base[itemName][itemFind]
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
  items.forEach((productCost, i) => {
    let artistMarkup = cart[i]['artist-markup'] / 100
    individualPrice.push((productCost + Math.round(artistMarkup)) * cart[i].quantity)
    var totalArray = individualPrice.reduce(add, 0)
    console.log(totalArray)
    return totalArray
  })
}
