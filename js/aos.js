const aosEffects = [
  "fade-up",
  "fade-down",
  "fade-left",
  "fade-right",
  "fade-up-right",
  "fade-up-left",
  "fade-down-right",
  "fade-down-left",
];

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("img:not(.icon)").forEach((img) => {
    const effect = aosEffects[Math.floor(Math.random() * aosEffects.length)];
    img.setAttribute("data-aos", effect);
  });

  AOS.init({
    duration: 800,
    once: true,
    offset: 10,
  });
});

window.addEventListener("load", () => {
  AOS.refresh();
});

window.addEventListener("pageshow", () => {
  AOS.refreshHard();
});
