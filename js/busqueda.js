const searchInput = document.getElementById('buscar');
const searchInputMovil = document.getElementById('buscarMovil');
const saboresBuscar = document.getElementById('sabores');
const saborBuscar = saboresBuscar.getElementsByClassName('tarjeta');
const resultados = document.getElementById('busqueda').querySelector('.resultado');
const resultadosMovil = document.getElementById('busquedaMovil').querySelector('.resultadoMovil');
const divNav2 = document.querySelector('.navDiv2');
const divNav2Movil = document.querySelector('.navDiv2Movil');

document.getElementById('formSearch').addEventListener('submit', function(event) {
  event.preventDefault();
  var valorSearch = document.getElementById('buscar').value;
  history.pushState(null, null, '#' + valorSearch.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u'));
  mostrarProducto()
});

document.getElementById('formSearchMovil').addEventListener('submit', function(event) {
  event.preventDefault();
  var valorSearch = document.getElementById('buscarMovil').value;
  history.pushState(null, null, '#' + valorSearch.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u'));
  sidebar.classList.remove('open');
  mostrarProducto()
});

if (window.innerWidth >= 768) {
  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    let resultadosHTML = '';

    for (let i = 0; i < saborBuscar.length; i++) {
      const productoBuscar = saborBuscar[i];
      const productoNombre = productoBuscar.querySelector('.titulo').textContent;
      const productoDesc = productoBuscar.querySelector('.descripcion').innerHTML;
      const productoValor = productoBuscar.querySelector('.precio').textContent;
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
                <p class="d-none precio">${productoValor}</p>
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

        tituloProducto.textContent = titulo;
        descProducto.innerHTML = descripcion;
        precioProducto.textContent = precio;
        imgProducto.src = imagen;
        linkProducto.href = link;

        if (preciosElementDisplay == "none") {
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
        } else {
            conPrecio.style.display = 'none';
            sinStock.style.display = 'none';
            sinPrecio.style.display = 'block';
            linkProducto.classList = 'btn btn-block btn-primary mb-3 w-100'
        }

        if (window.innerWidth >= 768) {
          ventanaEmergente.style.display = 'block';
          ventanaEmergente.classList = 'modal fade show';
          divBotones.classList = 'd-flex'
          body.style.overflow = 'hidden';
          linkProducto.style.marginRight = '10px';
      } else {
          ventanaEmergente.style.display = 'block';
          ventanaEmergente.classList = 'fade show';
          divBotones.classList = '';
          pagPrincipal.style.display = 'none';
          linkProducto.style.marginRight = '0px';
          window.scrollTo({
              top: 0,
            });
      }

      history.pushState({ ventanaEmergenteOpen: true }, '');
      history.pushState(null, null, '#' + titulo.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u'));

      document.title = titulo + " - Alfajores La Barraca";

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
    if (window.innerWidth >= 768) {
        ventanaEmergente.style.display = 'none';
        body.style.overflow = 'auto';
    } else {
        ventanaEmergente.style.display = 'none';
        pagPrincipal.style.display = 'block';
    }

    document.title = "Alfajores La Barraca";
    imgProducto.src = "";

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
} else {
  searchInputMovil.addEventListener('input', function() {
    const searchTerm = searchInputMovil.value.toLowerCase();

    let resultadosHTML = '';

    for (let i = 0; i < saborBuscar.length; i++) {
      const productoBuscar = saborBuscar[i];
      const productoNombre = productoBuscar.querySelector('.titulo').textContent;
      const productoDesc = productoBuscar.querySelector('.descripcion').innerHTML;
      const productoValor = productoBuscar.querySelector('.precio').textContent;
      const productoLink = productoBuscar.querySelector('.linkCatalogo').href;
      const productoImagen = productoBuscar.querySelector('.img').src;

      const productoNombreLowercase = productoNombre.toLowerCase();

      if (productoNombreLowercase.includes(searchTerm)) {
        resultadosHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center resultadoTarjeta" style="height: auto; border-color: transparent">
        <div class="d-flex align-items-center">
          <img src="${productoImagen}" class="img">
          <div class="ms-3 ">
            <p class="tituloMovil" style="margin: 0%; height: 100%">${productoNombre}</p>
            <p class="d-none descripcion">${productoDesc}</p>
            <p class="d-none precio">${productoValor}</p>
            <a class="d-none linkCatalogo" href="${productoLink}"></a>
          </div>
        </div>
        `;
      }
    }

    resultadosMovil.innerHTML = resultadosHTML;

    mostrarOcultarResultados();

    const tarjetasResultados = document.getElementsByClassName('resultadoTarjeta');
    for (let i = 0; i < tarjetasResultados.length; i++) {
      const tarjetaResultado = tarjetasResultados[i];
      tarjetaResultado.addEventListener('click', function() {
        const titulo = tarjetaResultado.querySelector('.tituloMovil').textContent;
        const descripcion = tarjetaResultado.querySelector('.descripcion').innerHTML;
        const precio = tarjetaResultado.querySelector('.precio').textContent;
        const imagen = tarjetaResultado.querySelector('.img').src;
        const link = tarjetaResultado.querySelector('.linkCatalogo').href;

        tituloProducto.textContent = titulo;
        descProducto.innerHTML = descripcion;
        precioProducto.textContent = precio;
        imgProducto.src = imagen;
        linkProducto.href = link;

        if (preciosElementDisplay == "none") {
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
        } else {
            conPrecio.style.display = 'none';
            sinStock.style.display = 'none';
            sinPrecio.style.display = 'block';
            linkProducto.classList = 'btn btn-block btn-primary mb-3 w-100'
        }

        if (window.innerWidth >= 768) {
          ventanaEmergente.style.display = 'block';
          ventanaEmergente.classList = 'modal fade show';
          divBotones.classList = 'd-flex'
          body.style.overflow = 'hidden';
          linkProducto.style.marginRight = '10px';
      } else {
          ventanaEmergente.style.display = 'block';
          ventanaEmergente.classList = 'fade show';
          divBotones.classList = '';
          pagPrincipal.style.display = 'none';
          linkProducto.style.marginRight = '0px';
          window.scrollTo({
              top: 0,
            });
      }

      history.pushState({ ventanaEmergenteOpen: true }, '');
      history.pushState(null, null, '#' + titulo.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u'));

      document.title = titulo + " - Alfajores La Barraca";

        sidebar.classList.remove('open');

        window.addEventListener('popstate', closeVentanaEmergente);
        window.addEventListener('hashchange', closeVentanaEmergente);
      });
    }
  });

  function mostrarOcultarResultados() {
    if (searchInputMovil.value.length > 0) {
      resultadosMovil.parentElement.classList.add('mostrar');
    } else {
      resultadosMovil.parentElement.classList.remove('mostrar');
    }
  }

  function closeVentanaEmergente() {
    if (window.innerWidth >= 768) {
        ventanaEmergente.style.display = 'none';
        body.style.overflow = 'auto';
    } else {
        ventanaEmergente.style.display = 'none';
        pagPrincipal.style.display = 'block';
    }

    document.title = "Alfajores La Barraca";
    imgProducto.src = "";

    window.removeEventListener('popstate', closeVentanaEmergente);
    window.removeEventListener('hashchange', closeVentanaEmergente);
  }
}
