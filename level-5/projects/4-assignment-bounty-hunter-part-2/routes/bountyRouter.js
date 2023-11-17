const express = require("express")
const bountyRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const bounties = [
    {firstName: "Tom", lastName: "Riddle", isAlive: true, bounty: 7, type: "Death Eater", _id: uuidv4()},

    {firstName: "Harry", lastName: "Potter", isAlive: true, bounty: 7, type: "OOTP", _id: uuidv4()},

    {firstName: "Sirius", lastName: "Black", isAlive: false, bounty: 5, type: "OOTP", _id: uuidv4()},

    {firstName: "Bellatrix", lastName: "Lestrange", isAlive: true, bounty: 3, type: "Death Eater", _id: uuidv4()},

    {firstName: "Draco", lastName: "Malfony", isAlive: true, bounty: 1, type: "Death Eater", _id: uuidv4()},
]

    // Get all
    bountyRouter.get("/", (req, res) => {
        res.send(bounties)
    })

    // Get one
    bountyRouter.get("/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const foundBounty = bounties.find(bounty => bounty._id === bountyId)
        res.send(foundBounty)
    })

    // Post one
    bountyRouter.post("/", (req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`)
    })

    // Update one
    bountyRouter.put("/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
        res.send(updatedBounty)
    })
    
    //Delete one
    bountyRouter.delete("/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        bounties.splice(bountyIndex, 1)
        res.send("Successfully deleted bounty!")
    })

    module.exports = bountyRouter