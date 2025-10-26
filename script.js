const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
    card.classList.add("glow");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("glow");
    card.style.removeProperty("--x");
    card.style.removeProperty("--y");
  });
});

