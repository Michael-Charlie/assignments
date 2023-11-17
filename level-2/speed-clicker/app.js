// let clicks = document.getElementById("clicks");

// let 

// let count = 0;

// function clickBtn() {
//     count++;
//     console.log(count)
//     let clicks = document.getElementById("count")
//     clicks.textContent.append
// }

let submit = document.getElementById("clicks")

let count = Number(localStorage.counter) + Number(1) || 0;

let counter = document.getElementById("count")

counter.innerHTML = count

submit.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.setItem("counter", counter.textContent)
    count++;
    console.log(count);
    // let clicker = document.getElementById("count")
    counter.innerHTML = count;
})