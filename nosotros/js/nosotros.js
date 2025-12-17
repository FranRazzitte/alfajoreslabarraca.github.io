// AÑOS

var currentDate = new Date();

var startDate = new Date('2018-05-05');

var fechaDif = currentDate.getFullYear() - startDate.getFullYear();
document.getElementById("fecha").textContent = fechaDif;