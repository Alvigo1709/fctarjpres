// 1) Referencia a la tarjeta
const card = document.getElementById('card');

// 2) Alterna el estado de giro: frente <-> reverso
function toggleFlip(){
  card.classList.toggle('flip');
}

// 3) Giro en escritorio por click
card.addEventListener('click', toggleFlip, { passive: true });

// 4) Giro en móvil por tap (touchend) y evitamos zoom/selección accidental
card.addEventListener('touchend', (e) => {
  e.preventDefault();
  toggleFlip();
}, { passive: false });

// 5) Anti-zoom por doble‑tap (iOS/Android)
let lastTouch = 0;
document.addEventListener('touchend', (e) => {
  const now = Date.now();
  if (now - lastTouch < 350) {
    e.preventDefault();
  }
  lastTouch = now;
}, { passive: false });
