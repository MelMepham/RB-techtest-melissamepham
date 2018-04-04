var fs = require('fs')

module.exports = {
  individualItemPrice,
  generateBasePriceDatabase
}

function generateBasePriceDatabase(base, cart) {
  let priceDB = {}

  for (i = 0; i < base.length; i++) {
    if (priceDB[base[i]['product-type']] === false) {
      priceDB[base[i]['product-type']] = {};
      console.log(priceDB)
    }
  }

  // readCart(priceDB, cart)
}

// function readCart(priceDB, cart) {
//   does math and spits out a number?
// }


// function findMatches(cart, base) {
//   for (i = 0; i <cart.length; i++) {
//     const matches = base.filter((stock, index) => {
//       if (stock['product-type'] === cart[i]['product-type']) {
//         if (stock['product-type'] === "hoodie" && (stock.options.colour == cart[i].options.colour)){
//           if (stock.options.size[i] == cart[i].options.size) {
//             individualItemPrice(stock, cart[i])
//           }
//         } else if (stock['product-type'] != "hoodie"){
//           if (stock.options.size == cart[i].options.size){
//             individualItemPrice(stock, cart[i])
//           }
//         }
//       }
//     })
//   }
// }


function individualItemPrice (base, cart) {
      let basePrice = base['base-price'];
      let artistMarkup = cart['artist-markup'];
      let quantity = cart.quantity;
      let name = base['product-type']

      let pluralise = (name, quantity) => quantity > 1 ? (name + "s") : name

      let total = Math.round((basePrice / 100 * artistMarkup + basePrice) * quantity);
      return (
        console.log(total)
      )
}
