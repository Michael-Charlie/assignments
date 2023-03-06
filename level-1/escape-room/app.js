const readline = require("readline-sync");

const instructions = readline.question("Hello and welcome to the 'Escape Room Game.' Hit enter to continue, and when a question is asked, type in your answer and hit enter.");

const start = readline.question("You wake up in a locked room and don't remember how you got here.");

const user = readline.question("What is your name? ");

const greeting = readline.question(`Hello ${user}.`);

let isAlive = true

let hasEscaped = false

const options1 = ["Check drawer", "Check mattress", "Check flower pot"]
const message1 = readline.keyInSelect(options1, "One of these options will allow you to move foward. The wrong choice is game over. Choose wisely.")

function firstMsg(){
    
    if (options1[message1] === "Check flower pot"){
        readline.question("You find a key and move on to the next room")
        isAlive = true
        secondMsg()
    }
    else if (options1[message1] === "Check drawer"){
        readline.question("Something grabs your hand and you find yourself in a yellow, dimly lit room with many hallways")
        hasEscaped = false
    }
    else if (options1[message1] === "Check mattress"){
        readline.question("You find a pit of venemous snakes and are bitten")
        hasEscaped = false
    }
}
firstMsg()



function secondMsg(){
    const options2 = ["Enter red portal", "Enter blue portal", "Enter green portal"]
    const message2 = readline.keyInSelect(options2, "Congratulations. You've gotten passed phase 1. Choose a portal to continue your escape attempt.")

    if (options2[message2] === "Enter red portal"){
    readline.question("You step over the red portal and begin falling. You land in the Sahara desert. Game over.")
    hasEscaped = false
    }
    else if (options2[message2] === "Enter blue portal"){
        readline.question("You step over the red portal and sink. You are in the middle of the ocean. Game over.")
        hasEscaped = false
    }
    else if (options2[message2] === "Enter green portal"){
        readline.question("You blink and find yourself in a room with only a table. You see three items on the table.")
        isAlive = true
        thirdMsg()
    }
}


function thirdMsg(){
    options3 = ["Squeak Toy", "Steak Fillet", "Laser Beam"]
    const message3 = readline.keyInSelect(options3, "If you wish to leave unharmed, you must do no harm. One of these options will allow you to get past the monster ahead without harming it, or getting harmed yourself.")

    if (options3[message3] === "Squeak Toy"){
        readline.question("You proceed with the squeak toy in hand. You hear a growl at the end of ther room. The toy squeaks and a Sphinx pounces to get the toy, killing you instantly in the act.")
        hasEscaped = false
    }
    else if (options3[message3] === "Steak Fillet"){
        readline.question("You proceed with the steak fillet in hand. You hear a growl at the end of the room. A large three-headed dog notices the steak. As you try to feed it, the dog takes your whole arm with the steak. You bleed out.")
        hasEscaped = false
    }
    else if (options3[message3] === "Laser Beam"){
        readline.question("You proceed with the laser beam in hand. You hear a growl at the end of the room. It's a giant Sphinx. Thinking quickly, you shine the laser beam to the wall at the other side of the room. The Sphinx is distracted and you've escaped the room.")
        isAlive = true
    }
}