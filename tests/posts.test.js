const request = require("supertest");
const app = require("../index.js");
const Post = require("../models/Post.js");

describe("testing/posts", () => {
    const post = {
        title: "redes sociales",
        body: "redes sociales son guay"
    };
    
    test("Create a post", async () => {
        let postsCount = await Post.countDocuments({});
        expect(postsCount).toBe(0);
        const resPost = await request(app).post("/create").send(post).expect(201);
        postsCount = await Post.countDocuments({});
        expect(postsCount).toBe(1);
        expect(resPost.body._id).toBeDefined();
        expect(resPost.body.createdAt).toBeDefined();
        expect(resPost.body.updatedAt).toBeDefined();
    });
    
    afterAll(async () => {
        await Post.deleteMany({});
    });
});
