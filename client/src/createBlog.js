const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const publishBtn = document.getElementById("publishBtn");

const titleInput = document.getElementById("blogTitle");
const contentInput = document.getElementById("blogContent");
const authorInput = document.getElementById("blogAuthor");

// Open modal
openModalBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

// Close modal
closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Publish blog
publishBtn.addEventListener("click", async () => {
  const title = titleInput.value.trim();
  const content = contentInput.value.trim();
  const author = authorInput.value.trim() || "Anonymous";

  // Basic validation
  if (!title || !content) {
    alert("Title and content are required");
    return;
  }

  try {
    const response = await fetch("http://localhost:5050/blog/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        author,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create blog");
    }

    // Success
    modal.classList.remove("active");
    window.location.href = "../index.html";
  } catch (error) {
    console.error(error);
    alert("Something went wrong while publishing the blog");
  }
});
