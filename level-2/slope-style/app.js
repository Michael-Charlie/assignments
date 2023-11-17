// Use the REST OPERATOR to help this function return an array of animals, no matter how many animals are passed to it:
function collectAnimals(...animals) {
    return animals
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))


// Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:
function combineFruit(fruit, sweets, vegetables){
    return {
        fruit: [...fruit],
        sweets: [...sweets],
        vegetables: [...vegetables]
    }
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))


// Use destructuring to use the property names as variables. Destructure the object in the parameter:
function parseSentence({location, duration}, dog){
  return `We're going to have a good time in ${location} ${dog} for ${duration}`
}
const dog = "shephard"
console.log(parseSentence({
  location: "Burly Idaho",
  duration: "2 weeks"
},dog))


// Use array destructuring to make this code ES6:

function returnFirst(items){
    const [firstItem, b, z, f] = items; /*change this line to be es6*/

    return [firstItem, b, z, f]
}
console.log(returnFirst(['cat', 'dog', 'mouse']))
console.log(returnFirst(['cat', 'dog', 'mouse', 'lion']))

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are, ${firstFav}, ${secondFav} and ${thirdFav}`
}

console.log(returnFavorites(favoriteActivities))


// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.
function combineAnimals(...arr) {
const test = [...arr]
let ans = []
for (let i = 0; i < test.length - 1; i++) {
    ans.push(...test[i])
}
return ans
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals, mysteriousAnimals, mysteriousAnimals, mysteriousAnimals))
// ["dog", "cat", "mouse", "jackolope", "platypus"]


// // Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:
function populatePeople(names){
    return names.map((name) => {
        name = name.split(" ");
        const [firstName, lastName, ...other] = name
        return {
            firstName: firstName,
            lastName: lastName,
            other: other
        }
    })
}

console.log(populatePeople(["Frank Peterson Dog asd dsadas dsadasd", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]


// Try to make the following function more ES6y:
function product(a, b, c, d, e) {
  let numbers = [a,b,c,d,e];

  return numbers.reduce((acc, number) => {
    return acc * number;
  }, 1)
}
// NOT COMPLETED


// // Make the following function more ES6y. Use at least both the rest and spread operators:
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}
// NOT COMPLETED