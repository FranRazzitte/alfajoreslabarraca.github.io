const navbarBeforeLoad = document.getElementById('navbarBeforeLoad');
const navbarContainer = document.getElementById('navbar');
const navbarContent = document.createElement('div');
navbarContent.innerHTML = `
    <div class="navbar navbar-sticky-top-responsive navbar-expand-lg navbar-collapse collapse shadow-sm p-0" id="evento-banner" style="padding:0 3% 0 3%; background-color:var(--clr-background-lb) !important;">
      <div class="container justify-content-between d-flex align-items-center p-0" style="flex-wrap: nowrap">
        <div class="marquee-horizontal" aria-live="polite">
          <div class="marquee-track">
            <div class="marquee-inner">
              <span class="fw-bold ms-3 small" style="color: var(--clr-text-lb)" id="evento-titulo"></span>
              <span class="small mx-2" style="color: var(--clr-text-lb)" id="evento-desc">Este 14 y 15 de marzo en La Rural | Pabellón Ocre.</span>
              <a class="fw-bold me-5 small text-decoration-underline" style="color: var(--clr-text-lb)" href="/eventos">Más información</a>
            </div>
          </div>
        </div>
        <button class="btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#evento-banner" id="evento-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="var(--clr-text-lb)" viewBox="0 0 24 24">
            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="navbar navbar-sticky-top-responsive navbar-expand-lg shadow-sm py-2 bg-white" style="padding: 0 3% 0 3%">
        <div class="container-fluid">
            <a class="navbar-brand me-2 fw-bold" href="/">
                <img src="/img/logo.png" alt="Logo" width="55px" class="me-2">
            </a>
            <button class="btn navbar-menu collapsed" style="display: none;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarMain">
                <form class="d-flex mx-auto my-2 ms-0" role="search" style="width: 50%; position: relative;" id="formSearch">
                    <input class="form-control" style="border-bottom-right-radius: 0; border-top-right-radius: 0; border-right-width: 0;" type="search" placeholder="Buscar..." id="buscar" aria-label="Buscar" lang="lb-placeholder-navbar-section:search">
                    <button class="btn btn-outline-primary" style="border-bottom-left-radius: 0; border-top-left-radius: 0;" type="submit">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg>
                    </button>
                    <div class="busqueda" id="busqueda">
                      <ul class="list-group list-group-light resultado" id="resultado" style="background-color: white;"></ul>	
                    </div>
                </form>
                <ul class="navbar-nav ms-2 mb-2 mb-lg-0 justify-content-center">
                  <li class="nav-item me-3 link" style="display: none;">
                    <a class="nav-link d-flex" href="/nosotros">
                      <svg xmlns="http://www.w3.org/2000/svg" class="me-2" height="30px" viewBox="0 -960 960 960" width="30px" fill="var(--bs-body-color)"><path d="M450-290h60v-230h-60v230Zm30-298.46q13.73 0 23.02-9.29t9.29-23.02q0-13.73-9.29-23.02-9.29-9.28-23.02-9.28t-23.02 9.28q-9.29 9.29-9.29 23.02t9.29 23.02q9.29 9.29 23.02 9.29Zm.07 488.46q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100Zm-.07-60q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                      <span style="display: none;" lang="lb-text-navbar-section:about-us">Quiénes Somos</span>
                    </a>
                  </li>
                  <li class="nav-item me-3 link" style="display: none;">
                    <a class="nav-link d-flex" href="/preguntas">
                      <svg xmlns="http://www.w3.org/2000/svg" class="me-2" height="30px" viewBox="0 -960 960 960" width="30px" fill="var(--bs-body-color)"><path d="M500-114.62 493.85-220H460q-133.54 0-226.77-93.23Q140-406.46 140-540q0-133.54 93.23-226.77Q326.46-860 460-860q66.77 0 124.81 24.96 58.04 24.96 101.65 68.58 43.62 43.61 68.58 101.65Q780-606.77 780-540q0 68.08-21.23 130.73-21.23 62.65-58.35 117.23-37.11 54.58-88.5 99.69-51.38 45.12-111.92 77.73ZM560-226q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-99.85-103.08q14.7 0 24.97-10.27 10.26-10.27 10.26-24.96 0-14.69-10.26-24.96-10.27-10.27-24.97-10.27-14.69 0-24.96 10.27-10.27 10.27-10.27 24.96 0 14.69 10.27 24.96 10.27 10.27 24.96 10.27Zm-23.23-122h47.69q.77-27.3 7.74-40.46 6.96-13.15 37.8-44 17.62-17.61 28.66-37.08 11.04-19.46 11.04-43.07 0-47.16-32.2-72.27-32.19-25.12-76.88-25.12-40.54 0-68.42 22.39-27.89 22.38-39.89 53.92l44.46 17.38q6.54-17.38 21.31-32.92 14.77-15.54 42.54-15.54 30.46 0 45.31 16.73 14.84 16.74 14.84 36.66 0 18.54-10.19 32.23-10.19 13.69-25.34 28.85-31.93 27.69-40.2 46.53-8.27 18.85-8.27 55.77ZM460-513Z"/></svg>
                      <span style="display: none;" lang="lb-text-navbar-section:questions">Preguntas Frecuentes</span>    
                    </a>
                  </li>
                  <li class="nav-item me-3 link" style="display: none;">
                    <a class="nav-link d-flex" href="/eventos">
                      <svg xmlns="http://www.w3.org/2000/svg" class="me-2" height="30px" viewBox="0 -960 960 960" width="30px" fill="var(--bs-body-color)"><path xmlns="http://www.w3.org/2000/svg" d="M522.27-266.88q-26.88-26.89-26.88-65.43 0-38.54 26.88-65.42 26.88-26.88 65.42-26.88 38.54 0 65.43 26.88Q680-370.85 680-332.31q0 38.54-26.88 65.43Q626.23-240 587.69-240q-38.54 0-65.42-26.88ZM212.31-100Q182-100 161-121q-21-21-21-51.31v-535.38Q140-738 161-759q21-21 51.31-21h55.38v-84.61h61.54V-780h303.08v-84.61h60V-780h55.38Q778-780 799-759q21 21 21 51.31v535.38Q820-142 799-121q-21 21-51.31 21H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-375.38H200v375.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM200-607.69h560v-100q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v100Zm0 0V-720v112.31Z"/></svg>
                      <span style="display: none;" lang="lb-text-navbar-section:events">Eventos</span>    
                    </a>
                  </li>
                  <li class="nav-item me-3 link" style="display: none;">
                    <button class="border-0 m-0 nav-link d-flex" id="btnCompartir">
                      <svg xmlns="http://www.w3.org/2000/svg" class="me-2" height="30px" viewBox="0 -960 960 960" width="30px" fill="var(--bs-body-color)"><path d="M672.22-100q-44.91 0-76.26-31.41-31.34-31.41-31.34-76.28 0-6 4.15-29.16L284.31-404.31q-14.46 15-34.36 23.5t-42.64 8.5q-44.71 0-76.01-31.54Q100-435.39 100-480q0-44.61 31.3-76.15 31.3-31.54 76.01-31.54 22.74 0 42.64 8.5 19.9 8.5 34.36 23.5l284.46-167.08q-2.38-7.38-3.27-14.46-.88-7.08-.88-15.08 0-44.87 31.43-76.28Q627.49-860 672.4-860t76.25 31.44Q780-797.13 780-752.22q0 44.91-31.41 76.26-31.41 31.34-76.28 31.34-22.85 0-42.5-8.69Q610.15-662 595.69-677L311.23-509.54q2.38 7.39 3.27 14.46.88 7.08.88 15.08t-.88 15.08q-.89 7.07-3.27 14.46L595.69-283q14.46-15 34.12-23.69 19.65-8.69 42.5-8.69 44.87 0 76.28 31.43Q780-252.51 780-207.6t-31.44 76.25Q717.13-100 672.22-100Zm.09-60q20.27 0 33.98-13.71Q720-187.42 720-207.69q0-20.27-13.71-33.98-13.71-13.72-33.98-13.72-20.27 0-33.98 13.72-13.72 13.71-13.72 33.98 0 20.27 13.72 33.98Q652.04-160 672.31-160Zm-465-272.31q20.43 0 34.25-13.71 13.83-13.71 13.83-33.98 0-20.27-13.83-33.98-13.82-13.71-34.25-13.71-20.11 0-33.71 13.71Q160-500.27 160-480q0 20.27 13.6 33.98 13.6 13.71 33.71 13.71Zm465-272.3q20.27 0 33.98-13.72Q720-732.04 720-752.31q0-20.27-13.71-33.98Q692.58-800 672.31-800q-20.27 0-33.98 13.71-13.72 13.71-13.72 33.98 0 20.27 13.72 33.98 13.71 13.72 33.98 13.72Zm0 496.92ZM207.69-480Zm464.62-272.31Z"/></svg>
                      <span style="display: none;" lang="lb-btn-navbar-section:share">Compartir</span>    
                    </button>
                  </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="navbar navbar-sticky-top-responsive navbar-expand-lg nav-desktop-list shadow-sm py-2 border" style="padding: 0 3% 0 3%; background-color: var(--bs-body-bg) !important; border-bottom-width: 0 !important; border-left-width: 0 !important; border-right-width: 0 !important;">
      <div class="container justify-content-start">
        <a class="me-4" style="color: var(--bs-secondary-text-emphasis)" lang="lb-text-navbar-section:about-us" href="/nosotros">Quiénes Somos</a>
        <a class="me-4" style="color: var(--bs-secondary-text-emphasis)" lang="lb-text-navbar-section:questions" href="/preguntas">Preguntas Frecuentes</a>
        <a class="me-4" style="color: var(--bs-secondary-text-emphasis)" lang="lb-text-navbar-section:events" href="/eventos">Eventos</a>
      </div>
    </div>
`

