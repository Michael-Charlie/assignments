const express = require("express")
const scotchRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const scotchWhiskey = [
    {name: "Macallan 15", age: 15, type: "Single Malt", price: "$194.99", _id: uuidv4()},
    {name: "Ardbeg Uigeadail", age: "Non-age Statement", type: "Single Malt", price: "$114.99", _id: uuidv4()},
    {name: "The Glendronach Cask Strength Batch 11", age: "Non-age Statement", type: "Single Malt", price: "$109.99", _id: uuidv4()},
    {name: "The Deveron 12 yr", age: 12, type: "Single Malt", price: "$52.99", _id: uuidv4()},
    {name: "Monkey Shoulder", age: "Non-age Statement", type: "Blended Malt", price: "$31", _id: uuidv4()}
]

// Get all
scotchRouter.get("/", (req, res, next) => {
    req.body = scotchWhiskey
    next()
})

// Getting the "get" to fire? Idk how to describe this.
scotchRouter.use("/", (req, res, next) => {
    console.log("Get request received")
    res.send(req.body)
})

module.exports = scotchRouter