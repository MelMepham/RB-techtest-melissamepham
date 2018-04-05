const fs = require('fs')

let basePriceObj = require('./basePriceObj.js')
let calculator = require('./calculator.js')

var args = process.argv.splice(2)
let base = JSON.parse(fs.readFileSync(args[0], 'utf8'))
let cart = JSON.parse(fs.readFileSync(args[1], 'utf8'))


calculator.calculator(base, cart)
