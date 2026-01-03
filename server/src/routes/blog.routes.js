import { Router } from "express";
import {
  addBlog,
  deleteBlog,
  readBlog,
  readOneBlog,
  updateBlog,
} from "../controller/blog.controller.js";

export const BlogRoutes = Router();

BlogRoutes.post("/add", addBlog); // create
BlogRoutes.get("/", readBlog); // read all
BlogRoutes.get("/:id", readOneBlog); // read one
BlogRoutes.put("/:id", updateBlog); // update
BlogRoutes.delete("/:id", deleteBlog); // delete
