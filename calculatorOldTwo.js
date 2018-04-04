let fs = require('fs')

module.exports = {
  calculator,
  priceOptionsObj,
  individualItemPrice
}


function calculator (base, cart) {
  let priceObject = {}
  base.filter((item) => {
      return priceObject[item['product-type']] = {}
  })
    priceOptionsObj(base, cart, priceObject)
    console.log(priceObject)
}


function priceOptionsObj(base, cart, optionsObj) {
  base.forEach((item) => {
    const product = item['product-type']
    if (product === 'hoodie') {
      for (let i = 0; i < 3; i++) {
        return optionsObj.hoodie[('hoodie' + item.options.colour[i] + item.options.size[i])] = item['base-price']
      }
    } else if (product === 'sticker') {
        return optionsObj.sticker[('sticker' + item.options.size)] = item['base-price']
    } else if (product === 'leggings'){
        return optionsObj.leggings['leggings'] = item['base-price']
    }
  })
}

function individualItemPrice (base, cart, optionsObj) {
  let basePrice = base['base-price'];
  let artistMarkup = () => cart['artist-markup'] / 100
  let quantity = cart.quantity;

  let newTotal = basePrice + Math.round(basePrice * artistMarkup) * quantity
    return console.log(total)
}
