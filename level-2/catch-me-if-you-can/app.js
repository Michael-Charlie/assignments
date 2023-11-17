function sum(x, y){
  if (x % 1 === 0 && y % 1 === 0){
    return x + y;
  }
  else throw "I am an error"
}
try {
console.log(sum(5, 10))
}

catch (err){
    console.log(err)
}

var user = {username: "sam", password: "123abc"};
function login(username, password){
  if (username === "sam" && password === "123abc"){
    return "Login successful!"
  }
  else throw "Wrong username or password"
}

try {
    console.log(login("hello", "123abc"))
}
catch (err){
    console.log(err)
}