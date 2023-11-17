function total(arr) {
   const result = arr.reduce(function (final, num){
    const sum = final + num
    return sum
},0)
return result
}

console.log(total([1,2,3])); // 6

// function stringConcat(arr) {
//    const result = arr.reduce(function (final, curr){
//     const final = curr.toString()
//     return final
//    })
//    return result
// }

function stringConcat(arr) {
   const result = arr.reduce(function (final, curr){
    return final += curr.toString()
   },"")
   return result
}

console.log(stringConcat([1,2,3])); // "123"


function totalVotes(arr) {
   const result = arr.reduce(function (final, voter){
    if (voter.voted === true){
        final++
    }
    return final
   },0)
   return result
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7

function shoppingSpree(arr) {
   const result = arr.reduce(function (final, prices){
    const sum = final + prices.price
    return sum
   },0)
   return result
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

function flatten(arr) {
   const result = arr.reduce(function (final, curr){
    return [...final, ...curr]
   },[])
   return result
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
const result = arr.reduce(function (final, curr){
    if (curr.age <= 25){
        final.numYoungPeople++
    }
    else if (curr.age > 25 && curr.age <= 35){
        final.numMidPeople++
    }
    else final.numOldPeople++
    
    if (curr.age <= 25 && curr.voted === true){
        final.numYoungVotes++
    }
    else if (curr.age > 25 && curr.age <=35 && curr.voted === true){
        final.numMidVotes++
    }
    else if (curr.age > 35 && curr.voted === true){
        final.numOldVotes++
    }
    return final
},{numYoungVotes: 0, numYoungPeople: 0, numMidVotes: 0, numMidPeople: 0, numOldVotes: 0, numOldPeople: 0})
return result
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
