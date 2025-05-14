// ADAPTAR ATRIBUTOS

const navbarProductos = document.getElementById('header');
const navbarElements = navbarProductos.querySelectorAll('[src], [href]');

navbarElements.forEach(element => {
    if (element.hasAttribute('src')) {
        let srcValue = element.getAttribute('src');
        if (srcValue.startsWith('./')) {
            element.setAttribute('src', srcValue.replace('./', '../'));
        }
    }
    if (element.hasAttribute('href')) {
        let hrefValue = element.getAttribute('href');
        if (hrefValue.startsWith('./')) {
            element.setAttribute('href', hrefValue.replace('./', '../'));
        }
    }
});

const footerProductos = document.getElementById('footerContent');
const footerElements = footerProductos.querySelectorAll('[src], [href]');

footerElements.forEach(element => {
    if (element.hasAttribute('src')) {
        let srcValue = element.getAttribute('src');
        if (srcValue.startsWith('./')) {
            element.setAttribute('src', srcValue.replace('./', '../'));
        }
    }
    if (element.hasAttribute('href')) {
        let hrefValue = element.getAttribute('href');
        if (hrefValue.startsWith('./')) {
            element.setAttribute('href', hrefValue.replace('./', '../'));
        }
    }
});

const sidebarProductos = document.getElementById('sidebar');
const sidebarElements = sidebarProductos.querySelectorAll('[src], [href]');

sidebarElements.forEach(element => {
    if (element.hasAttribute('src')) {
        let srcValue = element.getAttribute('src');
        if (srcValue.startsWith('./')) {
            element.setAttribute('src', srcValue.replace('./', '../'));
        }
    }
    if (element.hasAttribute('href')) {
        let hrefValue = element.getAttribute('href');
        if (hrefValue.startsWith('./')) {
            element.setAttribute('href', hrefValue.replace('./', '../'));
        }
    }
});

// STATUS PAGE

const archivos = [
    { nombre: "Products", url: "https://cdn.jsdelivr.net/gh/FranRazzitte/bd.alfajoreslabarraca@main/alfajores.js" },
    // { nombre: "Categories"},
    // { nombre: "Carousel"},
    // { nombre: "Events"},
    // { nombre: "Announcements"}
];

const container = document.getElementById('statusContainer');

function registrarError(nombreArchivo, mensaje) {
  const log = document.getElementById('logErrores');
  const li = document.createElement('li');
  const hora = new Date().toLocaleTimeString();
  li.innerHTML = `<small><strong>Error al acceder a ${nombreArchivo}:</strong> ${mensaje} <span style="color:gray;">(${hora})</span></small>`;
  log.appendChild(li);
}

archivos.forEach(archivo => {
    const card = document.createElement('div');
    card.className = 'card-status';
    card.innerHTML = `
        <div>
        <strong style="color: black !important">${archivo.nombre}</strong><br>
        <span class="small">Comprobando...</span>
        </div>
        <div class="status"><span class="status-icon loading"><svg id="ok" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" viewBox="0 0 24 24" ><path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10m0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8"></path><path d="M10 16c-.26 0-.51-.1-.71-.29l-3-3L7.7 11.3l2.29 2.29 5.29-5.29 1.41 1.41-6 6c-.2.2-.45.29-.71.29Z"></path></svg><svg id="loader" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="gray" viewBox="0 0 24 24" ><path d="M12 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4M12 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4M7.76 19.07c-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83 2.05-.78 2.83 0 .78 2.05 0 2.83M19.07 7.76c-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83 2.05-.78 2.83 0 .78 2.05 0 2.83M4 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M20 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M4.93 7.76c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0 .78 2.05 0 2.83-2.05.78-2.83 0M16.24 19.07c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0 .78 2.05 0 2.83-2.05.78-2.83 0"></path></svg><svg id="error" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24" ><path d="M14.83 7.76 12 10.59 9.17 7.76 7.76 9.17 10.59 12l-2.83 2.83 1.41 1.41L12 13.41l2.83 2.83 1.41-1.41L13.41 12l2.83-2.83z"></path><path d="M12 2C9.33 2 6.82 3.04 4.93 4.93S2 9.33 2 12s1.04 5.18 2.93 7.07c1.95 1.95 4.51 2.92 7.07 2.92s5.12-.97 7.07-2.92S22 14.67 22 12s-1.04-5.18-2.93-7.07A9.93 9.93 0 0 0 12 2m5.66 15.66c-3.12 3.12-8.19 3.12-11.31 0-1.51-1.51-2.34-3.52-2.34-5.66s.83-4.15 2.34-5.66S9.87 4 12.01 4s4.15.83 5.66 2.34 2.34 3.52 2.34 5.66-.83 4.15-2.34 5.66Z"></path></svg></span></div>
    `;
    container.appendChild(card);

    const statusIcon = card.querySelector('.status-icon');
    const textSpan = card.querySelector('div .small');

    fetch(archivo.url, { method: 'HEAD'})
    .then(response => {
        if (!response || !response.ok) {
            throw new Error(`HTTP ${response?.status || 'NO RESPONSE'} – ${response?.statusText || 'Sin acceso'}`);
        }
        statusIcon.className = 'status-icon ok';
        textSpan.textContent = 'Normal';
    })
    .catch((err) => {
        statusIcon.className = 'status-icon fail';
        textSpan.textContent = 'Error';
        const hora = new Date().toLocaleTimeString();
        registrarError(archivo.nombre, err.message || 'Error al acceder');
    });
});