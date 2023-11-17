for (var i = 0; i < 10; i++)
    console.log(i)

for (var j = 10 - 1; j >= 0; j--)
console.log(j)

const fruit = ["banana", "orange", "apple", "kiwi"]

for (var f = 0; f < fruit.length; f++)
    console.log(fruit[f])

//** */
const numbs = []

for (var n = 0; n < 10; n++)
numbs.push(n)
console.log(numbs)
//** */

for (var i = 0; i < 100; i++)
    if(i % 2 === 0)
    console.log(i)

const fruitB = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
const newFruits = []
for (var i = 0; i < fruitB.length; i+= 2)
    newFruits.push(fruitB[i])
    console.log(newFruits)
// Used this link to figure out ^ https://stackoverflow.com/questions/30713250/access-every-other-item-in-an-array-javascript
