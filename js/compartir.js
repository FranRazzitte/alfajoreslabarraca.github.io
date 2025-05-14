function compartirEnlace(btn) {
  btn.addEventListener('click', async () => {
    try {
      if (navigator.share) {
        const url = window.location.href;
        await navigator.share({
          title: document.title,
          url: url
        });
        console.log('Enlace compartido con éxito!');
      } else {
        btn.style.display = 'none';
      }
    } catch (error) {
      console.error('Error al compartir:', error);
    }
  });
}

if (window.location.href.includes('productos')) {
  const btnCompartir = document.getElementById('btnCompartir');
  const btnCompartirProducto = document.getElementById('btnCompartirProducto');
  compartirEnlace(btnCompartir);
  compartirEnlace(btnCompartirProducto);
} else {
  const btnCompartir = document.getElementById('btnCompartir');
  compartirEnlace(btnCompartir);
}