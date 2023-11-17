//Revealing module pattern - only revealing certain functionality from the module. "Private information" stored here or something

let factor = 2

function multiplyBy2(num) {
    return num * factor
}


// When this is required in app.js, you have access to the function but not the factor variable

function multiply(num) {
    return num * factor
}

function setFactor(newFactor) {
    factor = newFactor
}

module.exports = {multiplyBy2, multiply, setFactor}