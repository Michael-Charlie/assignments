const people = [ "John", "Adam", "Amber" ]

function peopleElements(arr) {
    const result = arr.map(people => {
        `<h1>${people}</h1>`
    })
    return result
}
console.log(peopleElements(people))


// Expected Output: [ "<h1>John</h1>", "<h1>Adam</h1>", "<h1>Amber</h1>" ]

function peopleElements(arr) {
  const newPeopleElements = arr.map(name=> {
    return `<h1>${name}</h1>`
    
  })
  return newPeopleElements
}

console.log(peopleElements(people))