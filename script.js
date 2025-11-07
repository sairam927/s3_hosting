// Smooth Scroll for navigation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Auto year update
document.getElementById("year").textContent = new Date().getFullYear();

// Animated button
const learnBtn = document.getElementById("learnBtn");
learnBtn.addEventListener("click", () => {
  alert("Deployed using AWS S3 + Cloudflare + GitHub Actions 🚀");
  learnBtn.style.backgroundColor = "#00ffcc";
  setTimeout(() => (learnBtn.style.backgroundColor = "#ffcb05"), 1000);
});
