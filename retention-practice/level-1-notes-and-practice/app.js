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

// 