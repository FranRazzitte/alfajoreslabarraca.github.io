// CONSOLE ERROR
function showConsoleError(a, e) {
  console.error(`Error al cargar ${a}. Verificá la disponibilidad de los archivos esenciales en https://status.alfajoreslabarraca.com.ar/. (${e.message})`);
}

// MOSTRAR EVENTOS

const listaProximos = document.getElementById("lista-proximos");
const listaPasados  = document.getElementById("lista-pasados");

const hoy = new Date();
hoy.setHours(0,0,0,0);

let contadorIntervalId = null;

function isDesktop() {
  return window.matchMedia && window.matchMedia("(min-width: 768px)").matches;
}

function obtenerFechaEvento(evento) {
  let hora = 0, minuto = 0;
  if (evento.horaI) {
    const match = String(evento.horaI).match(/\d{1,2}(:\d{2})?/);
    if (match) {
      const partes = match[0].split(":");
      hora = parseInt(partes[0], 10) || 0;
      minuto = parseInt(partes[1], 10) || 0;
    }
  }
  return new Date(evento.año, (evento.mes || 1) - 1, evento.diaI || evento.diaF, hora, minuto);
}

function obtenerHorarioEvento(evento){
  let horaI = 0, minutoI = 0;
  let horaF = 23, minutoF = 59;
  if(evento.horaI){
    const match = evento.horaI.match(/\d{1,2}(:\d{2})?/);
    if(match){
      const p = match[0].split(":");
      horaI = parseInt(p[0]) || 0;
      minutoI = parseInt(p[1]) || 0;
    }
  }
  if(evento.horaF){
    const match = evento.horaF.match(/\d{1,2}(:\d{2})?/);
    if(match){
      const p = match[0].split(":");
      horaF = parseInt(p[0]) || 0;
      minutoF = parseInt(p[1]) || 0;
    }
  }
  const inicio = new Date(
    evento.año,
    evento.mes - 1,
    evento.diaI || evento.diaF,
    horaI,
    minutoI
  );
  const fin = new Date(
    evento.año,
    evento.mes - 1,
    evento.diaF,
    horaF,
    minutoF
  );
  return {inicio, fin, horaI, minutoI};
}

function textoBloqueFecha(evento) {
  const diaI = evento.diaI || evento.diaF;
  const diaF = evento.diaF;
  const año = evento.año;
  const m1_idx = (evento.mes || 1) - 1;
  const m2_idx = (evento.mes2 || evento.mes || 1) - 1;
  const fecha1 = new Date(año, m1_idx, diaI);
  const fecha2 = new Date(año, m2_idx, diaF);
  const fmt = new Intl.DateTimeFormat("es-ES", { month: "short" });
  const m1_txt = fmt.format(fecha1).replace('.', '').toUpperCase();
  const m2_txt = fmt.format(fecha2).replace('.', '').toUpperCase();

  let diaText, mesShort;

  if (m1_idx === m2_idx) {
    diaText = (diaI && diaI !== diaF) ? `${diaI} - ${diaF}` : `${diaF}`;
    mesShort = m1_txt;
  } 
  else {
    diaText = `${diaI}<span style="font-size: 14px">${m1_txt}</span> - ${diaF}<span style="font-size: 14px">${m2_txt}</span>`;
    mesShort = ``;
  }
  return { diaText, mesShort };
}

function pad(n){ return String(n).padStart(2, "0"); }

function limpiarListas() {
  listaProximos.innerHTML = "";
  listaPasados.innerHTML = "";
}

