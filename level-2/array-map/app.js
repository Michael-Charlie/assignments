function doubleNumbers(arr){
const result = arr.map(num => num * 2);
return result;
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

function stringItUp(arr){
  const result = arr.map(num => num.toString())
  return result  
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
// Used this link to find the answer to this one https://www.w3schools.com/jsref/jsref_tostring_array.asp

function capitalizeNames(arr){
  const result = arr.map(name => name[0].toUpperCase() + name.substr(1).toLowerCase())
  return result
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 

// Output:
// ["John", "Jacob", "Jingleheimer", "Schmidt"]
// Used this link to find the above answer https://stackoverflow.com/questions/7743582/trying-to-capitalize-the-first-character-in-array-of-strings-why-this-is-not-wo

function namesOnly(arr){
  const result = arr.map(names => names.name)
  return result
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

function makeStrings(arr){
  const result = arr.map(customers => {
    if (customers.age < 18){
        return customers.name + " is under age!!"
    }
    else if (customers.age > 18){
        return customers.name + " can go to The Matrix"
    }
  })
  return result
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]
// Used this link to figure out how to structure / implement conditionals with map https://stackoverflow.com/questions/41554604/conditional-statement-in-a-map-function-with-es6

function readyToPutInTheDOM(arr){
  const result = arr.map(names => {
    return `<h1> ${names.name} </h1> <h2> ${names.age} </h2>`
  })
  return result
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]