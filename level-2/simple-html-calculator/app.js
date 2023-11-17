const addition = document.addition

const subtract = document.subtraction

const multiply = document.multiply

addition.addEventListener("submit", function(event){
    event.preventDefault()
    const firstNumA = addition.firstNumA.value
    const secondNumA = addition.secondNumA.value
    addition.firstNumA.value = ""
    addition.secondNumA.value = ""
    const h1 = document.createElement('h1')
    h1.textContent = parseInt(firstNumA) + parseInt(secondNumA)
    document.addition.append(h1)
})

subtract.addEventListener("submit", function(event){
    event.preventDefault()
    const firstNumS = subtract.firstNumS.value
    const secondNumS = subtract.secondNumS.value
    subtract.firstNumS.value = ""
    subtract.secondNumS.value = ""
    const h1 = document.createElement('h1')
    h1.textContent = parseInt(firstNumS) - parseInt(secondNumS)
    document.subtraction.append(h1)
})

multiply.addEventListener("submit", function(event){
    event.preventDefault()
    const firstNumM = multiply.firstNumM.value
    const secondNumM = multiply.secondNumM.value
    multiply.firstNumM.value = ""
    multiply.secondNumM.value = ""
    const h1 = document.createElement('h1')
    h1.textContent = parseInt(firstNumM) * parseInt(secondNumM)
    document.multiply.append(h1)
})