function renderizarEventos() {
  if (contadorIntervalId) {
    clearInterval(contadorIntervalId);
    contadorIntervalId = null;
  }
  limpiarListas();
  const ahora = new Date();
  const todosOrdenados = [...proximosEventos].sort((a, b) => {
    return obtenerFechaEvento(a) - obtenerFechaEvento(b);
  });
  const eventosFuturos = todosOrdenados.filter(ev=>{
    const {fin} = obtenerHorarioEvento(ev);
    return fin > ahora;
  });
  const eventosPasados = todosOrdenados.filter(ev=>{
    const {fin} = obtenerHorarioEvento(ev);
    return fin <= ahora;
  });

  const eventoMasCercano = eventosFuturos.length ? eventosFuturos[0] : null;

  eventosFuturos.forEach((evento, idx) => {
    const { diaText, mesShort } = textoBloqueFecha(evento);
    const fechaFinal = obtenerFechaEvento(evento);
    const idMapaDesktop = `mapa-desktop-${idx}`;
    const idMapaMobile  = `mapa-mobile-${idx}`;
    const idContador    = `contador-${idx}`;
    const card = document.createElement("div");
    card.className = "card shadow-sm border rounded mb-4";
    card.innerHTML = `
      <div class="row g-0 align-items-stretch">
        <div class="col-12 col-md-2 fecha-block p-3 text-center">
          <div class="fecha-dias h4 mb-1">${diaText}</div>
          <div class="fecha-mes  small">${mesShort}</div>
          ${evento === eventoMasCercano ? `<div class="mt-2"><span id="${idContador}">--</span></div>` : ""}
        </div>
        <div class="col-12 col-md-7 p-4">
          <h5 class="fw-bold mb-2">${evento.titulo}</h5>
          <p class="small mb-1">📅 ${formatoRangoFechas(evento)}</p>
          <p class="small mb-1">🕒 ${evento.horaI || "-"} a ${evento.horaF || "-"} horas</p>
          <p class="small mb-2">📍 ${evento.ubicacion || "-"}</p>
          <p class="small mb-3">${(evento.desc || "").replace("{[", "<a class='fw-bold text-decoration-underline' href='").replace("]", "'>").replace("}", "</a>")}</p>
          <div class="d-flex gap-2">
            <button class="btn btn-outline-secondary btn-sm d-md-none" data-bs-toggle="collapse" data-bs-target="#${idMapaMobile}" aria-expanded="false">Ver mapa</button>
          </div>
        </div>
        <div class="col-12 col-md-3 d-none d-md-block p-0 mapa-derecha">
          <iframe class="w-100 h-100 border-0 rounded" style="min-height: 210px; border-top-left-radius: 0 !important; border-bottom-left-radius: 0 !important" id="${idMapaDesktop}" data-src="${evento.iframe}" title="mapa-${idx}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="col-12 collapse" id="${idMapaMobile}">
          <div class="p-3">
            <iframe class="w-100 border-0 rounded" style="min-height:220px;" data-src="${evento.iframe}" title="mapa-coll-${idx}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    `;
    listaProximos.appendChild(card);

    if (isDesktop()) {
      const iframeDesktop = card.querySelector(`#${idMapaDesktop}[data-src]`);
      if (iframeDesktop && !iframeDesktop.src) iframeDesktop.src = iframeDesktop.getAttribute('data-src');
    }

    const collapseEl = card.querySelector(`#${idMapaMobile}`);
    if (collapseEl) {
      collapseEl.addEventListener('show.bs.collapse', function () {
        const iframeMobile = collapseEl.querySelector('iframe[data-src]');
        if (iframeMobile && !iframeMobile.src) iframeMobile.src = iframeMobile.getAttribute('data-src');
      }, { once: true });
    }
  });

  if (eventosFuturos.length == 0) listaProximos.innerHTML = "<p class='p-2 text-center w-100'>¡Por el momento no tenemos nuevos eventos!<br>Seguínos en nuestras redes sociales para enterarte de todas nuestras novedades.</p>";

  eventosPasados.reverse().forEach((evento, idx) => {
    const { diaText, mesShort } = textoBloqueFecha(evento);
    const idMapaMobile = `mapa-pasado-${idx}`;
    const card = document.createElement("div");
    card.className = "card shadow-sm border rounded mb-3";
    card.innerHTML = `
      <div class="row g-0 align-items-stretch">
        <div class="col-12 col-md-2 fecha-block p-3 text-center">
          <div class="fecha-dias h4 mb-1">${diaText}</div>
          <div class="fecha-mes small">${mesShort} ${evento.año}</div>
        </div>
        <div class="col-12 col-md-7 p-4">
          <h5 class="fw-bold mb-2">${evento.titulo}</h5>
          <p class="small mb-1">📅 ${formatoRangoFechas(evento)} de ${evento.año}</p>
          <p class="small mb-2">📍 ${evento.ubicacion || "-"}</p>
          <p class="small mb-3">El pasado ${formatoRangoFechas(evento)} de ${evento.año} estuvimos presentes en ${evento.tituloAlter}. Te invitamos a revivir los mejores momentos a través de nuestra galería de fotos.</p>
          <div class="d-flex gap-2">
            <button class="btn btn-outline-secondary" onclick="verGaleria('${evento.imagenes}')">
              Ver galería
            </button>
          </div>
        </div>
      </div>
    `;

    listaPasados.appendChild(card);

    const collapseEl = card.querySelector(`#${idMapaMobile}`);
    if (collapseEl) {
      collapseEl.addEventListener('show.bs.collapse', function () {
        const iframeMobile = collapseEl.querySelector('iframe[data-src]');
        if (iframeMobile && !iframeMobile.src) iframeMobile.src = iframeMobile.getAttribute('data-src');
      }, { once: true });
    }
  });

  if (eventosPasados.length > 0) document.getElementById('seccion-lista-pasados').classList.remove('d-none');
  if (eventoMasCercano) {
    const contadorEl = document.getElementById("contador-0");
    if (contadorEl) {
      iniciarContador(eventoMasCercano, contadorEl);
    }
  }
}

