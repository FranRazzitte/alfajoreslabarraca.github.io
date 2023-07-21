const mostrarMasBtn = document.getElementById('mostrar-mas');
const productosContainer = document.getElementById('sabores');

let mostrarMas = false;

function mostrarOcultarProductos() {
  const productos = productosContainer.querySelectorAll('.card-style');
  productos.forEach((producto, index) => {
    if (mostrarMas) {
      if (index >= 4) {
        producto.style.display = 'flex';
      }
    } else {
      if (index >= 4) {
        producto.style.display = 'none';
      }
    }
  });

  mostrarMasBtn.innerHTML = mostrarMas ? '<i style="font-size: 22px;" class="bx bx-chevron-up"></i> Mostrar menos' : '<i style="font-size: 22px;" class="bx bx-chevron-down"></i> Mostrar más';
}

mostrarOcultarProductos();

mostrarMasBtn.addEventListener('click', () => {
  mostrarMas = !mostrarMas;
  mostrarOcultarProductos();
});
