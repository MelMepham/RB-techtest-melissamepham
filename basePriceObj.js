let fs = require('fs')

const base = JSON.parse(fs.readFileSync('./data/basePrices.json', 'utf8'))

function priceObject(data) {
  const output = data
  .reduce((typesWithPrices, base) => {
    typesWithPrices[base['product-type']] = typesWithPrices[base['product-type']] || [];
    return typesWithPrices
  }, {})
  fillObjects(data, output)
  console.log("JSON", JSON.stringify(output, null, 2))
}


function fillObjects(data, object) {
  let options = data['options'];
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
  let result = null
  let priceObjectHoodie = {}
    array1.forEach((element1) => {
      array2.forEach((element2) => {
        priceObjectHoodie[element1 + element2] = basePrice;
      });
    });
    return priceObjectHoodie
}

function combineOne(data, basePrice, array1) {
  let result = null
  let priceObjectSticker = {}
    array1.forEach((element1) => {
        priceObjectSticker[element1] = basePrice;
      });
    return priceObjectSticker
}

function noOptions(data, basePrice) {
  let result = null
  let priceObjectSticker = {}
        priceObjectSticker["one size fits all"] = basePrice;
    return priceObjectSticker
}

priceObject(base)

// function printTitles(data, object) {
//   let options = base['options'];
//   let currentResult = [];
//   console.log(object.hoodie)
//
//
//   let productName = data['product-type'];
//   let dataOptions = data.options;
//
//   if (Object.keys(base.options).length > 1){
//     for (let key in options) {
//       currentResult = combineTwo(base, productName, dataOptions);
//     }
//   } else {
//     for (let key in options) {
//       currentResult = combineOne(base, productName, dataOptions);
//     }
//   }
//   console.log("currentResult", currentResult)
//   return currentResult.map(item => item.split(' '))
// }
