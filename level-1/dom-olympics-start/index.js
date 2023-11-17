let h1 = document.createElement("h1")
h1.textContent = "JavaScript Made This!!"

const header = document.getElementById("header")
header.appendChild(h1)

h1.className = "header";
const newP = document.createElement("p")
newP.innerHTML += "<span class='name'>Michael</span> wrote the Javascript"

h1.append(newP)

const messages = document.getElementsByClassName("message");

messages[0].textContent = "Don't tell now that you've grown to care for the boy.";
messages[1].textContent = "Expecto Patronum!";
messages[2].textContent = "Lily? After all this time?";
messages[3].textContent = "Always.";

document.getElementById("clear-button").addEventListener("click", function(){
    document.getElementsByClassName("messages")[0].textContent = ""
})
