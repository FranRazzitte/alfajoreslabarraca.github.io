// AGREGAR SABORES

const contenedor_example = document.getElementById('categoriaBeforeLoad');
const contenedor_todos = document.getElementById('sabores-container');
const contenedor_chocolates = document.getElementById('chocolates-container');
const contenedor_maicena = document.getElementById('maicena-container');
const contenedor_avena = document.getElementById('avena-container');
const contenedor_frutales = document.getElementById('frutales-container');
const contenedor_saludables = document.getElementById('saludables-container');
const contenedor_merengue = document.getElementById('merengue-container');
const contenedor_integrales = document.getElementById('integrales-container');
const contenedor_cajas = document.getElementById('cajas-container');

contenedor_example.remove();

alfajores.forEach(sabor => {
  descDisplay = sabor.desc.replace(/<br>/g, ' ').slice(Number= 0, Number= 120) + "...";
  var imgSabor = sabor.nombre.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u');
  var urlSabor = sabor.nombre.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/&/g, 'and');
  if (sabor.visible) {
    const productoHTML = `
      <div class="card mb-3 card-style">
        <a href="./productos/?p=${urlSabor}" title="${sabor.nombre}">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="./imagenes/sabores/${imgSabor}.png" alt="${sabor.nombre}" id="${sabor.nombre}" class="img-fluid rounded-start img">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title titulo">${sabor.nombre}</h5>
                <p class="descripcion d-none">${sabor.desc}</p>
                <p class="card-text descDisplay">${descDisplay}</p>
                <p class="precio">${sabor.precioPagina}</p>
                <p class="linkCatalogo">${sabor.linkCatalogo}</p>
                <p class="card-text">
                  <small data-lang="lb-text-main-section:card-link" class="text-muted text-decoration-underline">Presiona para leer más</small>
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>`

    if (sabor.categoria.includes('todos')) {
      contenedor_todos.innerHTML += productoHTML;
    };
    if (sabor.categoria.includes('chocolates')) {
      contenedor_chocolates.innerHTML += productoHTML;
    };
    if (sabor.categoria.includes('maicena')) {
      contenedor_maicena.innerHTML += productoHTML;
    };
    if (sabor.categoria.includes('avena')) {
      contenedor_avena.innerHTML += productoHTML;
    };
    if (sabor.categoria.includes('frutales')) {
      contenedor_frutales.innerHTML += productoHTML;
    };
    if (sabor.categoria.includes('saludables')) {
      contenedor_saludables.innerHTML += productoHTML;
    };
    if (sabor.categoria.includes('merengue')) {
      contenedor_merengue.innerHTML += productoHTML;
    };
    if (sabor.categoria.includes('integrales')) {
      contenedor_integrales.innerHTML += productoHTML;
    };
    if (sabor.categoria.includes('cajas')) {
      contenedor_cajas.innerHTML += productoHTML;
    };
  }
})

// REDIRECCIONAR

var hashUrl = window.location.hash.substring(1);
if (window.location.hash != '') {
  window.location.href = './productos/?p=' + hashUrl;
}
console.log(hashUrl);

// BUSQUEDA

const searchInput = document.getElementById('buscar');
const searchInputMovil = document.getElementById('buscarMovil');
const resultados = document.getElementById('busqueda').querySelector('.resultado');
const resultadosMovil = document.getElementById('busquedaMovil').querySelector('.resultadoMovil');
const divNav2 = document.querySelector('.navDiv2');
const divNav2Movil = document.querySelector('.navDiv2Movil');

document.getElementById('formSearch').addEventListener('submit', function(event) {
  event.preventDefault();
  var valorSearch = document.getElementById('buscar').value;
  var querySearch = valorSearch.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u');
  window.location.href = './search/?q=' + querySearch;
});

document.getElementById('formSearchMovil').addEventListener('submit', function(event) {
  event.preventDefault();
  var valorSearch = document.getElementById('buscar').value;
  var querySearch = valorSearch.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u');
  window.location.href = './search/?q=' + querySearch;
});

document.addEventListener('click', function(event) {
  const target = event.target;
  if (!target.closest('#navDiv2') && !target.closest('#ventana') && !target.closest('#sidebar')) {
    resultados.parentElement.classList.remove('mostrar');
    if (window.innerWidth <= 768) {
      divNav2.style.display = 'none';
    }
  }
});

