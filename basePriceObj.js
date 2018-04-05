const fs = require('fs')

module.exports = {
  priceObject,
  fillObjects,
  combineTwo,
  combineOne,
  noOptions
}

function priceObject(data) {
  const output = data
  .reduce((typesWithPrices, base) => {
    typesWithPrices[base['product-type']] = typesWithPrices[base['product-type']] || [];
    return typesWithPrices
  }, {})
  fillObjects(data, output)
  const hoodie = output.hoodie.reduce((hoodieObject, value) => {
    return {...hoodieObject, ...value}
  }, {})
  const sticker = output.sticker.reduce((stickerObject, value) => {
    return {...stickerObject, ...value}
  }, {})
  const leggings = output.leggings.reduce((leggingsObject, value) => {
    return {...leggingsObject, ...value}
  }, {})

  output.hoodie = hoodie
  output.sticker = sticker
  output.leggings = leggings

return output
}

function fillObjects(data, object) {
  let options = data['options']
  let obj = object
  data.forEach(item => {
    let colour = item.options.colour
    let size = item.options.size
    let price = item['base-price']
    if (Object.keys(item.options).length === 2){
      let arr = combineTwo(data, price, size, colour)
      obj.hoodie.push(arr)
    } else if (Object.keys(item.options).length === 1){
      let arr = combineOne(data, price, size)
      obj.sticker.push(arr)
    } else {
      let arr = noOptions(data, price)
      obj.leggings.push(arr)
    }
  })
}

function combineTwo(data, basePrice, array1, array2) {
  let priceObjectHoodie = {}
    array1.forEach((element1) => {
      array2.forEach((element2) => {
        priceObjectHoodie[element1 + element2] = basePrice
      })
    })
    return priceObjectHoodie
}

function combineOne(data, basePrice, array1) {
  let priceObjectSticker = {}
    array1.forEach((element1) => {
        priceObjectSticker[element1] = basePrice;
      })
    return priceObjectSticker
}

function noOptions(data, basePrice) {
  let priceObjectSticker = {}
        priceObjectSticker[""] = basePrice;
    return priceObjectSticker
}