// Contador
function iniciarContador(evento, elemento){
  const {inicio, fin, horaI, minutoI} = obtenerHorarioEvento(evento);
  function actualizar(){
    const ahora = new Date();
    if(ahora > fin){
      elemento.innerHTML = "Finalizado";
      return;
    }
    if(ahora >= inicio && ahora <= fin){
      const inicioHoy = new Date(
        ahora.getFullYear(),
        ahora.getMonth(),
        ahora.getDate(),
        horaI,
        minutoI
      );
      const inicioMañana = new Date(inicioHoy);
      inicioMañana.setDate(inicioMañana.getDate()+1);
      if(ahora < inicioHoy){
        return mostrarContador(inicioHoy);
      }
      const finHoy = new Date(
        ahora.getFullYear(),
        ahora.getMonth(),
        ahora.getDate(),
        fin.getHours(),
        fin.getMinutes()
      );
      if(ahora <= finHoy){
        elemento.innerHTML = "En curso";
        return;
      }
      if(inicioMañana <= fin){
        return mostrarContador(inicioMañana);
      }
      elemento.innerHTML = "Finalizado";
      return;
    }
    mostrarContador(inicio);
  }

  function mostrarContador(fechaObjetivo){
    const ahora = new Date();
    const diff = fechaObjetivo - ahora;
    const seg = Math.floor(diff/1000)%60;
    const min = Math.floor(diff/60000)%60;
    const hrs = Math.floor(diff/3600000)%24;
    const dias = Math.floor(diff/86400000);
    if(dias > 0){
      elemento.innerHTML = `Faltan ${dias} días`;
    }else{
      elemento.innerHTML = `${pad(hrs)}<span style="font-size: 10px">HRS</span> ${pad(min)}<span style="font-size: 10px">MIN</span> ${pad(seg)}<span style="font-size: 10px">SEG</span>`;
    }
  }
  function pad(n){
    return String(n).padStart(2,"0");
  }
  actualizar();
  setInterval(actualizar,1000);
}

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    if (isDesktop()) {
      document.querySelectorAll('.col-md-3 iframe[data-src]').forEach(ifr => {
        if (!ifr.src) ifr.src = ifr.getAttribute('data-src');
      });
    }
  }, 150);
});
try {
  renderizarEventos();
} catch (error) {
  document.getElementById('lista-proximos').innerHTML = "<p class='p-2 text-center w-100'>¡Por el momento no tenemos nuevos eventos!<br>Seguínos en nuestras redes sociales para enterarte de todas nuestras novedades.</p>";
  showConsoleError('eventos.js', error);
}


// CARGAR IMAGENES

let imagenesCargadas = [];
let indiceActual = 0;
let textImgNotFound = "No se encontraron imágenes";

async function verGaleria(nombreCarpeta) {
  const baseUrl = `https://bd.alfajoreslabarraca.com.ar/img/events/${nombreCarpeta}/`;
  imagenesCargadas = [];
  indiceActual = 0;

  document.getElementById('galeria-overlay').classList.add('visible');

  let i = 1;
  let hayMas = true;

  while (hayMas) {
    const url = `${baseUrl}${i}.png`;
    try {
      const respuesta = await fetch(url, { method: 'HEAD' });
      if (respuesta.ok) {
        imagenesCargadas.push(url);
        if (i === 1) mostrarImagen(0);
        i++;
        document.getElementById('contador-fotos').innerText = `${indiceActual + 1} / ${imagenesCargadas.length}`;
      } else {
        hayMas = false;
      }
    } catch (error) {
      hayMas = false;
    }
    if (i > 50) break;  //evitar bucles infinitos
  }

  if (imagenesCargadas.length === 0) {
    document.getElementById('imagen-fullscreen').style.display = "none";
    document.getElementById('contador-fotos').textContent = "";
    document.getElementById('sin-fotos').textContent = textImgNotFound;
  }
}

function mostrarImagen(index) {
  const imgElement = document.getElementById('imagen-fullscreen');
  const contador = document.getElementById('contador-fotos');
  imgElement.src = imagenesCargadas[index];
  contador.innerText = `${index + 1} / ${imagenesCargadas.length}`;
  indiceActual = index;
  document.getElementById('imagen-fullscreen').style.display = "block";
  document.getElementById('sin-fotos').textContent = "";
}

function cambiarImagen(direccion) {
  if (document.getElementById('sin-fotos').textContent == textImgNotFound) return
  let nuevoIndice = indiceActual + direccion;
  if (nuevoIndice >= imagenesCargadas.length) nuevoIndice = 0;
  if (nuevoIndice < 0) nuevoIndice = imagenesCargadas.length - 1;
  mostrarImagen(nuevoIndice);
}

function cerrarGaleria() {
  document.getElementById('galeria-overlay').classList.remove('visible');
  document.getElementById('imagen-fullscreen').src = "";
}

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") cerrarGaleria();
  if (e.key === "ArrowRight") cambiarImagen(1);
  if (e.key === "ArrowLeft") cambiarImagen(-1);
});

document.getElementById('galeria-overlay').addEventListener('click', (e) => {
  if (e.target.id == 'galeria-overlay') {
    cerrarGaleria();
  }
})