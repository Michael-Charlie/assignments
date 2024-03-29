const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true,
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})
module.exports = mongoose.model("Comment", commentSchema)