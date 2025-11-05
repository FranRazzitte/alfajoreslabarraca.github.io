// CONSOLE ERROR
function showConsoleError(a, e) {
  console.error(`Error al cargar ${a}. Visitar https://alfajoreslabarraca.com.ar/status/ para comprobar la disponibilidad de archivos escenciales.`, e)
}

// AGREGAR SABORES

function agregarSabores() {
  document.getElementById('categoriaBeforeLoad').remove();
  try {
    alfajores.sort((a, b) => a.desc.localeCompare(b.desc));
    alfajores.forEach(sabor => {
      let descNum;
      if (window.innerWidth <= 600) { descNum = 60; } else { descNum = 80; }
      descDisplay = sabor.desc.replace(/<br>/g, ' ').slice(numero= 0, numero= descNum) + "...";
      var imgSabor = sabor.id.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u');
      var urlSabor = sabor.id.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/&/g, 'and');
      if (sabor.visible) {
        const productoHTML = `
          <div class="card m-0 p-0 card-style" style="border: none; margin-right: 2%" id="producto_${urlSabor}">
            <a href="./productos/?p=${urlSabor}" title="${sabor.name}">
              <div class="flex-movil">
                <div class="p-1 placeholder-glow img-movil">
                  <img src="https://bd.alfajoreslabarraca.com.ar/img/products/${imgSabor}/1.png" decoding="async" alt="${sabor.name}" id="${sabor.name}" class="w-100 rounded" onerror="this.onerror=null; this.src='./productos/img/404NotFound.svg'; this.className='w-100 rounded placeholder'">
                </div>
                <div>
                  <div class="card-body">
                    <h5 class="card-title titulo">${sabor.name}</h5>
                    <p class="card-text descDisplay">${descDisplay}</p>
                    <p class="card-text catDisplay">
                      <small class="text-uppercase rounded p-1" style="background-color: var(--btn-${sabor.category[0]}); color: var(--btn-general-color) !important;">${sabor.category[0]}</small>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>`
        sabor.category.forEach(cat => {
          const contenedorSabores = document.getElementById(cat);
          contenedorSabores.innerHTML += productoHTML;
        })
        if (sabor.new) {
          const nuevosSabores = document.getElementById('nuevos');
          nuevosSabores.innerHTML += productoHTML;
        }
        if (Math.floor(Math.random() * 2) === 1) {
          const suggSabores = document.getElementById('sugg');
          suggSabores.innerHTML += productoHTML;
        }
        if (localStorage.getItem('UserHistory')) {
          let UserHistory = JSON.parse(localStorage.getItem('UserHistory'));
          UserHistory.forEach(p => {
            if (p === sabor.name) {
              const UserHistorySabores = document.getElementById('userhistory');
              UserHistorySabores.innerHTML += productoHTML;
            }
          })
        }
      }
    })
  } catch(e) {
    showConsoleError('productos', e);
    document.getElementById('errorAlfajores').classList.remove('d-none');
  } finally {
    sliderCategorias();
  }
}

// CATEGORÍAS

const contenedorCategorias = document.getElementById('categoriasContenedor');
const styleSheet = document.createElement('style');
document.head.appendChild(styleSheet);

