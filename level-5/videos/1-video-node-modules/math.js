// You can also do module.exports.sum = function (a, b) {
//     return a + b
// }
function sum(a, b) {
    return a + b
}

// You can also do module.exports.subtract = function (a, b) {
//     return a + b
// }

function subtract(a, b) {
    return a - b
}

module.exports = {sum, subtract}

// To be honest I prefer the method above to export this stuff.