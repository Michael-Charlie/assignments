// *****DOM - Selecting Multiple Elements

// var things = document.getElementsByClassName("things")
// console.log(things)

// We are looking at the 'entire document' so we use dot notation starting with 'document' with the addition of 'getElementsByClassName' and because it is a 'method' we have to 'execute' it using parentheses () 
// Ex. document.getElementsByClassName("things")
// We can save the above statement into a variable so that we can console.log it as seen above with 'var things ='
// An HTML collection would log into our console. getElementsByClassName does not return an 'array', it returns an 'array-like' object which is logged as 'html collection' but we can treat it like an array. For example, we can access the first element in the array using [0]
// Ex.
//var things = document.getElementsByClassName("things") console.log(things[0]) would return <h1 class="things"> into our console.
// Because the above is an array, we can utilize a for loop to look at every element in the array
// Ex. var things = document.getElementsByClassName("things")
// for (var i = 0; i < things.length; i++) {
//     console.log(things[i])
// }
// This will log 3 instances of <h1 class="things">. If we want to log what's inside the h1 tags, we can utilize dot notation to access the text with .innerHTML or .innerText
// Ex. var things = document.getElementsByClassName("things")
// for (var i = 0; i < things.length; i++) {
//     console.log(things[i].innerText)
// }
// Would console.log Thing 1, 2 and 3.
//
//
// Quiz with points to rememeber:
// 1. What are some of the differences between getElementById and getElementsByClassName?
// * id - returns a single element/object from the document. class name (tag name) returns an array-like object.
// * id - needs an id to find, class name - needs a class to find
//         document.getElementsByTagName("div")

// 2. What will `.getElementsByClassName` return if there are no elements with the matching class in the document?
// Returns an empty array


// 3. What will `.getElementById` return if there is no element with the matching id in the document?
// `null`
                 // End of DOM - Selecting Multiple Elements*****


                 //
// *****Javascript - Nested Loops

var arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
// Index 0 is 1,2,3. Index 1 is 4,5,6. Index 2 is 7,8,9.

for(var i = 0; i < arrayOfArrays.length; i++){
    console.log(arrayOfArrays[i])
}
// The lesson wants us to print out each array with a for loop. The above is the first example. In the next example, he wants us to get access to each item in the arrays.

for(var i = 0; i < arrayOfArrays.length; i++){
    for (var j = 0; j < arrayOfArrays[i].length; j++){
        console.log(arrayOfArrays[i][j])
    }
}
//In the above example, rather than console logging like in the first example, we create another "for" loop using a new "j" variable targeting arrayOfArrays[i].length. This gives us the ability to reach each item in the array individually. We can console.log(arrayOfArrays[0][0]) for example to only target the #1 in the first array because they have their own set of '0 index.'

                //End of Javascript - Nested Loops*****


// ***** Javascript - Array Methods
// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_array.asp

var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"]

// push - adds item(s) to the end of the array
    var newFoodsArr = arrOfFoods.push("cereal")
    console.log(arrOfFoods)


// pop - removes item from the end of the array
    arrOfFoods.pop()
    console.log(arrOfFoods)  


// unshift - adds item(s) to the beginning of the array
    arrOfFoods.unshift("cereal")
    console.log(arrOfFoods)

// shift - removes item from the beginning of the array
    arrOfFoods.shift()
    console.log(arrOfFoods)

// concat - combines two arrays into one utilizing a new variable (returns a new array so we need to claim a new variable "newArr")
    var colors1 = ["blue", "green"]
    var colors2 = ["purple", "red"]
    var newArr = colors1.concat(colors2)
    console.log(newArr)


// indexOf - finds the index of an item in an array "string method"
    var pizzaIndex = arrOfFoods.indexOf("pizza")
    console.log(pizzaIndex)

    var pizzaIndex = arrOfFoods.indexOf("popcicle")
    console.log(pizzaIndex)
    // With string methods, if indexOf cannot find what we're looking for, it returns -1


// slice - cuts at "egg" and ends at "ice cream" (cutting at the 3rd index which is "pizza") in this example.
    // var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"]
    var newArr2 = arrOfFoods.slice(1, 3)
    console.log(newArr2)
    console.log(arrOfFoods)
    // We can see that slice does not interfere with the original variable of arrOfFoods, slice just allows us to cut portions of that array and use them (or that's how I'm understanding it, anyway)

// join - turns an array into a string
    var name = "steve"
    var splitName = name.split("")
    var joinedName = splitName.join("-")
    console.log(joinedName)


// reverse
    var name = "rick" // kcir
    var splitName = name.split("")
    var reversedArr = splitName.reverse()
    var reversedName = reversedArr.join("")
    console.log(reversedName)

    var allAtOnce = name.split("").reverse().join("")
    console.log(allAtOnce)