document.getElementById('header').className = 'navbar-sticky-top-responsive';
navbarBeforeLoad.remove();
navbarContainer.appendChild(navbarContent);

// BUSCADOR

const searchInput = document.getElementById('buscar');
const resultados = document.getElementById('busqueda').querySelector('.resultado');
const formSearch = document.getElementById('formSearch');

formSearch.addEventListener('submit', event => {
  event.preventDefault();
  const valorSearch = searchInput.value.trim();

  if (valorSearch === '') return;

  const querySearch = valorSearch
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/ñ/g, 'n');

  window.location.href = '/search/?q=' + querySearch;
});

document.addEventListener('click', event => {
  if (!event.target.closest('#navbarMain')) {
    resultados.parentElement.classList.remove('mostrar');
  }
});

function generarResultados(searchTerm) {
  let resultadosHTML = '';

  alfajores.forEach(producto => {
    const link = producto.id.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/&/g, 'and');
    const nombre = producto.name.toLowerCase();
    if (nombre.includes(searchTerm) && producto.visible) {
      resultadosHTML += `
        <li class="list-group-item search">
          <a class="d-flex align-items-center" href="/productos/?p=${link}">
            <span class="me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg>
            </span>
            <span>${producto.name}</span>
          </a>
        </li>
      `;
    }
  });

  return resultadosHTML;
}

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase().trim();

  if (searchTerm.length === 0) {
    resultados.innerHTML = '';
    resultados.parentElement.classList.remove('mostrar');
    return;
  }

  resultados.innerHTML = generarResultados(searchTerm);
  resultados.parentElement.classList.add('mostrar');
});

