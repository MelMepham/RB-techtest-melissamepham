var fs = require('fs')

module.exports = {
  input: input,
}

var args = JSON.parse(process.argv.splice(2));
var cart = args[0];
var base = args[1];

function input() {
  console.log(cart.percent)
  console.log('Input your calculations and add up your cart!')
  return console.log("you have " + (Number(cart.percent) + Number(cart.value)) + " products in your cart")
}
