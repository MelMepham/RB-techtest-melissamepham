var fs = require('fs')
// var prompt = require('prompt')

module.exports = {
  input: input,
}

var args = process.argv.splice(2)
var cart = args[0];
var base = args[1]

function input() {
  console.log('Input your calculations and add up your cart!')
  return console.log("you have " + (Number(cart) + Number(base)) + " products in your cart")
}
