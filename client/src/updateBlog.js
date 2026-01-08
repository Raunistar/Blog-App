const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const publishBtn = document.getElementById("publishBtn");

const titleInput = document.getElementById("blogTitle");
const contentInput = document.getElementById("blogContent");

const params = new URLSearchParams(window.location.search);
const blogId = params.get("id");

// 1️⃣ LOAD EXISTING BLOG
async function loadBlogForUpdate() {
  try {
    if (!blogId) throw new Error("No blog id");

    const res = await fetch(`http://localhost:5050/blog/${blogId}`);
    if (!res.ok) throw new Error("Blog not found");

    const blog = await res.json();
    titleInput.value = blog.title;
    contentInput.value = blog.content;
  } catch (err) {
    alert("Unable to load blog for update");
    window.location.href = "../index.html";
  }
}

loadBlogForUpdate();

// 2️⃣ OPEN MODAL
openModalBtn.addEventListener("click", () => {
  if (!titleInput.value.trim() || !contentInput.value.trim()) {
    alert("Title and content are required!");
    return;
  }
  modal.classList.add("active");
});

// 3️⃣ CLOSE MODAL
closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// 4️⃣ UPDATE BLOG
publishBtn.addEventListener("click", async () => {
  const updatedBlog = {
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  };

  try {
    const response = await fetch(`http://localhost:5050/blog/${blogId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBlog),
    });

    if (!response.ok) throw new Error("Update failed");

    alert("Blog updated successfully!");
    modal.classList.remove("active");
    window.location.href = "../index.html";
  } catch (error) {
    console.error(error);
    alert("Something went wrong while updating");
  }
});
