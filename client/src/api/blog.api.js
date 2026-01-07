const API_BASE = "http://localhost:5050/blog";

export async function fetchAllBlogs() {
  const res = await fetch(API_BASE);

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }
}
