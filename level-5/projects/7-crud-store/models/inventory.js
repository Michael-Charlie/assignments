const mongoose = require("mongoose")
const Schema = mongoose.Schema

const inventorySchema = new Schema({
    item: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    datePosted: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)