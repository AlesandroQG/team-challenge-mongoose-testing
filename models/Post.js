const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Post = new mongoose.model("Post", PostSchema);

module.exports = Post;