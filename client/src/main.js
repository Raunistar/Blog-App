const blogCardContainer = document.getElementById("blog_card");

// Empty state
function showEmptyMessage(message) {
  blogCardContainer.innerHTML = "";
  const emptyMessage = document.createElement("p");
  emptyMessage.classList.add("empty_message");
  emptyMessage.innerHTML = message;
  blogCardContainer.appendChild(emptyMessage);
}

async function loadBlogs() {
  try {
    const response = await fetch("http://localhost:5050/blog/");
    if (!response.ok) throw new Error("Network response was not OK");

    const blogs = await response.json();

    if (!Array.isArray(blogs) || blogs.length === 0) {
      showEmptyMessage(
        'No blogs available yet. <a href="./views/createBlog.html" class="create-link">Click here to create one!</a>'
      );
      return;
    }

    blogCardContainer.innerHTML = "";

    blogs.forEach((blog) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <div class="blog_card_header">
          <h3 class="blog_title">
            ${
              blog.title.length > 40
                ? blog.title.slice(0, 37) + "..."
                : blog.title
            }
          </h3>

          <div class="card_actions">
            <a href="./views/updateBlog.html?id=${
              blog.id
            }" class="edit-blog-btn">
              <button class="edit_blog_btn">
                <i class="fa fa-edit"></i>
              </button>
            </a>

            <button class="delete_blog_btn" data-id="${blog.id}">
              <i class="fa fa-trash"></i>
            </button>
          </div>
        </div>

        <p class="blog_content">
          ${blog.content.slice(0, 120)}...
        </p>

        <button class="read_more_btn btn">
          Read more...
        </button>

        <div class="blog_card_footer">
          <span class="publish_time">
            ${new Date(blog.createdAt).toLocaleDateString()}
          </span>
          <span class="author_name">
            ${blog.author || "Anonymous"}
          </span>
        </div>
      `;

      /* ---------- READ MORE ---------- */
      card.querySelector(".read_more_btn").addEventListener("click", (e) => {
        e.stopPropagation();
        window.location.href = `./views/readBlog.html?id=${blog.id}`;
      });

      /* ---------- DELETE ---------- */
      card
        .querySelector(".delete_blog_btn")
        .addEventListener("click", async (e) => {
          e.stopPropagation();

          const blogId = e.currentTarget.dataset.id;

          const confirmDelete = confirm(
            "Are you sure you want to delete this blog?"
          );
          if (!confirmDelete) return;

          try {
            const res = await fetch(`http://localhost:5050/blog/${blogId}`, {
              method: "DELETE",
            });

            if (!res.ok) throw new Error("Delete failed");

            card.remove();

            if (blogCardContainer.children.length === 0) {
              showEmptyMessage("No blogs available.");
            }
          } catch (err) {
            console.error(err);
            alert("Failed to delete blog");
          }
        });

      blogCardContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error loading blogs:", error);
    showEmptyMessage("Failed to load blogs. Please try again later.");
  }
}

loadBlogs();
