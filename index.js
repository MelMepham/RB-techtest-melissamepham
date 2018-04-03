var fs = require('fs')

var calculator = require('./calculator')

let cart = fs.readFileSync('./data/cart.json', 'utf8')
let base = fs.readFileSync('./data/basePrices.json', 'utf8')

// var args = process.argv.splice(2);
// var cart = JSON.parse(args[0]);
// var base = JSON.parse(args[1]);
console.log("Welcome to the calculator")

calculator.calculator(cart, base)
