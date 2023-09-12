const openBtn = document.getElementById("openBtn");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
    pipModal.style.display = "block";
});

// Add an event listener to the close button
closeBtn.addEventListener("click", () => {
    pipModal.style.display = "none";
});