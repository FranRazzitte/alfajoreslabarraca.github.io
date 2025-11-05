const navbarBeforeLoad = document.getElementById('navbarBeforeLoad');
const navbarContainer = document.getElementById('navbar');
const navbarContent = document.createElement('div');
navbarContent.id = 'navbar';
navbarContent.innerHTML = `
    <div class="navbar navbar-sticky-top-responsive navbar-expand-lg shadow-sm py-2 bg-white" style="padding: 0 3% 0 3%">
        <div class="container-fluid">
            <a class="navbar-brand me-2 fw-bold" href="https://alfajoreslabarraca.com.ar/">
                <img src="https://alfajoreslabarraca.com.ar/imagenes/logo.png" alt="Logo" width="55px" class="me-2">
            </a>
            <button class="btn navbar-menu collapsed" style="display: none;" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarMain">
                <form class="d-flex mx-auto my-2" role="search" style="width: 50%; position: relative;" id="formSearch">
                    <input class="form-control me-2" type="search" placeholder="Buscar..." id="buscar" aria-label="Buscar">
                    <button class="btn btn-outline-primary" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg>
                    </button>
                    <div class="busqueda" id="busqueda">
                        <ul class="list-group list-group-light resultado" id="resultado" style="background-color: white;"></ul>	
                    </div>
                </form>
                <ul class="navbar-nav ms-2 mb-2 mb-lg-0 justify-content-center">
                    <li class="nav-item me-3">
                        <a class="nav-link" href="./nosotros">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="var(--bs-body-color)"><path d="M450-290h60v-230h-60v230Zm30-298.46q13.73 0 23.02-9.29t9.29-23.02q0-13.73-9.29-23.02-9.29-9.28-23.02-9.28t-23.02 9.28q-9.29 9.29-9.29 23.02t9.29 23.02q9.29 9.29 23.02 9.29Zm.07 488.46q-78.84 0-148.21-29.92t-120.68-81.21q-51.31-51.29-81.25-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.92t120.68 81.21q51.31 51.29 81.25 120.63Q860-558.9 860-480.07q0 78.84-29.92 148.21t-81.21 120.68q-51.29 51.31-120.63 81.25Q558.9-100 480.07-100Zm-.07-60q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                            <span style="display: none;">Nosotros</span>
                        </a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="./preguntas">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="var(--bs-body-color)"><path d="M500-114.62 493.85-220H460q-133.54 0-226.77-93.23Q140-406.46 140-540q0-133.54 93.23-226.77Q326.46-860 460-860q66.77 0 124.81 24.96 58.04 24.96 101.65 68.58 43.62 43.61 68.58 101.65Q780-606.77 780-540q0 68.08-21.23 130.73-21.23 62.65-58.35 117.23-37.11 54.58-88.5 99.69-51.38 45.12-111.92 77.73ZM560-226q71-60 115.5-140.5T720-540q0-109-75.5-184.5T460-800q-109 0-184.5 75.5T200-540q0 109 75.5 184.5T460-280h100v54Zm-99.85-103.08q14.7 0 24.97-10.27 10.26-10.27 10.26-24.96 0-14.69-10.26-24.96-10.27-10.27-24.97-10.27-14.69 0-24.96 10.27-10.27 10.27-10.27 24.96 0 14.69 10.27 24.96 10.27 10.27 24.96 10.27Zm-23.23-122h47.69q.77-27.3 7.74-40.46 6.96-13.15 37.8-44 17.62-17.61 28.66-37.08 11.04-19.46 11.04-43.07 0-47.16-32.2-72.27-32.19-25.12-76.88-25.12-40.54 0-68.42 22.39-27.89 22.38-39.89 53.92l44.46 17.38q6.54-17.38 21.31-32.92 14.77-15.54 42.54-15.54 30.46 0 45.31 16.73 14.84 16.74 14.84 36.66 0 18.54-10.19 32.23-10.19 13.69-25.34 28.85-31.93 27.69-40.2 46.53-8.27 18.85-8.27 55.77ZM460-513Z"/></svg>
                            <span style="display: none;">Preguntas Frecuentes</span>    
                        </a>
                    </li>
                    <li class="nav-item me-3 share" style="display: none;">
                        <button class="border-0 m-0 nav-link" id="btnCompartir">
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="var(--bs-body-color)"><path d="M672.22-100q-44.91 0-76.26-31.41-31.34-31.41-31.34-76.28 0-6 4.15-29.16L284.31-404.31q-14.46 15-34.36 23.5t-42.64 8.5q-44.71 0-76.01-31.54Q100-435.39 100-480q0-44.61 31.3-76.15 31.3-31.54 76.01-31.54 22.74 0 42.64 8.5 19.9 8.5 34.36 23.5l284.46-167.08q-2.38-7.38-3.27-14.46-.88-7.08-.88-15.08 0-44.87 31.43-76.28Q627.49-860 672.4-860t76.25 31.44Q780-797.13 780-752.22q0 44.91-31.41 76.26-31.41 31.34-76.28 31.34-22.85 0-42.5-8.69Q610.15-662 595.69-677L311.23-509.54q2.38 7.39 3.27 14.46.88 7.08.88 15.08t-.88 15.08q-.89 7.07-3.27 14.46L595.69-283q14.46-15 34.12-23.69 19.65-8.69 42.5-8.69 44.87 0 76.28 31.43Q780-252.51 780-207.6t-31.44 76.25Q717.13-100 672.22-100Zm.09-60q20.27 0 33.98-13.71Q720-187.42 720-207.69q0-20.27-13.71-33.98-13.71-13.72-33.98-13.72-20.27 0-33.98 13.72-13.72 13.71-13.72 33.98 0 20.27 13.72 33.98Q652.04-160 672.31-160Zm-465-272.31q20.43 0 34.25-13.71 13.83-13.71 13.83-33.98 0-20.27-13.83-33.98-13.82-13.71-34.25-13.71-20.11 0-33.71 13.71Q160-500.27 160-480q0 20.27 13.6 33.98 13.6 13.71 33.71 13.71Zm465-272.3q20.27 0 33.98-13.72Q720-732.04 720-752.31q0-20.27-13.71-33.98Q692.58-800 672.31-800q-20.27 0-33.98 13.71-13.72 13.71-13.72 33.98 0 20.27 13.72 33.98 13.71 13.72 33.98 13.72Zm0 496.92ZM207.69-480Zm464.62-272.31Z"/></svg>
                            <span style="display: none;">Compartir</span>    
                        </button>
                    </li>
                    <li class="nav-item dropdown me-3">
                        <button class="btn btn-cambiar-tema auto me-3" id="btn-cambiar-tema">
                            <svg id="light-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--clr-general)"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 60q-74.92 0-127.46-52.54Q300-405.08 300-480q0-74.92 52.54-127.46Q405.08-660 480-660q74.92 0 127.46 52.54Q660-554.92 660-480q0 74.92-52.54 127.46Q554.92-300 480-300ZM200-450H50v-60h150v60Zm710 0H760v-60h150v60ZM450-760v-150h60v150h-60Zm0 710v-150h60v150h-60ZM262.92-656.92l-93.69-90.46 42.39-44.39 90.23 92.69-38.93 42.16Zm485.46 488.69-90.84-93.31 39.54-41.54 93.69 90.46-42.39 44.39Zm-91.46-528.85 90.46-93.69 44.39 42.39-92.69 90.23-42.16-38.93ZM168.23-211.62l93.31-90.84 40.77 39.54-90.08 94.07-44-42.77ZM480-480Z"/></svg>
                            <svg id="dark-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--clr-general)"><path d="M481.15-140q-141.66 0-240.83-99.17-99.16-99.16-99.16-240.83 0-135.77 92.11-232.88 92.11-97.12 225.57-105.2 8.62 0 16.93.62 8.3.62 16.3 1.85-30.61 28.61-48.76 69.15-18.16 40.54-18.16 86.46 0 98.33 68.84 167.17Q562.82-424 661.15-424q46.54 0 86.77-18.15 40.23-18.16 68.46-48.77 1.23 8 1.85 16.31.61 8.3.61 16.92-7.69 133.46-104.8 225.57Q616.92-140 481.15-140Zm0-60q88 0 158-48.5t102-126.5q-20 5-40 8t-40 3q-123 0-209.5-86.5T365.15-660q0-20 3-40t8-40q-78 32-126.5 102t-48.5 158q0 116 82 198t198 82Zm-10-270Z"/></svg>
                            <svg id="auto-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--clr-general)"><path d="M594.23-648.08 488.46-753.85l105.77-105.76L700-753.85 594.23-648.08Zm200 120-65.77-65.77 65.77-65.76L860-593.85l-65.77 65.77ZM483-100q-79.77 0-149.61-30.27-69.85-30.27-121.85-82.27t-82.27-121.85Q99-404.23 99-484q0-131.38 80.12-234.04 80.11-102.65 207.19-134.65-11.08 96.31 19.84 186.77 30.93 90.46 99.62 159.15 68.69 68.69 159.15 99.62 90.46 30.92 186.77 19.84-31.38 127.08-134.35 207.19Q614.38-100 483-100Zm0-60q88 0 163-44t118-121q-86-8-163-43.69t-138-96.69q-61-61-97-137.81T323-766q-77 43-120.5 118.5T159-484q0 135 94.5 229.5T483-160Zm-20-305.38Z"/></svg>
                            <span style="display: none;">Apariencia</span>
                        </button>
                        <ul class="dropdown-menu" id="dropdownMenu">
                            <li><button lang="lb-btn-navbar-section:light-mode" class="dropdown-item" id="light-mode">Modo Claro</button></li>
                            <li><button lang="lb-btn-navbar-section:night-mode" class="dropdown-item" id="dark-mode">Modo Oscuro</button></li>
                            <li><button lang="lb-btn-navbar-section:default" class="dropdown-item selected" id="auto-mode">Igualar al Sistema</button></li>
                        </ul>
                    </li>
                </ul>
            </div>
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
    const link = producto.id.toLowerCase();
    const nombre = producto.name.toLowerCase();
    if (nombre.includes(searchTerm) && producto.visible) {
      resultadosHTML += `
        <li class="list-group-item search">
          <a class="d-flex align-items-center" href="/productos/?p=${link.replace(/\s+/g, '-')}">
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

async function cargarScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.async = false; // o false si quieres orden
    s.onload = () => resolve(s);
    s.onerror = (e) => reject(new Error('No se pudo cargar ' + src));
    document.head.appendChild(s);
  });
}

async function usarScript() {
  try {
    await cargarScript('https://bd.alfajoreslabarraca.com.ar/js/alfajores.js');
    console.log(alfajores)
  } catch (err) {
    console.error(err);
  }
}

window.onload = () => {
    const alfajores = !document.querySelector(`script[src="https://bd.alfajoreslabarraca.com.ar/js/alfajores.js"]`);
    if (alfajores) {
        usarScript();
    }
}