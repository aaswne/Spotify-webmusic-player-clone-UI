document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".buttonActive");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove .active from all buttons
      buttons.forEach(btn => btn.classList.remove("active"));

      // Add .active to the clicked button
      button.classList.add("active");
    });
  });
});
