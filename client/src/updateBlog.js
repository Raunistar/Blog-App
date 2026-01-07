const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const publishBtn = document.getElementById("publishBtn");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

publishBtn.addEventListener("click", () => {
  // later yahin pe localStorage / API call aayega
  alert("Blog published successfully!");
  modal.classList.remove("active");
});
