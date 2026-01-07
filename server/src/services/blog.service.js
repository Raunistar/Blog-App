import Blog from "../model/blog.model.js";

const blogs = [];

// CREATE
export function createBlog(title, content, author) {
  if (!title || !content) {
    throw new Error("Title and content are required");
  }

  const blog = new Blog(title, content, author);
  blogs.push(blog);
  return blog;
}

// READ ALL
export function getAllBlogs() {
  return blogs;
}

// READ ONE
export function getBlogById(id) {
  const blog = blogs.find((blog) => blog.id === id);
  if (!blog) {
    throw new Error("Blog not found");
  }
  return blog;
}

// UPDATE
export function updateBlogById(id, title, content) {
  if (!title && !content) {
    throw new Error("Nothing to update");
  }

  const blog = blogs.find((blog) => blog.id === id);
  if (!blog) {
    throw new Error("Blog not found");
  }

  blog.updateBlog(content, title);
  return blog;
}
export function updateTitleById(id, title) {
  if (!title) {
    throw new Error("Nothing to update");
  }

  const blog = blogs.find((blog) => blog.id === id);
  if (!blog) {
    throw new Error("Blog not found");
  }

  blog.updateBlog(id, title);
  return blog;
}
// DELETE
export function deleteBlogById(id) {
  const index = blogs.findIndex((blog) => blog.id === id);
  if (index === -1) {
    throw new Error("Blog not found");
  }

  blogs.splice(index, 1);
  return true;
}
