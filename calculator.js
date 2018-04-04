var fs = require('fs')

const base = JSON.parse(fs.readFileSync('./data/basePrices.json', 'utf8'))
const cart = JSON.parse(fs.readFileSync('./data/cart.json', 'utf8'))

// module.exports = {
//   calculator,
// }
const output = base
  .reduce((typesWithPrices, base) => {
    typesWithPrices[base['product-type']] = typesWithPrices[base['product-type']] || [];
    typesWithPrices[base['product-type']].push(
      printTitles(base)
    );
    return typesWithPrices
  }, {})

  function printTitles(base) {
    let productName = base['product-type']
    let colour = base.options.colour
    let size = base.options.size

    return {[(productName ? productName : '') + (colour ? colour : '') + (size ? size : '')]: base['base-price']}
  }

console.log(JSON.stringify(output, null, 2))
