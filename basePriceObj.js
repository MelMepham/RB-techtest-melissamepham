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
  simplifyingObjects(output)
  console.log(output)
return output
}

function simplifyingObjects(output) {
  var name = ['hoodie', 'sticker', 'leggings']
  name.forEach((item, i) => {
    output[item] = output[item].reduce((object, value) => {
      return {...object, ...value}
    },{})
  })
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
