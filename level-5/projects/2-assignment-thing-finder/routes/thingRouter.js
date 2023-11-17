const express = require("express")
const thingRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const things = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuidv4()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuidv4()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuidv4()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuidv4()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuidv4()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuidv4()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuidv4()
    }
]

// Get all
thingRouter.get("/", (req, res) => {
    res.send(things)
})

// Get one
thingRouter.get("/:thingId", (req, res) => {
    const thingId = req.params.thingId
    const foundThing = things.find(thing => thing._id === thingId)
    res.send(foundThing)
})

// Get by type
thingRouter.get("/search/type", (req, res) => {
    console.log(req.query)
    const type = req.query.type
    const filteredType = things.filter(thing => thing.type === type)
    res.send(filteredType)
})

module.exports = thingRouter