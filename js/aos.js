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

document.querySelectorAll("img").forEach((img) => {
  const effect = aosEffects[Math.floor(Math.random() * aosEffects.length)];
  img.setAttribute("data-aos", effect);
});
