for(let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log("FizBuzz" + [i])
    }
    else if (i % 5 === 0){
        console.log("Buzz" + [i])
    }
    else if (i % 3 === 0){
        console.log("Fizz" + [i])
    }
}