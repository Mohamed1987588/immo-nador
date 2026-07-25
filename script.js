// Fonction pour faire défiler les images dans les sliders
function changerSlide(sliderId, direction) {
  const container = document.getElementById(sliderId);
  const slides = container.querySelectorAll('.slide');
  let activeIndex = 0;

  slides.forEach((slide, index) => {
    if (slide.classList.contains('active')) {
      activeIndex = index;
      slide.classList.remove('active');
    }
  });

  let newIndex = activeIndex + direction;
  if (newIndex >= slides.length) newIndex = 0;
  if (newIndex < 0) newIndex = slides.length - 1;

  slides[newIndex].classList.add('active');
}

// Système de filtre par quartier et type
document.addEventListener('DOMContentLoaded', () => {
  const selectQuartier = document.getElementById('select-quartier');
  const selectType = document.getElementById('select-type');
  const cards = document.querySelectorAll('.card');

  function filtrer() {
    const quartierVal = selectQuartier.value;
    const typeVal = selectType.value;

    cards.forEach(card => {
      const qMatch = quartierVal === 'tous' || card.dataset.quartier === quartierVal;
      const tMatch = typeVal === 'tous' || card.dataset.type === typeVal;

      if (qMatch && tMatch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  selectQuartier.addEventListener('change', filtrer);
  selectType.addEventListener('change', filtrer);
});
