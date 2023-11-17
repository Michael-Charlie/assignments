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

bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database!`)
    })
    .put((req, res) => {
        res.send(`Successfully updated ${newBounty.firstName} ${newBounty.lastName}!`)
    })
    .delete((req, res) => {
        res.send(`Successfully deleted ${newBounty.firstName} ${newBounty.lastName} from the database!`)
    })

    module.exports = bountyRouter