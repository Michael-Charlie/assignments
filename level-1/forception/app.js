const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]

const alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(people, alphabet){
    let upperCaseAlphabet = alphabet.toUpperCase()

    let splitUpperCaseAlphabet = upperCaseAlphabet.split("")
    splitUpperCaseAlphabet.reverse()
    for (var i = people.length - 1; i >= 0; i--){
        for (var j = 0; j < splitUpperCaseAlphabet.length; j++){
            people.splice([i + 1], 0, splitUpperCaseAlphabet[j])
        }
    }
    console.log(people)
}
forception(people, alphabet)