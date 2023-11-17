const express = require("express")
const app = express()

app.use(express.json())

app.use("/bounty", require("./routes/bountyRouter.js"))

app.listen(9000, () => {
    console.log("The server is running on port 9000.")
})