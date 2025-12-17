// LOGO SEGÚN FECHA

const logoH = document.getElementById('logoH');
const logoF = document.getElementById('logoF');
const logoM = document.getElementById('logoM');

const fecha = new Date();

var diaActual = fecha.getDate();
var mesActual = fecha.getMonth();

if (mesActual === 4 && diaActual >= 18 && diaActual <= 25) {
  if (document.title === "Página no encontrada · Alfajores La Barraca") {
    logoH.src = "/img/logoArg.png";
    logoF.src = "/img/logoArg.png";
    logoM.src = "/img/logoArg.png";
  } else {
    logoH.src = "/img/logoArg.png";
    logoF.src = "/img/logoArg.png";
    logoM.src = "/img/logoArg.png";
  }
}
if (mesActual === 5 && diaActual === 20) {
  if (document.title === "Página no encontrada · Alfajores La Barraca") {
    logoH.src = "/img/logoArg.png";
    logoF.src = "/img/logoArg.png";
    logoM.src = "/img/logoArg.png";
  } else {
    logoH.src = "/img/logoArg.png";
    logoF.src = "/img/logoArg.png";
    logoM.src = "/img/logoArg.png";
  }
}
if (mesActual === 6 && diaActual === 9) {
  if (document.title === "Página no encontrada · Alfajores La Barraca") {
    logoH.src = "/img/logoArg.png";
    logoF.src = "/img/logoArg.png";
    logoM.src = "/img/logoArg.png";
  } else {
    logoH.src = "/img/logoArg.png";
    logoF.src = "/img/logoArg.png";
    logoM.src = "/img/logoArg.png";
  }
}