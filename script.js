const cards = document.querySelectorAll(".card");
const wrapper = document.querySelector(".articles");

wrapper.addEventListener("mousemove", function (event) {
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.querySelector(".card-content").style.background = `radial-gradient(960px circle at ${x}px ${y}px, rgba(59, 248, 251, 0.15), #1e1f22)`;
  });
});

wrapper.addEventListener("mouseleave", function () {
  cards.forEach((card) => {
    card.querySelector(".card-content").style.background = "#1e1f22";
  });
});