function crearCategorias() {
  try {
    categorias.unshift({ nombre : 'sugg' });
    categorias.push({ nombre : 'nuevos' }, { nombre : 'UserHistory'});
    categorias.forEach(cat => {
      contenedorCategorias.innerHTML += `
        <div id="${cat.nombre.toLowerCase()}-base" class="base rounded d-none">
          <div class="name-cat">
            <div class="d-flex flex-wrap justify-content-between align-items-center p-2" style="margin-left: 10px !important; margin-right: 10px !important;">
              <h2 class="m-0" style="font-size: 20px;" id="titleCat-${cat.nombre.toLowerCase()}"></h2>
              <div id="linkCatPc-${cat.nombre.toLowerCase()}" class="d-none">
                <a class="fw-bold linkCatPc" href="./c/${cat.nombre.toLowerCase()}" style="display: block; font-size: 14px; color: var(--clr-general);">Ver Categoría ${cat.nombre}</a>
              </div>
            </div>
            <hr class="hr m-0">
          </div>
          <div id="${cat.nombre.toLowerCase()}-container" class="container-base justify-content-center flex-wrap">
            <button class="btn-prev d-none" id="btn-prev" onclick="sliderPrev(${cat.nombre.toLowerCase()})"><svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px"><path d="M560-267.69 347.69-480 560-692.31 588.31-664l-184 184 184 184L560-267.69Z"/></svg></button>
            <div class="viewport"><div id="${cat.nombre.toLowerCase()}" class="container d-grid p-0 ${cat.nombre.toLowerCase()}" style="grid-auto-flow: column; gap: 1px; grid-auto-columns: calc((100% - (1px * 5)) / 6); transition: transform 0.5s ease;" slider="0"></div></div>
            <button class="btn-next d-none" id="btn-next" onclick="sliderNext(${cat.nombre.toLowerCase()})"><svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px"><path d="m531.69-480-184-184L376-692.31 588.31-480 376-267.69 347.69-296l184-184Z"/></svg></button>
          </div>
          <div class="linkCatMovil">
            <div id="linkCatMovil-${cat.nombre.toLowerCase()}" class="d-none">
              <hr class="hr m-0">
              <div class="d-flex justify-content-end p-1" style="margin-right: 10px;">
                <a class="fw-bold" href="./c/${cat.nombre.toLowerCase()}" style="display: block; font-size: 14px; color: var(--clr-general);">Ver Categoría ${cat.nombre}</a>
              </div>
            </div>
          </div>
        </div>
      `;
      styleSheet.innerHTML += `
        [data-bs-theme=light] {
          --btn-${cat.nombre.toLowerCase()}: ${cat.colorLight};
        }

        [data-bs-theme=dark] {
          --btn-${cat.nombre.toLowerCase()}: ${cat.colorDark};
        }
      `;
    });
  } catch(e) {
    showConsoleError('categorías', e);
  } finally {
    agregarSabores();
  }
}


crearCategorias();

function sliderCategorias() {
  try {
    let titleCat;
    let catLastName;
    categorias.forEach(cat => {
      const contenedorSabores = document.getElementById((cat.nombre).toLowerCase());
      const productos = contenedorSabores.children;
      const container_base = contenedorSabores.parentElement.parentElement;
      const btnNext = container_base.children[2];
      for (let i = 0; i < productos.length; i++) {
        if (productos.length > 0) {
          const titleSugg = [
            'Sugerencias para vos 😎',
            'Te pueden gustar ❤️',
            'Nuestras sugerencias 💪',
            'Pueden interesarte 😊',
            'Elegidos especialmente 😍',
            'Recomendados para vos 🔥',
            'No te los pierdas 😉',
            'Podrían encantarte 💖'
          ];
          const titleDefault = [
            'Más populares en %value ✨',
            'Más vendidos en %value 🤩',
            'Elegidos en %value ❤️',
            'Lo mejor en %value ✨',
            'Más buscados en %value 🔍',
            'Imperdibles de %value 😍'
          ];
          const id = cat.nombre.toLowerCase();
          const titleEl = document.getElementById('titleCat-' + id);
          const linkCatPc = document.getElementById('linkCatPc-' + id);
          const linkCatMovil = document.getElementById('linkCatMovil-' + id);
          if (titleEl && titleEl.textContent.length === 0) {
            switch ((cat.nombre).toLowerCase()) {
              case 'sugg':
                titleCat = titleSugg[Math.floor(Math.random() * titleSugg.length)];
                break;
              case 'todos':
                titleCat = 'Todos nuestros productos';
                break;
              case 'nuevos':
                titleCat = 'Recientemente agregados 🟢';
                break;
              case 'userhistory':
                titleCat = 'Tu historial';
                break;
              default:
                let newTitle;
                do {
                  newTitle = titleDefault[Math.floor(Math.random() * titleDefault.length)];
                } while (newTitle === catLastName);
                catLastName = newTitle;
                titleCat = newTitle.replace('%value', cat.nombre.toLowerCase());
                linkCatPc.classList.remove('d-none');
                linkCatMovil.classList.remove('d-none');
                break;
            }
            titleEl.textContent = titleCat;
          }
          document.getElementById(cat.nombre.toLowerCase() + '-base')?.classList.remove('d-none');
        }
        if (i >= 6) {
          btnNext.classList.remove('d-none');
        }
      }  
    }) 
  } catch (e) {
    showConsoleError('categorias', e);
    document.getElementById('errorAlfajores').classList.remove('d-none');
  } 
}

// REDIRECCIONAR

var hashUrl = window.location.hash.substring(1);
if (window.location.hash != '') {
  window.location.href = './productos/?p=' + hashUrl;
}

// Carrusel 

const carouselContainer = document.getElementById('carousel');
let currentSlide = 0;
const intervalDuration = 10000;
let intervalCarousel;

