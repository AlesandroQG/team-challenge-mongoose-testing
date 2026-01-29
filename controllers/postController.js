const Post = require("../models/Post.js");

const PostController = {
    createPost: async (req, res) => {
        try {
            const post = await Post.create(req.body);
            res.status(201).json(post);
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Error en la base de datos"});
        }
    },
    getAllPosts: async (req, res) => {
        try {
            const posts = await Post.find();
            res.status(201).json(posts);
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Error en la base de datos"});
        }
    },
    getPostById: async (req, res) => {
        const id = req.params.id;
        try {
            const post = await Post.findById(id);
            if (!post) {
                res.status(404).json({message: "No existe una publicación con ese id"});
            }
            res.status(201).json(post);
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Error en la base de datos"});
        }
    },
    getPostByTitle: async (req, res) => {
        const title = req.params.title;
        try {
            const post = await Post.findOne({title: title});
            if (!post) {
                res.status(404).json({message: "No existe una publicación con ese título"});
            }
            res.status(201).json(post);
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Error en la base de datos"});
        }
    },
    updatePost: async (req, res) => {
        const id = req.params.id;
        const newTitle = req.body.title;
        const newBody = req.body.body;
        if (!newTitle || !newBody) {
            res.status(400).json({message: "El título y el body tienen que ser válidos"});
        }
        try {
            const post = await Post.findByIdAndUpdate(id, {title: newTitle, body: newBody});
            if (!post) {
                res.status(404).json({message: "There is no Post with that id"});
            }
            const updatedPost = await Post.findById(id);
            res.status(201).json(updatedPost);
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Error en la base de datos"});
        }
    },
    deletePost: async (req, res) => {
        const id = req.params.id;
        try {
            const post = await Post.findById(id);
            if (!post) {
                res.status(404).json({message: "There is no Post with that id"});
            }
            const deleteCount = await Post.deleteOne({_id: id});
            res.status(201).json({message: "Post successfully deleted", deleteCount: deleteCount});
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Error en la base de datos"});
        }
    },
};

module.exports = PostController;