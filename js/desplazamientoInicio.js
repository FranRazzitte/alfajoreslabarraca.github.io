const botonFlotante = document.getElementById('btn_flotante');

botonFlotante.addEventListener('click', () => {
  scrollToTop(500);
});

function scrollToTop(duration) {
  const startPosition = window.pageYOffset;
  const distance = -startPosition;
  const startTime = performance.now();

  function step(timestamp) {
    const currentTime = timestamp - startTime;
    const progress = Math.min(currentTime / duration, 1);
    const ease = easeOutCubic(progress);
    window.scrollTo(0, startPosition + distance * ease);

    if (currentTime < duration) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    botonFlotante.classList.add('mostrar');
  } else {
    botonFlotante.classList.remove('mostrar');
  }
});