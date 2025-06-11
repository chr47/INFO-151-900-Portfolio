const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  const target = e.target;
  if (!navLinks.contains(target) && !burger.contains(target)) {
    navLinks.classList.remove("active");
  }
});
