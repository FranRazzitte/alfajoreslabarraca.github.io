// PROXIMO EVENTO

const fechaActual = new Date();

if (document.title != "Nosotros · Alfajores La Barraca" && document.title != "Preguntas Frecuentes · Alfajores La Barraca" && document.title != "Página no encontrada · Alfajores La Barraca") {
  const noti = document.getElementById('noti');
  const diaSpan = document.getElementById('dia');
  const mesSpan = document.getElementById('mes');
  const ubicacionSpan = document.getElementById('lugar');
  const horaInicialSpan = document.getElementById('horaInicial');
  const horaFinalSpan = document.getElementById('horaFinal');
  const organizadorSpan = document.getElementById('organizador');

  const proximosEventos = [
    { dia: 11, mes: 5, horaI: '16', horaF: '20', ubicacion: 'Jovellanos entre Suarez y Olavarria, Barracas,', organizador: 'Ecoferia Barracas' },
    { dia: 13, mes: 7, horaI: '12', horaF: '18', ubicacion: 'Jovellanos entre Suarez y Olavarria, Barracas,', organizador: 'Ecoferia Barracas' }
  ];

  const eventosCumplenCondicion = proximosEventos.filter(evento => {
    const fechaEvento = new Date(fechaActual.getFullYear(), evento.mes - 1, evento.dia);
    const diferenciaDias = Math.floor((fechaEvento - fechaActual) / (1000 * 60 * 60 * 24));
    return diferenciaDias >= 0 && diferenciaDias <= 10;
  });

  if (eventosCumplenCondicion.length > 0) {
    const primerEvento = eventosCumplenCondicion[0];
    diaSpan.textContent = primerEvento.dia;
    mesSpan.textContent = obtenerNombreMes(primerEvento.mes);
    ubicacionSpan.textContent = primerEvento.ubicacion;
    horaInicialSpan.textContent = primerEvento.horaI;
    horaFinalSpan.textContent = primerEvento.horaF;
    organizadorSpan.textContent = primerEvento.organizador;
    noti.style.display = 'block';
  }

  document.getElementById('cerrar-noti').addEventListener('click', function() {
      noti.style.display = 'none';
  });

  function obtenerNombreMes(numeroMes) {
    const meses = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    return meses[numeroMes - 1];
  }
}

// LOGO SEGÚN FECHA

const logoH = document.getElementById('logoH');
const logoF = document.getElementById('logoF');
const logoM = document.getElementById('logoM');

var diaActual = fechaActual.getDate();
var mesActual = fechaActual.getMonth();

if (mesActual === 4 && diaActual >= 18 && diaActual <= 25) {
  if (document.title === "Página no encontrada · Alfajores La Barraca") {
    logoH.src = "/imagenes/logoArg.png";
    logoF.src = "/imagenes/logoArg.png";
    logoM.src = "/imagenes/logoArg.png";
  } else {
    logoH.src = "./imagenes/logoArg.png";
    logoF.src = "./imagenes/logoArg.png";
    logoM.src = "./imagenes/logoArg.png";
  }
}
if (mesActual === 5 && diaActual === 20) {
  if (document.title === "Página no encontrada · Alfajores La Barraca") {
    logoH.src = "/imagenes/logoArg.png";
    logoF.src = "/imagenes/logoArg.png";
    logoM.src = "/imagenes/logoArg.png";
  } else {
    logoH.src = "./imagenes/logoArg.png";
    logoF.src = "./imagenes/logoArg.png";
    logoM.src = "./imagenes/logoArg.png";
  }
}
if (mesActual === 6 && diaActual === 9) {
  if (document.title === "Página no encontrada · Alfajores La Barraca") {
    logoH.src = "/imagenes/logoArg.png";
    logoF.src = "/imagenes/logoArg.png";
    logoM.src = "/imagenes/logoArg.png";
  } else {
    logoH.src = "./imagenes/logoArg.png";
    logoF.src = "./imagenes/logoArg.png";
    logoM.src = "./imagenes/logoArg.png";
  }
}

// CANT. AÑOS (NOSOTROS.HTML)

if (document.title == 'Nosotros · Alfajores La Barraca') {
  var currentDate = new Date();

  var startDate = new Date('2018-05-05');

  var fechaDif = currentDate.getFullYear() - startDate.getFullYear();
  document.getElementById("fecha").textContent = fechaDif;
}

// CANT. ALFAJORES VISIBLES (PREGUNTAS.HTML)

if (document.title == 'Preguntas Frecuentes · Alfajores La Barraca') {
  const cantAlfajores = document.getElementById('numAlfajores');
  var numAlfajores = 0

  alfajores.forEach(sabor => {
    if (sabor.visible && sabor.categoria.includes('todos')) {
      numAlfajores += 1;
    }
  })
  cantAlfajores.textContent = numAlfajores;
}