let fs = require('fs')

module.exports = {
  calculator: calculator
}

function calculator (base, cart) {
  let priceObject = {}
      base.filter((item, i) => {
        item['product-type'] === ['product-type']
        return priceObject[item['product-type']] = {}
        })
        optionsObjFunc(base, cart, priceObject)
        console.log(priceObject)
}

function optionsFunc(base, cart, priceObject) {
  for (i = 0; i < base.length; i ++) {
    console.log(base[i].options.colour)

  }

}


function optionsObjFunc(base, cart, optionsObj) {
  base.filter((item, i) => {
    if (item['product-type'] === 'hoodie') {
      console.log(optionsObj.hoodie[item['base-price']] = ('hoodie' + item.options.colour + item.options.size))
    } else if (item['product-type'] === 'sticker') {
      console.log(optionsObj.sticker[item['base-price']] = ('sticker' + item.options.size[0]))
    } else if (item['product-type'] === 'leggings'){
      console.log(optionsObj.leggings[item['base-price']] = ('leggings'))

    }

    // console.log(item.options.colour[0])
    }
  )
}
