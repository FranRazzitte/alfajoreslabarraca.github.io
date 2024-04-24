
/* Recordar: Actulizar este script en la página 404 */

const menuOpenButton = document.getElementById('menuOpenButton');
const sidebar = document.createElement('div');
sidebar.id = 'sidebar';
sidebar.innerHTML = `
    <div>
        <div class="d-flex align-items-center justify-content-center">
        <img src="./imagenes/logo.png" id="logoMenuLateralMovil" width="100" style="padding: 5px; padding-top: 15px;">
        </div>
        <div class="d-flex align-items-center justify-content-center">
        <p style="font-family: 'pristinastd'; font-size: 26px; margin: 0px">Alfajores La Barraca</p>
        </div>
        <hr class="hr hr-blurry"/>
        <div style="margin-bottom: 25px">
            <div class="col-md-4 navDiv2Movil" id="navDiv2Movil">
                <form class="d-flex h-100 input-group w-auto my-auto mb-3 mb-md-0 form-control rounded" style="margin-right: 10px; margin-left: 10px;" id="formSearchMovil">
                    <input id="buscarMovil" autocomplete="off" class="flex-grow-1" style="background-color: transparent; border-color: transparent" placeholder="Buscar...">
                    <span style="background-color: transparent; font-size: 22px;" class="input-group-text border-0 p-0"><i class='bx bx-search-alt-2'></i></span>
                </form>
                <div class="busquedaMovil" id="busquedaMovil">
                    <ul class="list-group list-group-light resultadoMovil" style="border-color: transparent" id="resultadoMovil"></ul>
                </div>
            </div>
            <div class="list-group list-group-light d-flex h-100 w-100" >
            <button type="button" id="menuCloseButton" class="list-group-item list-group-item-action px-3 border-0" style="padding-bottom: 20px;">
            <svg class="theme-style" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg> Salir
            </button>
            <a href="https://alfajoreslabarraca.com.ar/" class="list-group-item list-group-item-action px-3 border-0">
            <svg class="theme-style" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path></svg> Inicio
            </a>
            <a href="./nosotros" class="list-group-item list-group-item-action px-3 border-0">
            <svg class="theme-style" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1)"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M11 11h2v6h-2zm0-4h2v2h-2z"></path></svg> Nosotros
            </a>
            <a href="./preguntas" class="list-group-item list-group-item-action px-3 border-0">
            <svg class="theme-style" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z"></path></svg> Preguntas Frecuentes
            </a>
            <button type="button" id="btnCompartir" class="list-group-item list-group-item-action px-3 border-0">
            <svg class="theme-style" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"></path></svg> Compartir
            </button>
            <button type="button" id="btn-cambiar-tema-movil" class="list-group-item list-group-item-action px-3 border-0 btn-cambiar-tema-movil auto">
            <svg id="dark-icon" class="theme-style" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path></svg>
            <svg id="light-icon" class="theme-style" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>
            <svg id="auto-icon" class="theme-style" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path><path d="M19 12a7 7 0 0 0-7-7v14a7 7 0 0 0 7-7z"></path></svg> 
            <span id="spanTemaMovil">Hola</span>
            </button>
            </div>
        </div>
    </div>
`;

document.body.insertBefore(sidebar, document.body.firstChild);

document.addEventListener('click', function(event) {
    if (!event.target.closest('#sidebar') && !event.target.closest('#menuOpenButton') && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
    }
});

menuOpenButton.addEventListener('click', function() {
    sidebar.classList.add('open');
});

const menuCloseButton = document.getElementById('menuCloseButton');

if (menuCloseButton) {
    menuCloseButton.addEventListener('click', function() {
        sidebar.classList.remove('open');
    });
}

const menuBuscar = document.getElementById('navDiv2Movil');
const logoLateralMovil = document.getElementById('logoMenuLateralMovil')

if (document.title != "Alfajores La Barraca") {
    if (document.title == 'ERROR 404 · Alfajores La Barraca') {
        menuBuscar.classList.add('d-none');
        logoLateralMovil.setAttribute("src", "/imagenes/logo.png")
    } else {
        menuBuscar.classList.add('d-none');
        logoLateralMovil.setAttribute("src", "./imagenes/logo.png")
    }
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