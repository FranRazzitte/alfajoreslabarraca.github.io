const body = document.body;
const ventanaEmergente = document.getElementById('ventana');
const tituloProducto = document.getElementById('tituloProducto');
const descProducto = document.getElementById('descProducto');
const precioProducto = document.getElementById('precio');
const sinPrecio = document.getElementById('sinPrecio');
const conPrecio = document.getElementById('conPrecio');
const sinStock = document.getElementById('sinStock');
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

    if (precio == "") {
      conPrecio.style.display = 'none';
      sinStock.style.display = 'none';
      sinPrecio.style.display = 'block';
      linkProducto.classList = 'btn btn-block btn-primary mb-3 w-100'
    } else if (precio == "SIN") {
      sinStock.style.display = 'block';
      conPrecio.style.display = 'none';
      sinPrecio.style.display = 'none';
      linkProducto.classList = 'btn btn-block disabled mb-3 w-100'
    } else {
      conPrecio.style.display = 'block';
      sinStock.style.display = 'none';
      sinPrecio.style.display = 'none';
      linkProducto.classList = 'btn btn-block btn-primary mb-3 w-100'
    }

    ventanaEmergente.style.display = 'block';
    body.style.overflow = 'hidden';

    history.pushState({ ventanaEmergenteOpen: true }, '');

    window.addEventListener('popstate', closeVentanaEmergente);
    window.addEventListener('hashchange', closeVentanaEmergente);
  });
}

document.getElementById('cerrar-ventana').addEventListener('click', function() {
  ventanaEmergente.style.display = 'none';
  body.style.overflow = 'auto';

  history.pushState({ ventanaEmergenteOpen: false }, '');
});

function closeVentanaEmergente() {
  ventanaEmergente.style.display = 'none';
  body.style.overflow = 'auto';

  window.removeEventListener('popstate', closeVentanaEmergente);
  window.removeEventListener('hashchange', closeVentanaEmergente);
}
