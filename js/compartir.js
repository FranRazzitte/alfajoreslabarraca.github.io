const btnCompartir = document.getElementById('btnCompartir');

btnCompartir.addEventListener('click', async () => {
  try {
    if (navigator.share) {
      const url = window.location.href;
      await navigator.share({
        title: document.title,
        url: url
      });
      console.log('Enlace compartido con éxito!');
    } else {
      // Si la API Web Share no está disponible, mostrar mensaje de error
      btnCompartir.style.display = 'none';
    }
  } catch (error) {
    console.error('Error al compartir:', error);
  }
});