function showSlide(index) {
  const carouselItems = document.querySelectorAll('.carousel-item');
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

function cargarImgCarousel() {
  try {
    carousel.forEach(imgC => {
      const a = document.createElement('a');
      a.classList = 'carousel-item';
      a.href = imgC.href;
      const img = document.createElement('img');
      img.classList = 'd-block img-fluid w-100 h-auto';
      img.style = 'object-fit: cover; min-height: 175px'
      img.src = 'https://bd.alfajoreslabarraca.com.ar' + imgC.src;
      if (imgC.id == 1) {
        a.classList.add('active');
      }
      a.appendChild(img);
      carouselContainer.appendChild(a);
      if (carousel.length == imgC.id) {
        showSlide(currentSlide);
        startAutoCarousel();
        document.getElementById('carousel-section').classList.replace('d-none', 'd-flex');
      }
    })
  } catch (error) {
    showConsoleError('carrusel', error);
  }
  
}

cargarImgCarousel();

// SLIDER

const visibles = 6;

function slider(c, inicio) {
  const pasoPercent = 100 / visibles;
  const desplaz = -inicio * pasoPercent;
  c.style.transform = `translateX(${desplaz}%)`;

  const productos = c.children
  const container_base = c.parentElement.parentElement;
  const btnPrev = container_base.children[0];
  const btnNext = container_base.children[2];
  if (inicio == 0) {
    btnPrev.classList.add('d-none');
    btnNext.classList.remove('d-none');
  } else if (inicio + visibles == productos.length) {
    btnPrev.classList.remove('d-none');
    btnNext.classList.add('d-none');
  } else {
    btnNext.classList.remove('d-none');
    btnPrev.classList.remove('d-none');
  }
}

function sliderNext(c) {
  var inicio = Number(c.getAttribute('slider'));
  const productos = c.children;
  if (inicio + visibles < productos.length) {
    inicio++
    c.setAttribute('slider', inicio);
    slider(c, inicio);
  }
};

function sliderPrev(c) {
  var inicio = Number(c.getAttribute('slider'));
  if (inicio > 0) {
    inicio--
    c.setAttribute('slider', inicio);
    slider(c, inicio);
  }
};

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

try {
  const eventosCumplenCondicion = proximosEventos.filter(evento => {
    const fechaEvento = new Date(fechaActual.getFullYear(), evento.mes - 1, evento.diaF);
    const diferenciaDias = Math.floor((fechaEvento - fechaActual) / (1000 * 60 * 60 * 24));
    return diferenciaDias >= 0 && diferenciaDias <= 10;
  });
  if (eventosCumplenCondicion.length > 0) {
    const primerEvento = eventosCumplenCondicion[0];
    tituloVentana.textContent = primerEvento.titulo;
    iframeVentana.src = primerEvento.iframe;
    fechaVentana.textContent = formatoRangoFechas({ diaI: primerEvento.diaI, diaF: primerEvento.diaF, mes: primerEvento.mes, año: primerEvento.año });
    horaVentana.textContent = 'De ' + primerEvento.horaI + ' a ' + primerEvento.horaF + ' horas';
    ubicacionVentana.textContent = primerEvento.ubicacion;
    descVentana.innerHTML = primerEvento.desc.replace("{[", "<a class='fw-bold text-decoration-underline' href='").replace("]", "'>").replace("}", "</a>");;
    entradaVentana.textContent = primerEvento.entrada;
    ventana.style.display = 'block';
  }  
} catch (error) {
  showConsoleError('eventos', error);
}

function formatoRangoFechas({ diaI, diaF, mes, año }) {
  let fecha2 = new Date(año, mes - 1, diaF);

  let formatoDia = new Intl.DateTimeFormat("es-ES", { weekday: "long" });
  let formatoMes = new Intl.DateTimeFormat("es-ES", { month: "long" });

  let diaSemana2 = formatoDia.format(fecha2);
  let nombreMes = formatoMes.format(fecha2);

  diaSemana2 = diaSemana2.charAt(0).toUpperCase() + diaSemana2.slice(1);
  nombreMes = nombreMes.charAt(0).toLowerCase() + nombreMes.slice(1);

  if (diaI) {
    let fecha1 = new Date(año, mes - 1, diaI);
    let diaSemana1 = formatoDia.format(fecha1);
    diaSemana1 = diaSemana1.charAt(0).toUpperCase() + diaSemana1.slice(1);

    return `${diaSemana1} ${diaI} al ${diaSemana2} ${diaF} de ${nombreMes}`;
  } else {
    return `${diaSemana2} ${diaF} de ${nombreMes}`;
  }
}