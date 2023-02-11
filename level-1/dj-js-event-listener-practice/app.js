let square = document.querySelector("#square-shape")

document.getElementById("square-shape").addEventListener("mouseover", function(){
    square.style.backgroundColor = "blue";
})

document.getElementById("square-shape").addEventListener("mousedown", function(){
    square.style.backgroundColor = "red";
})

document.getElementById("square-shape").addEventListener("mouseup", function(){
    square.style.backgroundColor = "yellow";
})

document.getElementById("square-shape").addEventListener("dblclick", function(){
    square.style.backgroundColor = "green";
})

document.addEventListener("scroll", function(){
    square.style.backgroundColor = "orange";
})

document.body.addEventListener("keydown", e => {
    if(e.key === 'r') {
        square.style.backgroundColor = 'red'
    } else if (e.key === 'g') {
        square.style.backgroundColor = 'green'
    } else if (e.key === 'o') {
        square.style.backgroundColor = 'orange'
    } else if (e.key === 'y') {
        square.style.backgroundColor = 'yellow'
    } else if (e.key === 'b') {
        square.style.backgroundColor = 'blue'
    }
})