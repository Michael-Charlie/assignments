const express = require("express")
const movieRouter = express.Router()
const Movie = require("../models/movie.js")

// Get all
// Manufactured an error here by changing movies to movie. Error handling without morgan is a bit more tedious.
movieRouter.get("/", (req, res, next) => {
    Movie.find((err, movies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})
// Get one
movieRouter.get("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    if(!foundMovie){
        const error = new Error(`The item with id ${movieId} was not found.`)
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundMovie)
})
// Get by genre
movieRouter.get("/search/genre", (req, res, next) => {
    Movie.find({ genre: req.query.genre}, (err, movies) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
})

// Post one
movieRouter.post("/", (req, res, next) => {
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMovie)
    })
})

// Delete One
movieRouter.delete("/:movieId", (req, res, next) => {
    Movie.findOneAndDelete({ _id: req.params.movieId}, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from the database.`)
    })
})

// Update one
movieRouter.put("/:movieId", (req, res, next) => {
    Movie.findOneAndUpdate(
        { _id: req.params.movieId}, // find this one to update
        req.body, // update the object with this data
        { new: true}, // send back the updated version
        (err, updatedMovie) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMovie)
        }
    )
})

// Reduce having to add the route "/" for requests using this syntax:

// movieRouter.route("/")
//     .get((req, res) => {
//     res.send(movies)
// })
//     .post((req, res) => {
//     const newMovie = req.body
//     newMovie._id = uuidv4()
//     movies.push(newMovie)
//     res.send(`successfully added ${newMovie.title} to the database`)
// })

module.exports = movieRouter