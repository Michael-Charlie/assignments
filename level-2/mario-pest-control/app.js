let submitGoombas = document.getElementById("submit-goomba");

let submitBobombs = document.getElementById("submit-bobombs");

let submitCheepcheeps = document.getElementById("submit-cheepcheeps");

submitGoombas.addEventListener("click", function(event){
    event.preventDefault();

    let totalBaddies = document.getElementById("total-baddies");

    let totalBaddiesText = totalBaddies.textContent;

    let totalBaddiesTextNum = parseInt(totalBaddiesText);

    let baddiesCost = document.getElementById("baddies-cost");

    let baddiesCostText = baddiesCost.textContent;

    let baddiesCostTextNum = parseInt(baddiesCostText);

    let goombaCost = 50

    let caughtGoomba = document.getElementById("caught-goombas");

    let caughtGoombaCurr = parseInt(document.getElementById("caught-goombas").textContent);

    let goombaCount = parseInt(document.getElementById("goomba-count").value);

    caughtGoomba.textContent = goombaCount + caughtGoombaCurr;

    totalBaddies.textContent =  totalBaddiesTextNum + goombaCount + " baddies";

    baddiesCost.textContent = baddiesCostTextNum + (goombaCost * goombaCount) + " coins"
})

submitBobombs.addEventListener("click", function(event){
    event.preventDefault();

    let totalBaddies = document.getElementById("total-baddies");

    let totalBaddiesText = totalBaddies.textContent;

    let totalBaddiesTextNum = parseInt(totalBaddiesText);

    let baddiesCost = document.getElementById("baddies-cost");

    let baddiesCostText = baddiesCost.textContent;

    let baddiesCostTextNum = parseInt(baddiesCostText);

    let bobombCost = 100

    let caughtBobomb = document.getElementById("caught-bobomb");

    let caughtBobombCurr = parseInt(document.getElementById("caught-bobomb").textContent);

    let bobombCount = parseInt(document.getElementById("bobomb-count").value);

    caughtBobomb.textContent = bobombCount + caughtBobombCurr;

    totalBaddies.textContent =  totalBaddiesTextNum + bobombCount + " baddies";

    baddiesCost.textContent = baddiesCostTextNum + (bobombCost * bobombCount) + " coins"
})

submitCheepcheeps.addEventListener("click", function(event){
    event.preventDefault();

    let totalBaddies = document.getElementById("total-baddies");

    let totalBaddiesText = totalBaddies.textContent;

    let totalBaddiesTextNum = parseInt(totalBaddiesText);

// Did the cost variables by myself by referencing the above code
    let baddiesCost = document.getElementById("baddies-cost");

    let baddiesCostText = baddiesCost.textContent;

    let baddiesCostTextNum = parseInt(baddiesCostText);

// Did the cost myself
    let cheepCheepCost = 75
// Got help with everything below aside from the + baddies string
    let caughtCheepCheep = document.getElementById("caught-cheepcheep");

    let caughtCheepCheepCurr = parseInt(document.getElementById("caught-cheepcheep").textContent);

    let cheepCheepCount = parseInt(document.getElementById("cheepcheep-count").value);

    caughtCheepCheep.textContent = cheepCheepCount + caughtCheepCheepCurr;

    totalBaddies.textContent =  totalBaddiesTextNum + cheepCheepCount + " baddies";

// Did this one myself
    baddiesCost.textContent = baddiesCostTextNum + (cheepCheepCost * cheepCheepCount) + " coins"
})