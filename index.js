const fs = require('fs')

let basePriceObj = require('./basePriceObj.js')
let calculator = require('./calculator.js')

let base = JSON.parse(fs.readFileSync('./data/basePrices.json', 'utf8'))
let cart = JSON.parse(fs.readFileSync('./data/cart.json', 'utf8'))

// var args = process.argv.splice(2);
// var cart = JSON.parse(args[0]);
// var base = JSON.parse(args[1]);

calculator.calculator(base, cart)
