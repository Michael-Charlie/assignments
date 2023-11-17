 // You can also do const sum = require("./math.js").sum if you wanted to isolate the sum function from that folder. If you were to change it to sum = require("./math.js").subtract, you're still calling the subtract function. Your variable name is still just sum.

 // If you only had to use a functino once you can skip saving it in a variable and just do require("./math.js").subtract(20, 10)

 const {sum, subtract} = require("./math.js")

 const {multiplyBy2, multiply, setFactor} = require("./math2.js")

const User = require("./user.js")


console.log(sum(10, 20))

console.log(subtract(30, 10))

console.log(multiplyBy2(20))

console.log(multiply(10))

setFactor(10)

console.log(multiply(10))

console.log(new User("steve", 10))