function generarResultados(resultadosHTML, searchTerm, searchStyle) {
  alfajores.forEach(sabor => {
    const productoBuscar = sabor;
    const productoNombre = productoBuscar.nombre;
    const productoDesc = productoBuscar.desc;
    const productoValor = productoBuscar.precioPagina;
    const productoLink = productoBuscar.linkCatalogo;

    var imgSabor = productoBuscar.nombre.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')
    var urlSabor = productoBuscar.nombre.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/&/g, 'and')

    const productoNombreLowercase = productoNombre.toLowerCase();

    if (productoNombreLowercase.includes(searchTerm) && productoBuscar.visible) {
      resultadosHTML += `
        <li class="list-group-item" ${searchStyle}>
          <a class="d-flex justify-content-between align-items-center" href="./productos/?p=${urlSabor}" title="${productoNombre}">
            <div class="d-flex align-items-center">
              <img src="./imagenes/sabores/${imgSabor}.png" class="img-fluid img">
              <div class="ms-3">
                <p class="mb-1 titulo">${productoNombre}</p>
                <p class="d-none descripcion">${productoDesc}</p>
                <p class="d-none precio">${productoValor}</p>
                <p class="d-none linkCatalogo" href="${productoLink}"></p>
              </div>
            </div>
          </a>
        </li>
      `;
    }
  })
  return resultadosHTML
}

if (window.innerWidth >= 768) {
  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();

    let resultadosHTML = '';
    var searchStyle = '';

    resultadosHTML = generarResultados(resultadosHTML, searchTerm, searchStyle);

    resultados.innerHTML = resultadosHTML;
    if (searchInput.value.length > 0) {
      resultados.parentElement.classList.add('mostrar');
    } else {
      resultados.parentElement.classList.remove('mostrar');
    }
  })
} else {
  searchInputMovil.addEventListener('input', function() {
    const searchTerm = searchInputMovil.value.toLowerCase();

    let resultadosHTML = '';
    var searchStyle = 'style="height: auto; border-color: transparent"';

    resultadosHTML = generarResultados(resultadosHTML, searchTerm, searchStyle);

    resultadosMovil.innerHTML = resultadosHTML;
    if (searchInputMovil.value.length > 0) {
      resultadosMovil.parentElement.classList.add('mostrar');
    } else {
      resultadosMovil.parentElement.classList.remove('mostrar');
    }
  })
}

// Carrusel

const carouselItems = document.querySelectorAll('.carousel-item');
let currentSlide = 0;
const intervalDuration = 10000;
let intervalCarousel;

function showSlide(index) {
    carouselItems[currentSlide].classList.remove('active');
    currentSlide = (index + carouselItems.length) % carouselItems.length;
    carouselItems[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function startAutoCarousel() {
    clearInterval(intervalCarousel)
    intervalCarousel = setInterval(nextSlide, intervalDuration);
}

document.getElementById('prevBtn').addEventListener('click', () => {
    startAutoCarousel();
    showSlide(currentSlide - 1);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    startAutoCarousel();
    showSlide(currentSlide + 1);
});

showSlide(currentSlide);

startAutoCarousel();

// MOSTRAR MÁS

const mostrarMasBtn = document.getElementById('mostrar-mas');
let mostrarMas = false;

const chocolates_MostrarMas = contenedor_chocolates.querySelectorAll('.card-style');
chocolates_MostrarMas.forEach(producto => {
  producto.style.display = 'flex';
});
const maicena_MostrarMas = contenedor_maicena.querySelectorAll('.card-style');
maicena_MostrarMas.forEach(producto => {
  producto.style.display = 'flex';
});
const avena_MostrarMas = contenedor_avena.querySelectorAll('.card-style');
avena_MostrarMas.forEach(producto => {
  producto.style.display = 'flex';
});
const frutales_MostrarMas = contenedor_frutales.querySelectorAll('.card-style');
frutales_MostrarMas.forEach(producto => {
  producto.style.display = 'flex';
});
const merengue_MostrarMas = contenedor_merengue.querySelectorAll('.card-style');
merengue_MostrarMas.forEach(producto => {
  producto.style.display = 'flex';
});
const integrales_MostrarMas = contenedor_integrales.querySelectorAll('.card-style');
integrales_MostrarMas.forEach(producto => {
  producto.style.display = 'flex';
});
const cajas_MostrarMas = contenedor_cajas.querySelectorAll('.card-style');
cajas_MostrarMas.forEach(producto => {
  producto.style.display = 'flex';
});

function mostrarOcultarProductos() {
  const todos_MostrarMas = contenedor_todos.querySelectorAll('.card-style');
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