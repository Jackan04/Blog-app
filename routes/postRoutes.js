import express from "express";
import blogController from "../controllers/blogController.js";

const router = express.Router();

router.get("/", blogController.blog_index);

router.get("/about", blogController.blog_about);

router.get("/create", blogController.blog_create_get);

router.post("/create-post", blogController.blog_create_post);

router.get("/post/:id", blogController.blog_details);

router.get("/post/update/:id", blogController.blog_update_get);

router.post("/update-post/:id", blogController.blog_update_post);

router.post("/post/:id", blogController.blog_delete_post);

export default router;
