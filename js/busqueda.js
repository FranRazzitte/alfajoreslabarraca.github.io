const searchInput = document.getElementById('buscar');
const saboresBuscar = document.getElementById('sabores');
const saborBuscar = saboresBuscar.getElementsByClassName('tarjeta');
const resultados = document.getElementById('busqueda').querySelector('.resultado');
const divNav2 = document.querySelector('.navDiv2');

searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();

  let resultadosHTML = '';

  for (let i = 0; i < saborBuscar.length; i++) {
    const productoBuscar = saborBuscar[i];
    const productoNombre = productoBuscar.querySelector('.titulo').textContent;
    const productoDesc = productoBuscar.querySelector('.descripcion').innerHTML;
    const productoPrecio = productoBuscar.querySelector('.precio').textContent;
    const productoLink = productoBuscar.querySelector('.linkCatalogo').href;
    const productoImagen = productoBuscar.querySelector('.img').src;

    const productoNombreLowercase = productoNombre.toLowerCase();

    if (productoNombreLowercase.includes(searchTerm)) {
      resultadosHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center resultadoTarjeta">
          <div class="d-flex align-items-center">
            <img src="${productoImagen}" class="img-fluid img">
            <div class="ms-3">
              <p class="mb-1 titulo">${productoNombre}</p>
              <p class="d-none descripcion">${productoDesc}</p>
              <p class="d-none precio">${productoPrecio}</p>
              <a class="d-none linkCatalogo" href="${productoLink}"></a>
            </div>
          </div>
        </li>
      `;
    }
  }

  resultados.innerHTML = resultadosHTML;

  mostrarOcultarResultados();

  const tarjetasResultados = document.getElementsByClassName('resultadoTarjeta');
  for (let i = 0; i < tarjetasResultados.length; i++) {
    const tarjetaResultado = tarjetasResultados[i];
    tarjetaResultado.addEventListener('click', function() {
      const titulo = tarjetaResultado.querySelector('.titulo').textContent;
      const descripcion = tarjetaResultado.querySelector('.descripcion').innerHTML;
      const precio = tarjetaResultado.querySelector('.precio').textContent;
      const imagen = tarjetaResultado.querySelector('.img').src;
      const link = tarjetaResultado.querySelector('.linkCatalogo').href;

      document.getElementById('tituloProducto').textContent = titulo;
      document.getElementById('descProducto').innerHTML = descripcion;
      document.getElementById('precio').textContent = precio;
      document.getElementById('imgProducto').src = imagen;
      document.getElementById('linkProducto').href = link;

      document.getElementById('ventana').style.display = 'block';
      document.body.style.overflow = 'hidden';

      history.pushState({ ventanaEmergenteOpen: true }, '');

      window.addEventListener('popstate', closeVentanaEmergente);
      window.addEventListener('hashchange', closeVentanaEmergente);
    });
  }
});

function mostrarOcultarResultados() {
  if (searchInput.value.length > 0) {
    resultados.parentElement.classList.add('mostrar');
  } else {
    resultados.parentElement.classList.remove('mostrar');
  }
}

function closeVentanaEmergente() {
  document.getElementById('ventana').style.display = 'none';
  document.body.style.overflow = 'auto';

  window.removeEventListener('popstate', closeVentanaEmergente);
  window.removeEventListener('hashchange', closeVentanaEmergente);
}

document.addEventListener('click', function(event) {
  const target = event.target;
  if (!target.closest('#navDiv2') && !target.closest('#ventana') && !target.closest('#sidebar')) {
    resultados.parentElement.classList.remove('mostrar');
    if (window.innerWidth <= 768) {
      divNav2.style.display = 'none';
    }
  }
});