function whenScriptSet(url) {
  // console.log(proximosEventos)
  if (url == "https://bd.alfajoreslabarraca.com.ar/js/eventos.js") cargarEvento();
}

async function setScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = false;
    s.onload = () => {
      whenScriptSet(src);
      resolve(s);
    };
    s.onerror = (e) => reject(new Error('No se pudo cargar ' + src));
    document.head.appendChild(s);
  });
}

async function getScript(url) {
  try {
    await setScript(url);
  } catch (err) {
    console.error(err);
  }
}

// Banner evento

function cargarEvento() {
  const fechaActual = new Date();
  try {
    const eventosCumplenCondicion = proximosEventos.filter(evento => {
      const fechaEvento = new Date(fechaActual.getFullYear(), evento.mes - 1, evento.diaF);
      const diferenciaDias = Math.floor((fechaEvento - fechaActual) / (1000 * 60 * 60 * 24));
      return diferenciaDias >= 0 && diferenciaDias <= 10;
    });
    if (eventosCumplenCondicion.length > 0) {
      const primerEvento = eventosCumplenCondicion[0];
      document.getElementById('evento-titulo').textContent = primerEvento.titulo;
      document.getElementById('evento-desc').textContent = `Este ${formatoRangoFechas(primerEvento)} en ${primerEvento.ubicacion}`;
      document.getElementById('evento-btn').click();
      initAll();
    }  
  } catch (error) {
    console.error(error);
  }  
}


