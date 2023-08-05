const noti = document.getElementById('noti');
const diaSpan = document.getElementById('dia');
const mesSpan = document.getElementById('mes');
const ubicacionSpan = document.getElementById('lugar');
const horaInicialSpan = document.getElementById('horaInicial');
const horaFinalSpan = document.getElementById('horaFinal');
const organizadorSpan = document.getElementById('organizador');

const proximosEventos = [
  { dia: 12, mes: 8, horaI: '10', horaF: '14', ubicacion: 'Jovellanos entre Suarez y Olavarria, Barracas,', organizador: 'Ecoferia Barracas' },
  { dia: 27, mes: 8, horaI: '15', horaF: '18', ubicacion: 'Herrera 799, Barracas,', organizador: 'Polideportivo Don Pepe' },
  { dia: 9, mes: 9, horaI: '15', horaF: '19', ubicacion: 'Jovellanos entre Suarez y Olavarria, Barracas,', organizador: 'Ecoferia Barracas' },
  { dia: 7, mes: 10, horaI: '15', horaF: '19', ubicacion: 'Jovellanos entre Suarez y Olavarria, Barracas,', organizador: 'Ecoferia Barracas' },
  { dia: 16, mes: 12, horaI: '16', horaF: '20', ubicacion: 'Jovellanos entre Suarez y Olavarria, Barracas,', organizador: 'Ecoferia Barracas' },
  { dia: 23, mes: 12, horaI: '16', horaF: '20', ubicacion: 'Jovellanos entre Suarez y Olavarria, Barracas,', organizador: 'Ecoferia Barracas' }
];

const fechaActual = new Date();

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