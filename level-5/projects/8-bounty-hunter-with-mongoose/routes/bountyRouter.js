const express = require("express")
const bountyRouter = express.Router()
const Bounties = require("../models/bounties")


    // Get all
    bountyRouter.get("/", (req, res, next) => {
        Bounties.find((err, bounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(bounty)
        })
    })

    // Get one
    // bountyRouter.get("/:bountyId", (req, res) => {
    //     const bountyId = req.params.bountyId
    //     const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    //     res.send(foundBounty)
    // })

    // Post one
    bountyRouter.post("/", (req, res, next) => {
        const newBounty = new Bounties(req.body)
        newBounty.save((err, savedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(savedBounty)
        })
    })

    // Update one
    bountyRouter.put("/:bountyId", (req, res, next) => {
        Bounties.findOneAndUpdate(
            { _id: req.params.bountyId},
            req.body,
            {new: true},
            (err, updatedBounty) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedBounty)
            }
        )
    })
    
    //Delete one
    bountyRouter.delete("/:bountyId", (req, res) => {
        Bounties.findOneAndDelete(
            { _id: req.params.bountyId},
            (err, deletedBounty) => {
                if(err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(`Successfully deleted bounty ${deletedBounty.firstName} ${deletedBounty.lastName} from the database.`)
            }
        )
    })

    module.exports = bountyRouter