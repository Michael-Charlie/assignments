let name = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map( carrot => {
        return { type: "carrot", name: carrot }
    })
}

console.log(mapVegetables(carrots))

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
    return arr.filter(person => {
        return person.friendly
    })
}

console.log(filterForFriendly(people))

function doMathSum(a, b) {
    return a + b
}

var produceProduct = (a, b) => {
    return a * b
}

console.log(produceProduct(5, 5))

let printString = (firstName, lastName, age) => {
    return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
}
console.log(printString("Kat", "Stark", 40))

const animals = [
   {
       type: "dog",
       name: "theodore"
   },
   {
       type: "cat",
       name: "whiskers"
   },
   {
       type: "pig",
       name: "piglette"
   },
   {
       type: "dog",
       name: "sparky"
   }
];

let filterForDogs = arr => {
    return arr.filter(animal => (animal.type === "dog") ? true:false)
}

console.log(filterForDogs(animals))
// Reference https://www.w3schools.com/c/c_conditions_short_hand.php

let vacationGreeting = (location, name) => (
    `
    Hi ${name}!
    Welcome to ${location}.
    I hope you enjoy your stay. Please ask the president of ${location} if you need anything.
    `
)
console.log(vacationGreeting("Hawaii", "Janice"))
// Needed to use () instead of {} after arrow function


