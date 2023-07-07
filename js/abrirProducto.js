const body = document.body;
const ventanaEmergente = document.getElementById('ventana');
const tituloProducto = document.getElementById('tituloProducto');
const descProducto = document.getElementById('descProducto');
const precioProducto = document.getElementById('precio');
const imgProducto = document.getElementById('imgProducto');
const linkProducto = document.getElementById('linkProducto');

const elementosTarjeta = document.getElementsByClassName('tarjeta');
for (let i = 0; i < elementosTarjeta.length; i++) {
  elementosTarjeta[i].addEventListener('click', function() {
    const titulo = elementosTarjeta[i].querySelector('.titulo').textContent;
    const descripcion = elementosTarjeta[i].querySelector('.descripcion').innerHTML;
    const precio = elementosTarjeta[i].querySelector('.precio').textContent;
    const imagen = elementosTarjeta[i].querySelector('.img').src;
    const link = elementosTarjeta[i].querySelector('.linkCatalogo').href;

    tituloProducto.textContent = titulo;
    descProducto.innerHTML = descripcion;
    precioProducto.textContent = precio;
    imgProducto.src = imagen;
    linkProducto.href = link;

    ventanaEmergente.style.display = 'block';
    body.style.overflow = 'hidden';
  });
}

document.getElementById('cerrar-ventana').addEventListener('click', function() {
  ventanaEmergente.style.display = 'none';
  body.style.overflow = 'auto';
});