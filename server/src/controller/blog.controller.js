import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
} from "../services/blog.service.js";

// CREATE
export function addBlog(req, res) {
  try {
    const { title, content, author } = req.body;
    const blog = createBlog(title, content, author);
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// READ ALL
export function readBlog(req, res) {
  res.status(200).json(getAllBlogs());
}

// READ ONE
export function readOneBlog(req, res) {
  try {
    const { id } = req.params;
    const blog = getBlogById(id);
    res.status(200).json(blog);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

// UPDATE
export function updateBlog(req, res) {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const blog = updateBlogById(id, title, content);
    res.json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// DELETE
export function deleteBlog(req, res) {
  try {
    const { id } = req.params;
    deleteBlogById(id);
    res.json({ message: "Blog deleted successfully." });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}
