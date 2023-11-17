const express = require("express")
const app = express()
const morgan = require("morgan")

// Middleware (for every request) - function that fires on the "in-between"

app.use(express.json()) // Looks for a request body, and turns it into 'req.body'
app.use(morgan("dev")) // Logs requests to the console - using morgan in it's dev environment


app.use("/api/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvShowRouter.js"))

// Backend request routing using Vite - any request from the front end will use the “/api” endpoint for routing - see below example
// app.use("/api/chores", require("./routes/choresRouter.js"))


// Server listen

app.listen(9000, () => {
    console.log("The server is running on port 9000")
})