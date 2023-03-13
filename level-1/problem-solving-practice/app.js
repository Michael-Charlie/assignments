
function highNum(array){
    let highest = null
    for (var i = 0; i < array.length; i++){
        if (highest === null){
            highest = array[i]
        }
        if (highest < array[i]){
            highest = array[i]
        }
    }
    return highest
}

numArray1 = [45, 23, 17, 5, 9, 10, 92]

console.log(highNum(numArray1))

function lettersWithStrings(array, char){
    for (var i = 0; i < array.length; i++){
        if (array[i].includes(char)){
            console.log(array[i])
        }
    }
}

const test = ["$hello!", "%%^%%", "test!"]
lettersWithStrings(["yellow", "green", "^up^", "down", "dog"], "d")
lettersWithStrings(test, '!')




function isDivisible(num1, num2){
    if (num1 % num2 === 0){
        return true
    }
    else return false
}

console.log(isDivisible(15, 4))