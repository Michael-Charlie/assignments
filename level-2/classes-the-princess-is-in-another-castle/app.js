const readline = require("readline-sync");


class Player {
    constructor(name, status, totalCoins, hasStar){
        this.name = name
        this.status = status
        this.totalCoins = totalCoins
        this.hasStar = hasStar
    }
    
    setName() {
        readline.question("Which character would you like to play as?")
        let keyInSelect = readline.keyInSelect(characters)
        if (keyInSelect === 0) {
            this.name = "Mario"
        }
        else if (keyInSelect === 1) {
            this.name = "Luigi"
        }
    }

    gotHit() {
        if (this.status === "small") {
            this.status = "dead"
        }
        else if (this.status === "big") {
            this.status = "small"
        }
        else if (this.status === "powered up") {
            this.status = "big"
        }
    }

    gotPowerup() {
        if (this.status === "small") {
            this.status = "big"
        }
        else if (this.status === "big") {
            this.status = "powered up"
        }
        else if (this.status === "powered up") {
            this.hasStar = true
        }
    }

    addCoin() {
        return this.totalCoins++
    }

    print() {
        console.log(`
        Name: ${this.name}
        Status: ${this.status}
        Total coins: ${this.totalCoins}

        `)
    }

    
}

let player1 = new Player("Mario", "small", 0, false)

function randomRangeFunc() {
        let random = Math.floor(Math.random() * 3)
        if (random === 0) {
            player1.gotHit()
        }
        else if (random === 1){
            player1.gotPowerup()
        }
        else if (random === 2) {
            player1.addCoin()
        }
        player1.print()
    }

let timer;

function runGame() {
    timer = setInterval(function(){
        if (player1.status === "dead"){
            clearInterval(timer)
        }
        else randomRangeFunc()
    },3000)
}
player1.print()
runGame()