const basePriceObj = require('../basePriceObj')
const fs = require('fs')


let base = JSON.parse(fs.readFileSync('./data/basePrices.json', 'utf8'))
let cart = JSON.parse(fs.readFileSync('./data/cart.json', 'utf8'))
