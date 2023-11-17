const express = require("express")
const todoRouter = express.Router()
const {v4: uuidv4} = require("uuid")

const toDos = [
    {
    name: "Work",
    description: "BTB",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuidv4()
    },
    {
    name: "Gym",
    description: "2 hours",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuidv4()
    },
    {
    name: "V School",
    description: "Code",
    imageUrl: "http://www.myimage....",
    completed: false,
    _id: uuidv4()
    }
]

// Get all
todoRouter.get("/", (req, res) => {
    res.send(toDos)
})

// Get one
todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = toDos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

// Update one
todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = toDos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(toDos[todoIndex], req.body)
    res.send(updatedTodo)
})

// Delete one
todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = toDos.findIndex(todo => todo._id === todoId)
    toDos.splice(todoIndex, 1)
    res.send("Successfully completed todo!")
})

module.exports = todoRouter