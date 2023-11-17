const express = require("express")
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hi")
})
app.use("/things", require("./routes/thingRouter.js"))




app.listen(9000, () => {
    console.log("The server is running on port 9000.")
})

// app.listen(8001, (err) => {
//             if (err) {
//                 throw new Error(err);
//             }
// console.log("App is listening")
// })