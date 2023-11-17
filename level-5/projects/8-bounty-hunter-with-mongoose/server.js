const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()
const morgan = require("morgan")

app.use(express.json())

app.use(morgan("dev"))

mongoose.set("strictQuery", true)

mongoose.connect("mongodb+srv://michaelcharlie:2E2v4Xsinvm6HchC@bounties.lgggjdo.mongodb.net/", (err) => {
    console.log("Connected to databse.", err)
})

app.use("/api/bounty", require("./routes/bountyRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log("The server is running on port 9000.")
})

// 2E2v4Xsinvm6HchC