
/* Recordar: Actulizar este script en la página 404 */

const menuOpenButton = document.getElementById('menuOpenButton');
const sidebar = document.createElement('div');
sidebar.id = 'sidebar';
sidebar.innerHTML = `
    <div class="d-flex btn-group-vertical">
        <a class="btnNav bx" id="menuCloseButton"><i class='bx bx-left-arrow-alt'></i> Salir</a>
        <hr class="hr">
        <a class="btnNav bx" href="https://alfajoreslabarraca.com.ar/"><i class='bx bxs-home'></i> Inicio</a>
        <a class="btnNav bx" href="./nosotros"><i class='bx bxs-info-circle'></i> Nosotros</a>
        <a class="btnNav bx" href="./preguntas"><i class='bx bx-question-mark'></i> Preguntas Frecuentes</a>
        <a class="btnNav bx" id="btnCompartir"><i class='bx bx-share-alt'></i> Compartir</a>
        <a class="btnNav bx" id="buscarMobileBtn"><i class='bx bx-search'></i> Buscar</a>
    </div>
`;

document.body.insertBefore(sidebar, document.body.firstChild);

menuOpenButton.addEventListener('click', function() {
    sidebar.classList.add('open');
});

const menuCloseButton = document.getElementById('menuCloseButton');

if (menuCloseButton) {
    menuCloseButton.addEventListener('click', function() {
        sidebar.classList.remove('open');
    });
}

const buscarMobileBtn = document.getElementById('buscarMobileBtn');
const navDiv2 = document.querySelector('.navDiv2');

if (buscarMobileBtn && navDiv2) {
    buscarMobileBtn.addEventListener('click', function() {
        navDiv2.style.display = navDiv2.style.display === 'block' ? 'none' : 'block';
        sidebar.classList.remove('open');
    });
}

function toggleMenuButton() {
    if (window.innerWidth <= 768) {
        menuOpenButton.style.display = 'block';
    } else {
        menuOpenButton.style.display = 'none';
    }
}

toggleMenuButton();
window.addEventListener('resize', toggleMenuButton);