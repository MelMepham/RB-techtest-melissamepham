var fs = require('fs')

const base = JSON.parse(fs.readFileSync('./data/basePrices.json', 'utf8'))
const cart = JSON.parse(fs.readFileSync('./data/cart.json', 'utf8'))

// module.exports = {
//   calculator,
// }
console.log(base)
const output = base
  .reduce((typesWithPrices, base) => {
    typesWithPrices[base['product-type']] = typesWithPrices[base['product-type']] || [];
    typesWithPrices[base['product-type']].push({
      [base.options.colour + base.options.size]: base['base-price']
    });
    return typesWithPrices
  }, {})

console.log(JSON.stringify(output, null, 2))
