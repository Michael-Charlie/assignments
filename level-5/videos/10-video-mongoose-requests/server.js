const express = require("express")
const mongoose = require("mongoose")
const app = express()
const morgan = require("morgan")
require('dotenv').config()

const mongoURL = process.env.MONGODB_URI

// Middleware (for every request) - function that fires on the "in-between"

// mongodb+srv://Michael-Charlie:<password>@mike.40wpfng.mongodb.net/?retryWrites=true&w=majority

mongoose.set('strictQuery', true)

// Connect to DB
mongoose.connect(mongoURL, 
(err) => console.log('Connected to database', err))

app.use(express.json()) // Looks for a request body, and turns it into 'req.body'
app.use(morgan("dev")) // Logs requests to the console - using morgan in it's dev environment


app.use("/api/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvShowRouter.js"))

// Backend request routing using Vite - any request from the front end will use the “/api” endpoint for routing - see below example
// app.use("/api/chores", require("./routes/choresRouter.js"))

// Error handler

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

// Server listen

app.listen(9000, () => {
    console.log("The server is running on port 9000")
})