// splice - changes the original array (it's kind of like slice)
    // var arrOfFoods = ["pancake", "egg", "ice cream", "pizza", "hamburger"]
    
    // arrOfFoods.splice(2, 2)
    // console.log(arrOfFoods)

    var result = arrOfFoods.splice(2, 2, "bacon", "ice cream")
    console.log(arrOfFoods)
            // End of Javascript - Array Methods*****

// *****Javascript - String Methods
// Methods are Functions 
// String Methods are pre-built by Javascript, so all you have to do is use them!
// Full list can be found here: https://www.w3schools.com/jsref/jsref_obj_string.asp

// toUpperCase & toLowerCase
const user = "luke"
const uppercasedLuke = user.toUpperCase()
console.log(uppercasedLuke)
// console.log(user)
// Our original variable "user" stays lower cased.
const lowercasedLuke = uppercasedLuke.toLowerCase()
console.log(lowercasedLuke)


// concat - similar to using + sign in our code
const s = "s"
const newUser = user.concat(s)
console.log(newUser)
// Below is the old way we learned how to "concat"
const newUserTest = user + s
console.log(newUserTest)


// split - turns a string into an array
var animal = "tiger"
var characterArr = animal.split("")
console.log(characterArr)


// slice - let's you cut up a string
var phoneNumber = "6764567890" // "676-456-7890"
    var first3 = phoneNumber.slice(0, 3)
    var next3 = phoneNumber.slice(3, 6)
    var last4 = phoneNumber.slice(6)
    var phoneNumWithDashes = first3 + "-" + next3 + "-" + last4
    console.log(phoneNumWithDashes)


// indexOf - finds the first match
var city = "New York City"
    var indexOfC = city.indexOf("C")
    console.log(indexOfC)

                    //End of Javascript - String Methods*****


// *****Javascript - Mutability and Value Types


// Mutable - Containers =< passed by Reference
    //Array
    //Object
var arr = [1, 2, 3, 4, 5]
    arr[0] = 6
    console.log(arr)

var person = {
        name: "harry",
        age: 12
    }

    person.hasWand = true
    delete person.hasWand
    console.log(person)

    var newPerson = person
    newPerson.hasWand = true 
    console.log(person)  
// Immutable - cannot be changed => passed by value
    // String
    // Numbers
    // Booleans
    var age = 10
    var otherAge = age
    otherAge = 12
    
    console.log(age)
// typeof - returns the type of the data immediately to its right
console.log( typeof [1, 2, 3, 4] )
        // End of Javascript - Mutability and Value Types*****

// *****Javascript - Constructor Functions

// They build objects 
// "new" - instantiates the object
// Starts with a capital letter instead of lowercase

function Car(make, model, year, honkSound){
    this.make = make
    this.model = model
    this.year = year
    this.honkSound = honkSound
    // this.honk = function(){
    //     console.log(this.honkSound)
    // } ****This is commented out for the "prototype" below 
}


var jeep = new Car("Jeep", "Cherokee", 1995, "MEEERRRP")
var mazda = new Car("Mazda", "3 hatchback", 2015, "BLAAARP")
 
Car.prototype.honk = function(){
     console.log(this.honkSound)
}

jeep.honk()
mazda.honk()
                // End of Javascript - Constructor Functions*****

// *****Javascript - ES6 Part 1

// const and let

// var name = "steve"

// const firstName = "joe"
// firstName = "steve"
// // We would get an error for the above const 
// // let age = 12
// age = 13

// Global, Local, Bracket
function someFunc(){
   let a
   if(2 === 2){
       a = "hello"
   }
   console.log(a)
}

someFunc()

// spread and rest (gather)
    // Syntax:  ...
function maxNumber(...nums){
    console.log(nums)
}

maxNumber(0, 3, 58, 20, 200, 30)
    // objects and arrays
const colors3 = ["red", "blue"]
const colors4 = ["yellow", "green"]

const allColors = [...colors3, ...colors4]

console.log(allColors)

const personC = {
    name: "rick",
    age: 50
}

const personCopy = { ...personC }
console.log(personCopy)


// template literals - using the backtick quotes ` ` with ${} instead of concatination
const name5 = "joe"
// "hi " + name
const greeting = `hi ${name5}`
console.log(greeting)


// import & export
// uses require()
// uses module.exports

        // End of Javascript - ES6 Part 1*****

//Javascript - ES6 Part 2

// fat arrow functions
function sum(){
    
}

const sum2 = function(){
    
}

const sum2ES6 = word => {
    console.log(`ES6 is ${word}!`)
    return word
}
// addEventListener("click", () => {
    
// })


// object literals
//Ex.
// const blue = "blue"
// const green = "green"
// const red = "red"

// const colors = { red, green, blue }

// console.log(colors)

// object destructuring
const user2 = {
    username: "joe123",
    age1: 20,
    _id: "f892jf2jf98j39fj"
}

const { username, age1 } = user2

console.log(username)

const names = ["john", "betty", "nick"]

const [john, betty, nick] = names
console.log(betty)

// default parameters
function sum(a = 5, b = 10){
    return a + b
}

console.log(sum(7))