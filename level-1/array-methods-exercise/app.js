const fruit = ["banana", "apple", "orange", "watermelon"];
const vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function arrayMethodsExercise(){
    vegetables.pop()
    console.log(vegetables)

    fruit.shift()
    console.log(fruit)

    const orangeIndex = fruit.indexOf("orange")
    console.log(orangeIndex)

    fruit.push(orangeIndex)
    console.log(fruit)

    console.log(vegetables.length)

    const vegArray = vegetables.length
    vegetables.push(vegArray)
    console.log(vegetables)

    const food = fruit.concat(vegetables)
    console.log(food)

    const result = food.splice(4, 2)
    console.log(food)

    food.reverse()
    console.log(food)

    const foodString = food.join()
    console.log(foodString)
}
arrayMethodsExercise()