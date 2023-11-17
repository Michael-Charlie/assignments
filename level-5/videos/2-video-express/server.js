// First express server

const express = require("express")

const app = express()

// Building array to pass to get request
const users = [
    {name: "nameless", age: 20},
    {name: "catacombs", age: 20},
    {name: "lithium", age: 20},
    {name: "remedy", age: 20},
    {name: "tylenol", age: 20}
]

// Building a route 
// First argument is optional but is the endpoint
// Second argument is the callback function
app.get("/users", (req, res) => {
    res.send(users)
})

// Needs 2 arguments 1: PORT    2: Callback function
app.listen(9000, () => {
    console.log("the server is running on port 9000")
})