const SPEED = 40; // px por segundo

function initMarquee(el) {
  const track = el.querySelector(".marquee-track");
  const inner = el.querySelector(".marquee-inner");
  const containerW = el.clientWidth;
  const contentW = inner.scrollWidth;

  if(contentW <= containerW){
    el.classList.remove("is-scrolling");
    return;
  }

  const clone = inner.cloneNode(true);
  track.appendChild(clone);
  el.style.setProperty("--marquee-distance", contentW + "px");

  const duration = contentW / SPEED;
  el.style.setProperty("--marquee-duration", duration + "s");
  el.classList.add("is-scrolling");
}

function initAll(){
  if(window.innerWidth > 576) return;
  document.querySelectorAll(".marquee-horizontal").forEach(initMarquee);
}

window.addEventListener("resize", initAll);

function formatoRangoFechas(evento) {
  const diaI = evento.diaI || evento.diaF;
  const diaF = evento.diaF;
  const mes1 = (evento.mes || 1) - 1;
  const mes2 = (evento.mes2 || evento.mes) - 1;
  const año = evento.año;

  const fecha1 = new Date(año, mes1, diaI);
  const fecha2 = new Date(año, mes2, diaF);

  const diferenciaDias = Math.abs(fecha2 - fecha1) / (1000 * 60 * 60 * 24);
  const duracion = diferenciaDias + 1;

  const formatoMesLargo = new Intl.DateTimeFormat("es-ES", { month: "long" });
  const m1 = formatoMesLargo.format(fecha1).toLowerCase();
  const m2 = formatoMesLargo.format(fecha2).toLowerCase();

  if (!diaI || diaI === diaF) {
    return `${diaF} de ${m2}`;
  }
  if (duracion <= 3 && m1 === m2) {
    if (duracion === 2) {
      return `${diaI} y ${diaF} de ${m1}`;
    } else {
      return `${diaI}, ${diaI + 1} y ${diaF} de ${m1}`;
    }
  }
  return (m1 === m2) 
    ? `${diaI} al ${diaF} de ${m1}` 
    : `${diaI} de ${m1} al ${diaF} de ${m2}`;
}

// Al cargar página

window.onload = () => {
    const alfajores = !document.querySelector(`script[src="https://bd.alfajoreslabarraca.com.ar/js/alfajores.js"]`);
    if (alfajores) {
        getScript("https://bd.alfajoreslabarraca.com.ar/js/alfajores.js");
    }
    const eventos = !document.querySelector(`script[src="https://bd.alfajoreslabarraca.com.ar/js/eventos.js"]`);
    if (eventos) {
        getScript("https://bd.alfajoreslabarraca.com.ar/js/eventos.js");
    } else {
      cargarEvento();
    }
}