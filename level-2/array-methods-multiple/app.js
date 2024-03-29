function sortedOfAge(arr){
       const result = arr.filter(aged => aged.age >= 18)

       const result2 = result.sort((a, b) => a.lastName.charCodeAt(0) - b.lastName.charCodeAt(0))

       const result3 = result2.map(names => {
        return `<li> ${names.firstName} ${names.lastName} is ${names.age} </li>`
        })
        return result3
    }
    // Used this to utilize charCode https://stackoverflow.com/questions/33031459/sorting-array-after-firstname-and-lastname-javascript
    var peopleArray = [
        {
            firstName: "Sarah",
            lastName: "Palin",
            age: 47
        },
        {
            firstName: "Frank",
            lastName: "Zappa",
            age: 12
        },
        {
            firstName: "Rick",
            lastName: "Sanchez",
            age: 78
        },
        {
            firstName: "Morty",
            lastName: "Smith",
            age: 29
        },
        {
            firstName: "Kyle",
            lastName: "Mooney",
            age: 27
        },
        {
            firstName: "Pasha",
            lastName: "Datsyuk",
            age: 13
        },
        {
            firstName: "Lev",
            lastName: "Tolstoy",
            age: 82
        }
    ]

console.log(sortedOfAge(peopleArray));

/*
Output:
[
    "<li>Kyle Mooney is 27</li>",
    "<li>Sarah Palin is 47</li>",
    "<li>Rick Sanchez is 78</li>",
    "<li>Morty Smith is 29</li>",
    "<li>Lev Tolstoy is 82</li>"
]
*/
