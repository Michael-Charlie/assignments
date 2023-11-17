const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// Middleware

app.use(express.json())

app.use(morgan("dev"))

// MqLcV1ydKC9ZcXsk // Gnmqs5sgv7ZPnK9y mongodb+srv://michaelcharlie:<password>@cluster0.rq2bdco.mongodb.net/
mongoose.set("strictQuery", true)
mongoose.connect("mongodb+srv://michaelcharlie:Gnmqs5sgv7ZPnK9y@cluster0.rq2bdco.mongodb.net/", (err) => {
    console.log("Connected to database.", err)
})

app.use("/api/inventory", require("./routes/inventoryRouter"))

// Error handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("The server is running on port 9000.")
})