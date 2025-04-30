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