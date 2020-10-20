const express = require("express");

const router = express.Router();

const Post = require("../models/Post");

// Return all post
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// return response based on text
router.get("/:text", async (req, res) => {
  const text = req.params.text;
  try {
    const post = await Post.find();
    let data = post.filter(element => element.title == text);
    res.json(data);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
