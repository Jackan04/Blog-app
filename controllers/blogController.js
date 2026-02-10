import { Post } from "../models/post.js";
import { formatPost } from "../helpers.js";

async function blog_index(req, res) {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    const formattedPosts = posts.map((post) => formatPost(post));
    res.render("index", { title: "Home", posts: formattedPosts });
  } catch (error) {
    console.error(error);
  }
}

async function helloWorld() {
  
}

async function blog_about(req, res) {
  res.render("about", { title: "About" });
}

async function blog_create_get(req, res) {
  res.render("create", { title: "Create" });
}

async function blog_create_post(req, res) {
  try {
    const post = new Post({
      title: req.body.title,
      preview: req.body.preview,
      body: req.body.body,
    });
    post.save();
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
}

async function blog_details(req, res) {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    const formattedPost = formatPost(post);
    res.render("post", { title: post.title, post: formattedPost });
  } catch (error) {
    res.status(404).render("404", { title: "404 - Post Not Found" });
  }
}

async function blog_update_get(req, res) {
  const postId = req.params.id;
  try {
    const post = await Post.findById(postId);
    res.render("update", { title: "Edit", post: post });
  } catch (error) {
    console.error(error);
  }
}

async function blog_update_post(req, res) {
  const postId = req.params.id;
  const updatedPost = {
    title: req.body.title,
    preview: req.body.title,
    body: req.body.body,
  };

  try {
    await Post.findByIdAndUpdate(postId, updatedPost);
    console.log("Post updated", updatedPost);
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
}

async function blog_delete_post(req, res) {
  const postId = req.params.id;
  try {
    await Post.findByIdAndDelete(postId);
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
}

export default {
  blog_index,
  blog_about,
  blog_create_get,
  blog_create_post,
  blog_delete_post,
  blog_update_get,
  blog_update_post,
  blog_details,
};
