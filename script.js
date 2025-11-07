// Smooth scroll for nav links
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

// Button animation
const learnBtn = document.getElementById("learnBtn");
learnBtn.addEventListener("click", () => {
  alert("This website is hosted using AWS S3 + Cloudflare + GitHub Actions 🚀");
});
