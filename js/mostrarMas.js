const mostrarMasBtn = document.getElementById('mostrar-mas');
const contenedor_todos_MostrarMas = document.getElementById('sabores-container');
const contenedor_chocolates_MostrarMas = document.getElementById('chocolates-container');
const contenedor_maicena_MostrarMas = document.getElementById('maicena-container');
const contenedor_avena_MostrarMas = document.getElementById('avena-container');
const contenedor_frutales_MostrarMas = document.getElementById('frutales-container');
const contenedor_merengue_MostrarMas = document.getElementById('merengue-container');
const contenedor_integrales_MostrarMas = document.getElementById('integrales-container');
const contenedor_cajas_MostrarMas = document.getElementById('cajas-container');
let mostrarMas = false;

const chocolates_MostrarMas = contenedor_chocolates_MostrarMas.querySelectorAll('.card-style');
chocolates_MostrarMas.forEach(producto => {
  producto.style.display = 'flex';
});
const maicena_MostrarMas = contenedor_maicena_MostrarMas.querySelectorAll('.card-style');
maicena_MostrarMas.forEach(producto => {
  producto.style.display = 'flex';
});
const avena_MostrarMas = contenedor_avena_MostrarMas.querySelectorAll('.card-style');
avena_MostrarMas.forEach(producto => {
  producto.style.display = 'flex';
});
const frutales_MostrarMas = contenedor_frutales_MostrarMas.querySelectorAll('.card-style');
frutales_MostrarMas.forEach(producto => {
  producto.style.display = 'flex';
});
const merengue_MostrarMas = contenedor_merengue_MostrarMas.querySelectorAll('.card-style');
merengue_MostrarMas.forEach(producto => {
  producto.style.display = 'flex';
});
const integrales_MostrarMas = contenedor_integrales_MostrarMas.querySelectorAll('.card-style');
integrales_MostrarMas.forEach(producto => {
  producto.style.display = 'flex';
});
const cajas_MostrarMas = contenedor_cajas_MostrarMas.querySelectorAll('.card-style');
cajas_MostrarMas.forEach(producto => {
  producto.style.display = 'flex';
});

function mostrarOcultarProductos() {
  const todos_MostrarMas = contenedor_todos_MostrarMas.querySelectorAll('.card-style');
  todos_MostrarMas.forEach((producto, index) => {
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
