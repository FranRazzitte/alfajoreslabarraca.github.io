// AGREGAR SABORES

function agregarSabores() {
  document.getElementById('categoriaBeforeLoad').remove();
  try {
    alfajores.forEach(sabor => {
      descDisplay = sabor.desc.replace(/<br>/g, ' ').slice(Number= 0, Number= 120) + "...";
      var imgSabor = sabor.nombre.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u');
      var urlSabor = sabor.nombre.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/&/g, 'and');
      if (sabor.visible) {
        const productoHTML = `
          <div class="card mb-3 card-style" id="producto_${urlSabor}">
            <a href="./productos/?p=${urlSabor}" title="${sabor.nombre}">
              <div class="row g-0">
                <div class="col-md-4 placeholder-glow">
                  <img src="./imagenes/sabores/${imgSabor}.png" alt="${sabor.nombre}" id="${sabor.nombre}" class="img-fluid rounded-start img" onerror="this.onerror=null; this.src='./productos/img/404NotFound.svg'; this.className='img-fluid rounded-start img placeholder'">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title titulo">${sabor.nombre}</h5>
                    <p class="descripcion d-none">${sabor.desc}</p>
                    <p class="card-text descDisplay">${descDisplay}</p>
                    <p class="precio">${sabor.precioPagina}</p>
                    <p class="linkCatalogo">${sabor.linkCatalogo}</p>
                    <p class="card-text">
                      <small lang="lb-text-main-section:card-link" class="text-muted text-decoration-underline">Presiona para leer más</small>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>`

        if (categoriasError) {
          document.getElementById('todosError').classList.remove('d-none');
          const contenedorSabores = document.getElementById('todosError-container');
          contenedorSabores.innerHTML += productoHTML;
          contenedorSabores.querySelector('#producto_' + urlSabor).classList.add('d-flex');
        } else {
            sabor.categoria.forEach(cat => {
              const contenedorSabores = document.getElementById(cat + '-container');
              contenedorSabores.innerHTML += productoHTML;
              document.getElementById('btn' + cat.charAt(0).toUpperCase() + cat.slice(1)).classList.remove('d-none');
              const productoContenedor = contenedorSabores.querySelector('#producto_' + urlSabor);
              if (cat === catActiva && !catCeroAmpliable) {
                productoContenedor.classList.add('d-flex');
              } else {
                productoContenedor.classList.remove('d-flex');
              }
          })
        }
      }
    })
  } catch(e) {
    console.error('Error al cargar productos. Visitar https://alfajoreslabarraca.com.ar/status/ para comprobar la disponibilidad de archivos escenciales.', e);
    document.getElementById('errorAlfajores').classList.remove('d-none');
  }
}

// CATEGORÍAS

const btnCategorias = document.getElementById('categorias');
const contenedorCategorias = document.getElementById('categoriasContenedor');
const styleSheet = document.createElement('style');
const mostrarMasBtn = document.getElementById('mostrar-mas');
var catActiva;
var catCeroAmpliable;
let categoriasError;
document.head.appendChild(styleSheet);

const botones = {};
const secciones = {};

function crearCategorias() {
  try {
    categorias.forEach((cat, index) => {
      const key = cat.nombre.toLowerCase();
      botones[key] = document.getElementById('btn' + cat.nombre);
      secciones[key] = document.getElementById(key);
      contenedorCategorias.innerHTML += `
        <div id="${cat.nombre.toLowerCase()}" class="d-none">
					<div id="${cat.nombre.toLowerCase()}-container" class="container d-flex justify-content-center flex-wrap"></div>
				</div>
      `;
      const boton = document.createElement('button');
      boton.textContent = cat.nombre;
      boton.type = 'button';
      boton.id = 'btn' + cat.nombre;
      boton.classList = 'btn btn-nuestros-productos btn-outline-'+ cat.nombre.toLowerCase() + ' m-1 d-none';
      if (index === 0) {
        boton.classList.add('active');
        catActiva = cat.nombre.toLowerCase();
        catCeroAmpliable = cat.ampliable;
        document.getElementById(cat.nombre.toLowerCase()).classList.replace('d-none', 'd-block');
        if (catCeroAmpliable) {
          mostrarMasBtn.style.display = 'block';
        }
      }
      styleSheet.innerHTML += `
        [data-bs-theme=light] {
          --btn-${cat.nombre.toLowerCase()}: ${cat.colorLight};
        }

        [data-bs-theme=dark] {
          --btn-${cat.nombre.toLowerCase()}: ${cat.colorDark};
        }
        
        .btn-outline-${cat.nombre.toLowerCase()} {
          --bs-btn-color: var(--btn-${cat.nombre.toLowerCase()});
          --bs-btn-border-color: var(--btn-${cat.nombre.toLowerCase()});
          --bs-btn-hover-color: var(--btn-general-color);
          --bs-btn-hover-bg: var(--btn-${cat.nombre.toLowerCase()});
          --bs-btn-hover-border-color: var(--btn-${cat.nombre.toLowerCase()});
          --bs-btn-focus-shadow-rgb: 13, 110, 253;
          --bs-btn-active-color: var(--btn-general-color);
          --bs-btn-active-bg: var(--btn-${cat.nombre.toLowerCase()});
          --bs-btn-active-border-color: var(--btn-${cat.nombre.toLowerCase()});
          --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
          --bs-btn-disabled-color: var(--btn-${cat.nombre.toLowerCase()});
          --bs-btn-disabled-bg: transparent;
          --bs-btn-disabled-border-color: var(--btn-${cat.nombre.toLowerCase()});
          --bs-gradient: none;
        }
      `;
      btnCategorias.appendChild(boton);
    });
  } catch(e) {
    console.error('Error al cargar categorías. Visitar https://alfajoreslabarraca.com.ar/status/ para comprobar la disponibilidad de archivos escenciales.', e);
    categoriasError = true;
  } finally {
    agregarSabores();
  }
}

