const readline = require("readline-sync");

  let firstNumber = readline.question("Please enter your first number")

  let secondNumber = readline.question("Please enter your second number")

  let operation = readline.question("Please enter the operation to perform: add, sub, mul, div")

  let result = readline.question("This is:")

  let num1 = Number(firstNumber)

  let num2 = Number(secondNumber)

  if (operation === "add"){
    console.log(num1 + num2)
  }
  else if (operation === "mul"){
    console.log(num1 * num2)
  }
  else if (operation === "sub"){
    console.log(num1 - num2)
  }
  else if (operation === "div"){
    console.log(num1 / num2)
  }












// const getNum = (type) => {
//     let someNum = readline.question(`Please enter the ${type} number: `);
//     if (!isNaN(someNum)) {
//         /* someNum = Number(someNum); */
//         return someNum;
//     } else {
//         console.log("Please enter a valid number.");
//         return getNum(type);
//     }
// }


  // function sum(num1, num2){
  //   return num1 + num2
  // }
  // // let add = sum(10, 5)
  // // console.log(add)

  // function multiply(num1, num2){
  //   return num1 * num2
  // }
  // // let mult = multiply(5, 6)
  // // console.log(mult)