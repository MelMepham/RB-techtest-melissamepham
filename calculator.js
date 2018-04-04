var fs = require('fs')

module.exports = {
  calculator,
}

function calculator(cart, base) {
  for (i = 0; i <cart.length; i++) {
    const matches = base.filter((stock, index) => {
      if (stock['product-type'] === cart[i]['product-type']) {
        if (stock['product-type'] === "hoodie" && (stock.options.colour == cart[i].options.colour)){
          if (stock.options.size[i] == cart[i].options.size) {
            individualItemPrice(stock, cart[i])
          }
        } else if (stock['product-type'] != "hoodie"){
          if (stock.options.size == cart[i].options.size){
              individualItemPrice(stock, cart[i])
          }
        }
        }

          // if (items.s === base.options.size) {
          //   console.log("cart", base[i])
          // }

        // console.log(cart[i].options.size == stock.options.size)
        // console.log(stock.options.size)
        // if (stock.options.size == cart[i].options.size) {
        // }

    })
  }
}

function individualItemPrice (stock, cart) {
      let basePrice = stock['base-price']
      let artistMarkup = cart['artist-markup']
      let quantity = cart.quantity
      console.log(cart.quantity + " " + stock['product-type'] + " = " + (basePrice / 100 * artistMarkup + basePrice) * quantity)
}
