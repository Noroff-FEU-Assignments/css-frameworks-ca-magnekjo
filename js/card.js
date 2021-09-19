const cards = document.querySelectorAll(".card");

if (window.innerWidth < 900) {
  for (i = 4; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
}
