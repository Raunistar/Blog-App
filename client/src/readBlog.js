const params = new URLSearchParams(window.location.search);
const blogId = params.get("id");

async function loadSingleBlog() {
  try {
    if (!blogId) throw new Error("No blog ID provided");

    const response = await fetch(`http://localhost:5050/blog/${blogId}`);
    if (!response.ok) throw new Error("Blog not found");

    const blog = await response.json();
    if (!blog || !blog.id) throw new Error("Blog not found");

    document.querySelector(".full_blog_title").innerText = blog.title;
    document.querySelector(".blog_content").innerText = blog.content;
    document.querySelector(".publish_time").innerText = new Date(
      blog.createdAt
    ).toLocaleDateString();
    document.querySelector(".author_name").innerText =
      blog.author || "Anonymous";
  } catch (error) {
    console.error(error);
    document.querySelector(
      ".blog_content_container"
    ).innerHTML = `<p class="empty_message">Blog not found. <a href="../index.html" class="create-link">Go back to home</a></p>`;
  }
}

loadSingleBlog();
