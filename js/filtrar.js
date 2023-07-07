// Obtener referencias a los elementos
const btnChocolate = document.getElementById('btnChocolate');
const btnMaicena = document.getElementById('btnMaicena');
const btnAvena = document.getElementById('btnAvena');
const btnFrutal = document.getElementById('btnFrutal');
const btnIntegral = document.getElementById('btnIntegral');
const btnCajas = document.getElementById('btnCajas');
const chocolates = document.getElementById('chocolates');
const maicena = document.getElementById('maicena');
const avena = document.getElementById('avena');
const frutales = document.getElementById('frutales');
const integrales = document.getElementById('integrales');
const cajas = document.getElementById('cajas');

// Agregar eventos de clic a los botones
btnChocolate.addEventListener('click', function() {
    btnChocolate.classList.add('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.remove('active');
    btnIntegral.classList.remove('active');
    btnCajas.classList.remove('active');
    chocolates.classList.add('d-flex');
    chocolates.classList.remove('d-none');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-flex');
    avena.classList.add('d-none');
    avena.classList.remove('d-flex');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-flex');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-flex');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-flex');
});

btnMaicena.addEventListener('click', function() {
    btnChocolate.classList.remove('active');
    btnMaicena.classList.add('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.remove('active');
    btnIntegral.classList.remove('active');
    btnCajas.classList.remove('active');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-flex');
    maicena.classList.add('d-flex');
    maicena.classList.remove('d-none');
    avena.classList.add('d-none');
    avena.classList.remove('d-flex');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-flex');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-flex');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-flex');
});

btnAvena.addEventListener('click', function() {
    btnChocolate.classList.remove('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.add('active');
    btnFrutal.classList.remove('active');
    btnIntegral.classList.remove('active');
    btnCajas.classList.remove('active');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-flex');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-flex');
    avena.classList.add('d-flex');
    avena.classList.remove('d-none');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-flex');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-flex');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-flex');
});

btnFrutal.addEventListener('click', function() {
    btnChocolate.classList.remove('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.add('active');
    btnIntegral.classList.remove('active');
    btnCajas.classList.remove('active');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-flex');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-flex');
    avena.classList.add('d-none');
    avena.classList.remove('d-flex');
    frutales.classList.add('d-flex');
    frutales.classList.remove('d-none');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-flex');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-flex');
});
  
btnIntegral.addEventListener('click', function() {
    btnChocolate.classList.remove('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.remove('active');
    btnIntegral.classList.add('active');
    btnCajas.classList.remove('active');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-flex');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-flex');
    avena.classList.add('d-none');
    avena.classList.remove('d-flex');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-flex');
    integrales.classList.add('d-flex');
    integrales.classList.remove('d-none');
    cajas.classList.add('d-none');
    cajas.classList.remove('d-flex');
});

btnCajas.addEventListener('click', function() {
    btnChocolate.classList.remove('active');
    btnMaicena.classList.remove('active');
    btnAvena.classList.remove('active');
    btnFrutal.classList.remove('active');
    btnIntegral.classList.remove('active');
    btnCajas.classList.add('active');
    chocolates.classList.add('d-none');
    chocolates.classList.remove('d-flex');
    maicena.classList.add('d-none');
    maicena.classList.remove('d-flex');
    avena.classList.add('d-none');
    avena.classList.remove('d-flex');
    frutales.classList.add('d-none');
    frutales.classList.remove('d-flex');
    integrales.classList.add('d-none');
    integrales.classList.remove('d-flex');
    cajas.classList.add('d-flex');
    cajas.classList.remove('d-none');
});