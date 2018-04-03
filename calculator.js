var fs = require('fs')

module.exports = {
  calculator,
  itemPrice
}

function calculator(cart, base) {
  for (i = 0; i < base.length; i++) {
    if (cart[i]['product-type'] === base[i]['product-type'] || cart[i].options == base[i].options) {
      let basePrice = base[i]['base-price']
      let artistMarkup = cart[i]['artist-markup']
      let quantity = cart[i].quantity
      itemPrice(basePrice, artistMarkup, quantity)
      break;
     }
  }
}

function itemPrice(basePrice, artistMarkup, quantity) {
  console.log("itemPrice")
  console.log((basePrice / 100 * artistMarkup + basePrice) * quantity)
  return (
    (basePrice / 100 * artistMarkup + basePrice) * quantity
  )
}
