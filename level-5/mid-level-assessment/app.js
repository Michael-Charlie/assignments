// FizzBuzz - return a fizz for numbers that are divible by 3
// FizzBuzz - return a buzz for numbers that are divible by 5
// FizzBuzz - return a fizzbuzz for numbers that are divible by 3 and 5
//1. A way to check if number are divisible by 3
//2. A way to check if number are divisible by 5
//3. If statement utilizing modulus to return fizz for number divisible by 3
//4. If statement utilizing modulus to return buzz for number divisible by 5
//5. If statement utilizing modulus to return fizzbuzz for number divisible by 3 and 5
//Problem Solving Process
//1. Identify the problem
//2. Make a plan - Pseudocode
//3. Execute the code
//4. Review - console.log() to see if code produced correct answer
//Repeat until solution is reached
/*
Write a function called extractUniqueCharacters that takes an array of strings and returns a new array containing only the unique characters from all the strings.
*/

function extractUniqueCharacters(strings) {
    const allCharacters = strings.join(''); // returning array as a string at every space
  const uniqueCharacters = []; // empty array created for unique characters

  allCharacters.split('').map(char => { // taking the string and creating an array of substrings, looping over every char
    if (!uniqueCharacters.includes(char)) { // opposite of uniqueCharacters that returns a char that is true/false
      uniqueCharacters.push(char); // char added to end of array
    }
  });

  return uniqueCharacters;
}

// const words = ['apple', 'banana', 'cherry'];
// const uniqueChars = extractUniqueCharacters(words);
// console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']

/*
Write a function called sortByProperty that takes an array of objects and a property name as input. The function should return a new array containing the objects sorted in ascending order based on the specified property.
*/


function sortByProperty(objects, propertyName) {
  return objects.slice().sort((a, b) => a[propertyName] - b[propertyName]); // taking the objects at objects(people) and alphabetizing them and subtracting the age at the propertyName index and moving them based off the math
}

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 28 },
];

// const sortedByAge = sortByProperty(people, 'age');
// console.log(sortedByAge);

//Challenge: Write a program that generates a multiplication table for a given number.
//
function generateMultiplicationTable(number) {
    // Need to find out a way to make i represent the table? I don't know.
    let arr = []
    for (let i = 1; i <= 10; i++) {
        let result = i * number 
        arr.push(result)
        // console.log(`${i} * ${number} = ${result}`)
    }
    return arr
}
// Return tells function to stop after it runs
// Console.log will continue to run

// Test the function with different numbers
console.log(generateMultiplicationTable(5))
// Expected Outcome:
/*
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50
*/
// generateMultiplicationTable(7);
// generateMultiplicationTable(3);