crearCategorias();

function mostrarCategoria(activa) {
  try {
    categorias.forEach(cat => {
      const key = cat.nombre.toLowerCase();
      botones[key] = document.getElementById('btn' + cat.nombre);
      secciones[key] = document.getElementById(key);
      if (key === activa) {
        botones[key].classList.add('active');
        secciones[key].classList.remove('d-none');
        secciones[key].classList.add('d-block');
        catActiva = key;
      } else {
        botones[key].classList.remove('active');
        secciones[key].classList.remove('d-block');
        secciones[key].classList.add('d-none');
      }
    });
  } catch(e) {
    console.error('Error al mostrar categorías. Visitar https://alfajoreslabarraca.com.ar/status/ para comprobar la disponibilidad de archivos escenciales.', e);
    categoriasError = true;
  }
}

try {
  categorias.forEach(cat => {
    const key = cat.nombre.toLowerCase();
    botones[key] = document.getElementById('btn' + cat.nombre);
    botones[key].addEventListener('click', () => {
      if (catActiva !== key) {
        mostrarCategoria(key);
        comprobarVerMas();
      }
    });
  });
} catch(e) {
  console.error('Error al cargar categorías. Visitar https://alfajoreslabarraca.com.ar/status/ para comprobar la disponibilidad de archivos escenciales.', e);
  categoriasError = true;
}

// REDIRECCIONAR

var hashUrl = window.location.hash.substring(1);
if (window.location.hash != '') {
  window.location.href = './productos/?p=' + hashUrl;
}

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
            <div class="d-flex align-items-center placeholder-glow">
              <img src="./imagenes/sabores/${imgSabor}.png" class="img-fluid img" onerror="this.onerror=null; this.src='./productos/img/404NotFound.svg'; this.className='img-fluid img placeholder'">
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

let mostrarMas = false;

function verMasHTML(estado) {
  if (estado) {
    mostrarMasBtn.classList.remove('btn-outline-primary');
    mostrarMasBtn.classList.add('btn-primary');
    return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.65 16h10.69c.64 0 .99-.76.56-1.24l-5.35-6.11a.753.753 0 0 0-1.13 0l-5.35 6.11c-.42.48-.08 1.24.56 1.24Z"></path></svg><span style="font-size: 14px;">Ver menos</span>'
  } else {
    mostrarMasBtn.classList.remove('btn-primary');
    mostrarMasBtn.classList.add('btn-outline-primary');
    return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24" ><path d="M17.35 8H6.65c-.64 0-.99.76-.56 1.24l5.35 6.11c.3.34.83.34 1.13 0l5.35-6.11C18.34 8.76 18 8 17.36 8Z"></path></svg><span style="font-size: 14px;">Ver más</span>`;
  }
}

function verMas() {
  const contenedorVerMas = document.getElementById(catActiva);
  const productosVerMas = contenedorVerMas.querySelectorAll('.card-style');
  productosVerMas.forEach((producto, index) => {
    if (index >= 4) {
      producto.style.display = mostrarMas ? 'flex' : 'none';
    }
  });
  mostrarMasBtn.innerHTML = verMasHTML(mostrarMas);
}

function comprobarVerMas() {
  const contenedorComprobarVerMas = document.getElementById(catActiva);
  const productosComprobarVerMas = contenedorComprobarVerMas.querySelectorAll('.card-style');
  categorias.forEach(cat => {
    if (cat.nombre.toLowerCase() === catActiva) {
      if (cat.ampliable) {
        if (productosComprobarVerMas.length >= 5) {
          mostrarMasBtn.style.display = 'block';
          mostrarMas = false;
          verMas();
        } else {
          mostrarMasBtn.style.display = 'none';
        }
      } else {
        mostrarMas = true;
        verMas();
        mostrarMasBtn.style.display = 'none';
      }
    }
  })
}

