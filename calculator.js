var fs = require('fs')
// var prompt = require('prompt')

module.exports = {
  input: input,
}

function input() {
  console.log('Input your calculations and add up your cart!')
  console.log("you have " + (Number(process.argv[2]) + Number(process.argv[3])) + " products in your cart")
}
