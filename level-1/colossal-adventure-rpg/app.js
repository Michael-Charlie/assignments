const readline = require("readline-sync");

console.log('Welcome player to my RPG game')

const user = readline.question("What is your name? ");

console.log(`Hello ${user}.`)

let playerHealth = 1

let inventory = []

while(playerHealth > 0){
    const instructions = readline.question("Press w to walk Press i for inventory")
    if(instructions === 'w'){
        walking()
    } else if(  instructions === 'i') {
        console.log(inventory)
    }
}
console.log('Players health is lower than 0')



function walking(){
        readline.question("You carefully tread through the forest...")
        let encounterChance = Math.floor(Math.random() * 101)
        if (encounterChance < 50){
            enemyEncounter()
        }
        else noEncounter()
}

function generateMonster() {
    let monsters = ["Goblin", "Dragon", "Troll"]
    let monster = monsters[Math.floor(Math.random() * monsters.length)]
    let monsterHealth = Math.floor(Math.random() * 50) +50;
    let monsterAttack = Math.floor(Math.random() * 10) +5;
    return {
        name: monster,
        health: monsterHealth,
        attack: monsterAttack
    }
}


function enemyEncounter(){
    let monster = generateMonster()
    readline.question("You encounter a " + monster.name + "!")
    let battleResult = battle(monster)
    if (battleResult === "win") {
        console.log("You defeated the " + monster.name + "!")
        inventory.push(monster.name + " loot")
        console.log("You recevied " + monster.name + " loot")
        playerHealth += 50
        console.log("You recover 50hp after the battle.")
    }
    else if (battleResult === "lose") {
        readline.question("You were defeated by the " + monster.name + ". Game over!")
    }
}

function noEncounter(){
    walking()
}

function escape() {
    console.log("You successfully escaped!")
    walking()
}

function battle(monster){
    readline.question("You are in a battle with a " + monster.name + "!")
    while(monster.health > 0 && playerHealth > 0) {
        console.log("You have " + playerHealth + " hp!", "The " + monster.name + " has " + monster.health + " hp!")
        let action = readline.question("What would you like to do? Type 'f' to fight, 'r' to run, or 'i' for inventory.")
        if (action === "f") {
            let playerAttack = Math.floor(Math.random() * 10) +5
            monster.health -= playerAttack
           console.log(("You hit the " + monster.name + " for " + playerAttack + " damage"))
            if (monster.health <= 0) {
                return "win"
            }
            let monsterAttack = Math.floor(Math.random() * monster.attack) + 5
            playerHealth -= monsterAttack
            readline.question("The " + monster.name + " hit you for " + monsterAttack + " damage")
            if (playerHealth <= 0) {
                return "lose"
            }
        }
        else if (action === "r") {
            let escapeChance = Math.floor(Math.random() * 101)
            if (escapeChance < 50) {
             escape()
            } else {
                let monsterAttack = Math.floor(Math.random() * monster.attack) + 5
                playerHealth -= monsterAttack
                readline.question("You fail to escape the " + monster.name + " hit you for " + monsterAttack + " damage")
            }
        }
    }
}