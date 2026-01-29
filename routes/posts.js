const express = require("express");
const router = express.Router();
const PostController = require("../controllers/postController.js");

router.post("/create", PostController.createPost);
router.get("/", PostController.getAllPosts);
router.get("/id/:id", PostController.getPostById);
router.get("/title/:title", PostController.getPostByTitle);
router.put("/id/:id", PostController.updatePost);
router.delete("/id/:id", PostController.deletePost);

module.exports = router;