
/* Recordar: Actulizar este script en la página 404 */

const menuOpenButton = document.getElementById('menuOpenButton');
const sidebar = document.createElement('div');
sidebar.id = 'sidebar';
sidebar.innerHTML = `
    <div>
        <div class="d-flex align-items-center justify-content-center">
        <img src="./imagenes/logo.png" width="100" style="padding: 5px; padding-top: 15px;">
        </div>
        <div class="d-flex align-items-center justify-content-center">
        <p style="font-family: 'pristinastd'; font-size: 26px; margin: 0px">Alfajores La Barraca</p>
        </div>
        <hr class="hr hr-blurry" />
        <div class="list-group list-group-light d-flex h-100 w-100" >
        <button type="button" id="menuCloseButton" class="list-group-item list-group-item-action px-3 border-0" style="padding-bottom: 20px;">
        <i class='bx bx-left-arrow-alt'></i> Salir
        </button>
        <a href="https://alfajoreslabarraca.com.ar/" class="list-group-item list-group-item-action px-3 border-0">
        <i class='bx bxs-home'></i> Inicio
        </a>
        <a href="./nosotros" class="list-group-item list-group-item-action px-3 border-0">
        <i class='bx bxs-info-circle'></i> Nosotros
        </a>
        <a href="./preguntas" class="list-group-item list-group-item-action px-3 border-0">
        <i class='bx bx-question-mark'></i> Preguntas Frecuentes
        </a>
        <button type="button" id="btnCompartir" class="list-group-item list-group-item-action px-3 border-0">
        <i class='bx bx-share-alt'></i> Compartir
        </button>
        <button type="button" id="buscarMobileBtn" class="list-group-item list-group-item-action px-3 border-0">
        <i class='bx bx-search'></i> Buscar
        </button>
        </div>
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