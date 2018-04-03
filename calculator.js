
module.exports = {
  input: input,
}

function input(cart, base) {
  console.log('Input your calculations and add up your cart!')
  return console.log("you have " + (cart.percent + cart.value) + " products in your cart")
}
