// *****Javascript Arrays

let myNumbers = [1, 2, 3, 4, 5]

let myColors = ["red", "green", "blue", "yellow", "purple"]

console.log(myColors[1])
// The above console long runs "green" as per the 0 index, with green being the number 1 and red being the number 0 for the array of myColors

//
//
// Length

console.log(myColors.length)
// The above console log for (.length) will give you a number of 5 because there are 5 items in the array for myColors

//
//
// String

let name = "joe"
console.log(name.length)
console.log(name[1])
// The above String test shows strings are also zero indexed. Logging the length of the string for name gives us a log of 3, and calling for the 1 index gives us o because "j" is the 0 in the zero index.

//
//
// End of Javascript Array retention practice*****

                        //
                        //
// *****Javascript Conditionals + Boolean - true / false

if(false){
    console.log("It is true!")
} else{
    console.log("It is false!")
}
// Because the condition "false" is hard coded into the "if" statement above, nothing will run in the console. With the addition of "else" at the end of the statement, it can continue running and recognizes the first console log is not true and knows to run the "else" statement as a result.

//
//
if(2 === 2){
    console.log("Two is equal to two!")
} else{
    console.log("Two is not equal to two")
}
// Using strictly equals "===" we can evaluate if 2 is equal to 2. Because the condition is true, it will console.log the first line and not run the "else" statement/second line of code.

//
//
if(2 === 4){
    console.log("Two is equal to two!")
} else{
    console.log("Two is not equal to two")
}
// Because the condition is false (2 is not equal to 4), the statement runs to the next line of code which is our "else" statement.

//
//
if(2 === 4){
    console.log("Two is equal to two!")
} else if(2 === 5){
    console.log("Two is equal to five!")
} else if(2 === 2){
    console.log("Two is equal to two!")
}
// Utilizing "else if" the code will continue running for multiple statements until it evaluates a true statement.

//
//
if(2 === 4){
    console.log("Two is equal to two!")
} else if(2 === 5){
    console.log("Two is equal to five!")
} else if(2 === 3){
    console.log("Two is equal to two!")
} else {
    console.log("I don't know what's going on!")
}
// If all of our "else if" statements evaluate to false, we can utilize the "else" statement at the end of our "if" statement to document the fact that the previous statements are false and none of the conditions outlined work with the given information. (Refer to the node calculator JS exercise at story point #43 for a good representation of conditionals in action)

//
//
// Comparison Operators

//   >, <, <=, >=, ==, ===, !=, !==
//
//   >   (Greater than)
//   <   (Less than)
//   <=  (Less than or equal to)
//   >=  (Greater than or equal to)
//   ==  (Loosely equal (avoid using these)
//   === (Strictly equal)
//   !=  (Loosely not equal (avoid using these)
//   !== (Strictly not equal)
// All of these compariosn operators will evaluate to true or false

//
//
// Truthy and Falsey

        // falsey
    // 0
    // "" - empty string
    // undefined
    // false
    // NaN - Not a Number
        
        // everything else is truthy

//
//
if(""){
    console.log("it is truthy")
} else {
    console.log("it is falsey")
}
// Because the condition in our "if" statement is an empty string, the "else" statement runs because the condition is inherently false.

//
//
if("a"){
    console.log("it is truthy")
} else {
    console.log("it is falsey")
}
// Adding any character into the condition with our empty string will then make the statement inherently truth and run the first console log.

//
//
// Logic Operators
    // && - and
    // || - or
    // !  - not

//
//
if(2 === 2 && 2 === 3){
    console.log("It's working!")
} else {
    console.log("It's not working")
}
// With the "if" statement above, the statement is false because the logic operators are "and" &&, and because both statements are not true, the statement is false.

//
//
if(2 === 2 || 2 === 3){
    console.log("It's working!")
} else {
    console.log("It's not working")
}
// With the "if" statement above, the statement is true because the logic operator "or" || evalautes both conditions of the if statement and so long as one of them is true, the if statement will run as true.

//
//
if(2 === 2 && 2 !== 3){
    console.log("It's working!")
} else {
    console.log("It's not working")
}
// With the "if" statement above, both conditions in our statement are true thus the first console.log runs.

//
//
// Order of operations  + - * /

//
//
if((2 === 2 && 3 === 3) && 2 !== 3){
    console.log("It's working!")
} else {
    console.log("It's not working")
}
// We can use order of operations (PEMDAS) in our "if" statement conditions like in basic math. In the statement above, what's in our parentheses is evaluated first before moving onto the next condition.

// End of Javascript  Conditionals + Boolean - true / false retention practice*****

                    //
                    //
// *****Javascript Loops

for(var i = 0; i < 3; i++){
    console.log(i)
}
// For loop has 3 parts. first, declar what to start it off as by declaring a variable (var i = 0) in this case. Separate it by a semicolon. The next part is to tell it where to stop (i < 3;). The last item is how much you want it to count by (i++) known as the increment operator. The i++ will use increments of 1.

//
//
for(var i = 0; i < 6; i += 2){
    console.log(i)
}
// The above for loop increments by 2. += 2 means add 2 to each increment which gets us to our stopping point twice as fast.

//
//
var favFoods = ["pizza", "pasta", "ice cream", "banana"]

for (var i = 0; i < favFoods.length; i++){
    console.log(favFoods[i])
}
// The above loop allows us to utilize dot notation for our variable to call the array to our console.log.

let num = ["1", "2", "3", "4", "5"]

for (let n = 0; n < num.length ; n++){
    console.log(num[n])
}
// The above loop is just me practicing seeing if you can replace var and i with let and a different variable

//
//
var numbers = [1, 2, 3, 4, 5, 6]

for(var i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        console.log(numbers[i])
    }
}
// We include a question ("if" statement) in our for loop to get even numbers utilizing the "modulo" sign (%) which gets the remainder. For some reason 2 === 0 means it's even. Not entirely sure about the logic behind that.

//
//
var count = 0

while(count < 10){
    console.log('hi')
    count++
}
// While loop example (wasn't gone too much into depth). Instructor said you can put a boolean in the parentheses.

//
//
// End of Javascript Loops retention practice*****
                    //
                    //
// Javascript Functions

// for (let i = 15; i <= 50; i++){
//     console.log(i)
// }

// for (let i = 0; i <= 10; i++){
//     console.log(i)
//     if(i === 7){
//         console.log("It's your lucky day!")
//     }
// }