mostrarMasBtn.addEventListener('click', () => {
  mostrarMas = !mostrarMas;
  verMas();
});

// VENTANA EMERGENTE

const fechaActual = new Date();
const ventana = document.getElementById('ventana-emergente');
const tituloVentana = document.getElementById('titulo-ventana');
const iframeVentana = document.getElementById('iframe-ventana');
const fechaVentana = document.getElementById('fecha-ventana');
const horaVentana = document.getElementById('hora-ventana');
const ubicacionVentana = document.getElementById('ubicacion-ventana');
const descVentana = document.getElementById('desc-ventana');
const entradaVentana = document.getElementById('entrada-ventana');

document.getElementById('cerrar-ventana').addEventListener('click', function() {
  ventana.style.display = 'none';
});

const proximosEventos = [
  { titulo: 'Campeonato Argentino del Alfajor', dia1: 20, dia2: 22, mes: 6, año: 2025, horaI: '12', horaF: '20', ubicacion: 'Parque La Estación, Güemes 700, Avellaneda', desc: '¡Nos emociona anunciar que estaremos nuevamente presentes en el Campeonato Argentino del Alfajor en el Parque La Estación, Avellaneda! Expondremos varios de nuestros sabores más exquisitos y algunas sorpresas especiales. Los invitamos a que disfruten de nuestras delicias artesanales y vivan una experiencia única llena de sabor y tradición.', entrada: 'ENTRADA LIBRE Y GRATUITA', iframe: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13124.711883189852!2d-58.3626242!3d-34.6754575!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a33311617aba41%3A0x180bd9cabe2e852e!2sLa%20Estaci%C3%B3n%20-%20Parque%20Municipal%20Multiprop%C3%B3sito!5e0!3m2!1ses-419!2sar!4v1717558761912!5m2!1ses-419!2sar' },
  { titulo: 'Mundial del Alfajor', dia1: 15, dia2: 17, mes: 8, año: 2025, horaI: '12', horaF: '20', ubicacion: 'Costa Salguero, Pabellón 6, Av. Costanera Rafael Obligado 1221, Ciudad de Buenos Aires', desc: '¡Nos emociona anunciar que vamos a estar nuevamente presentes en el Mundial del Alfajor, pero esta vez en Costa Salguero, Ciudad de Buenos Aires! Los invitamos a que disfruten de nuestras delicias artesanales y vivan una experiencia única llena de sabor y tradición.', entrada: '', iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.3403565786506!2d-58.39880380779504!3d-34.56972030412223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb50061ea0ff7%3A0x86629f006abf71bc!2sCentro%20Costa%20Salguero%20Pabell%C3%B3n%206!5e0!3m2!1ses-419!2sar!4v1742837578429!5m2!1ses-419!2sar' }
  ];

const eventosCumplenCondicion = proximosEventos.filter(evento => {
  const fechaEvento = new Date(fechaActual.getFullYear(), evento.mes - 1, evento.dia2);
  const diferenciaDias = Math.floor((fechaEvento - fechaActual) / (1000 * 60 * 60 * 24));
  return diferenciaDias >= 0 && diferenciaDias <= 10;
});

if (eventosCumplenCondicion.length > 0) {
  const primerEvento = eventosCumplenCondicion[0];
  tituloVentana.textContent = primerEvento.titulo;
  iframeVentana.src = primerEvento.iframe;
  fechaVentana.textContent = formatoRangoFechas({ dia1: primerEvento.dia1, dia2: primerEvento.dia2, mes: primerEvento.mes, año: primerEvento.año });
  horaVentana.textContent = 'De ' + primerEvento.horaI + ' a ' + primerEvento.horaF + ' horas';
  ubicacionVentana.textContent = primerEvento.ubicacion;
  descVentana.textContent = primerEvento.desc;
  entradaVentana.textContent = primerEvento.entrada;
  ventana.style.display = 'block';
}

function formatoRangoFechas({ dia1, dia2, mes, año }) {
  let fecha1 = new Date(año, mes - 1, dia1);
  let fecha2 = new Date(año, mes - 1, dia2);

  let formatoDia = new Intl.DateTimeFormat("es-ES", { weekday: "long" });
  let formatoMes = new Intl.DateTimeFormat("es-ES", { month: "long" });

  let diaSemana1 = formatoDia.format(fecha1);
  let diaSemana2 = formatoDia.format(fecha2);
  let nombreMes = formatoMes.format(fecha1);

  diaSemana1 = diaSemana1.charAt(0).toUpperCase() + diaSemana1.slice(1);
  diaSemana2 = diaSemana2.charAt(0).toUpperCase() + diaSemana2.slice(1);
  nombreMes = nombreMes.charAt(0).toLowerCase() + nombreMes.slice(1);

  return `${diaSemana1} ${dia1} al ${diaSemana2} ${dia2} de ${nombreMes}`;
}