var calculator = require('./calculator')

'use strict';
var args = process.argv.splice(2);
var cart = JSON.parse(args[0]);
var base = JSON.parse(args[1]);
console.log("Welcome to the calculator")

calculator.input(cart, base)
