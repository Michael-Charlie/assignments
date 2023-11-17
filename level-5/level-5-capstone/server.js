//mYoFzHGCZR6vcQle || mongodb+srv://michaelcharlie:<password>@lv5capstone.cxg6f3f.mongodb.net/

// Import dependencies

const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// Middleware

app.use(express.json())

app.use(morgan("dev"))

mongoose.set("strictQuery", true)
mongoose.connect("mongodb+srv://michaelcharlie:mYoFzHGCZR6vcQle@lv5capstone.cxg6f3f.mongodb.net/", (err) => {
    console.log("Connected to database", err)
})

app.use("/api/mealplan", require("./routes/mealPlanRouter"))

app.use("/api/foodlog", require("./routes/foodLogRouter"))

app.use('/api/foodLogDay', require('./routes/foodLogDayRouter'))

// Error handler

app.use((err, req, res, next) => {
        console.log(err)
        return res.send({errMsg: err.message})
    })

// Launch server

app.listen(8000, () => {
    console.log("The server is running on port 8000.")
})