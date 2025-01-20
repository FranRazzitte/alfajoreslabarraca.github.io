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

if (document.title == 'Nosotros · Alfajores La Barraca' || document.title == "Preguntas Frecuentes · Alfajores La Barraca" || document.title == "Página no encontrada · Alfajores La Barraca") {
  const btnCompartir = document.getElementById('btnCompartir');
  compartirEnlace(btnCompartir);
} else {
  const btnCompartir = document.getElementById('btnCompartir');
  const btnCompartirProducto = document.getElementById('btnCompartirProducto');
  
  compartirEnlace(btnCompartir);
  compartirEnlace(btnCompartirProducto);
}