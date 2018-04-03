var fs = require('fs')

module.exports = {
  calculator,
  artistMarkup
}

function calculator(cart, base) {

  artistMarkup(cart, base)
  console.log()
}

function artistMarkup(cart, base) {
  console.log("artistMarkup")
  let basePrice = base[0]['base-price']
  let artistMarkup = cart[0]['artist-markup']
  return (
    basePrice / 100 * artistMarkup + basePrice
  )
}
