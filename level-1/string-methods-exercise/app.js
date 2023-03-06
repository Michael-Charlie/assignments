// StudyBudy Quest's solution

// var userName = "michael"
// var allLowerCase = "michael"
// function upperLower(name){
//   var upperCasedName = name.toUpperCase()
//   var lowerCasedName = name
// return upperCasedName.concat(lowerCasedName)
// }
// console.log(upperLower(userName))

// My solution

let name = "bob"
function capAndLower(name){
    let bobUpper = name.toUpperCase()
    let bobLower = bobUpper.toLowerCase()
    let allTogether = bobUpper.concat(bobLower)
    console.log(allTogether)
    
}
capAndLower(name)

let ex2 = "Hello World"

function example2(ex2){
    let halfEx2 = (Math.floor(ex2.length / 2))
    console.log(halfEx2)
}
example2(ex2)

let ex3 = "Hello World"

function example3(ex3){
    let slicedEx3 = ex3.slice(0, 5)
    console.log(slicedEx3)
}
example3(ex3)

let ex4 = "Hello World"

function example4(ex4){
    let firstHalf = ex4.slice(0, Math.floor(ex4.length / 2))
    let firstHalfCap = firstHalf.toUpperCase()
    let secondHalf = ex4.slice(Math.floor(ex4.length / 2)).toLowerCase()
    let result = firstHalfCap + secondHalf
    console.log(result)
}
example4(ex4)

// let ex2 = "Hello World"

// function example2(ex2){
//     let halfLength = ex2.slice(0, 5)
//     let getHalf = halfLength.indexOf()
//     let showHalf = Math.floor(getHalf)
//     console.log(showHalf)
// }
// example2(ex2)

// let ex2 = "Hello World"

// function example2(ex2){
//     let halfLength = ex2.indexOf(" ")
//     let getHalf = Math.floor(halfLength)
//     console.log(getHalf)
//     console.log(halfLength)
// }
// example2(ex2)