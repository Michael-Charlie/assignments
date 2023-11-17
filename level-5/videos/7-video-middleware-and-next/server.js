const express = require("express")
const app = express()
const {v4: uuidv4} = require("uuid")

app.use(express.json())

app.use("/items", (req, res, next) => {
    console.log("The items middleware was executed")
    next()
})

app.get("/items", (req, res, next) => {
    req.body = {name: "Rick"}
    next()
})

app.use("/items", (req, res, next) => {
    console.log("Get request received")
    res.send(req.body)
})

app.listen(9000, () => {
    console.log("The port is 9000.")
})