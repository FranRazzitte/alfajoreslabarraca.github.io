const navbarBeforeLoad = document.getElementById('navbarBeforeLoad');
const navbarContainer = document.getElementById('navbar');
const navbarContent = document.createElement('div');
navbarContent.id = 'navbar';
navbarContent.innerHTML = `
    <div class="etiquetaSup">
        <span>Envíos sin cargo a Barracas, La Boca y San Telmo. Medios de pago: Efectivo, Transferencia Bancaría o Mercado Pago. Los pedidos se realizan mediante WhatsApp.</span>
    </div>
    <div class="container">
        <div class="row">
            <div class="col-md-4 d-flex justify-content-left justify-content-md-start mb-md-0 navDiv1" style="padding: 0px;">
                <button class="btn menuLateral" id="menuOpenButton"><svg class="theme-style" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg></button>
                <a href="https://alfajoreslabarraca.com.ar/" class="d-inline-block align-text-center logoMenuSup">
                    <img id="logoH" src="./imagenes/logo.png" width="45">
                    <span>Alfajores La Barraca</span>
                </a>
            </div>
            <div class="col-md-4 justify-content-left justify-content-md-start mb-md-0 navDiv2" id="navDiv2">
                <form class="input-group w-100 my-auto d-none d-sm-flex" id="formSearch">
                    <input
                        autocomplete="off"
                        id="buscar"
                        class="form-control rounded"
                        placeholder="Buscar"
                        style="min-width: 125px;"
                    />
                    <span class="input-group-text border-0 d-none d-lg-flex" style="background-color: transparent;">
                        <svg class="theme-style" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg>
                    </span>
                    <div class="busqueda" id="busqueda">
                        <ul class="list-group list-group-light resultado" id="resultado" style="background-color: white;"></ul>	
                    </div>
                </form>
            </div>
            <div class="col-md-4 justify-content-center justify-content-md-end align-items-center navDiv3" style="height: auto;">
                <div class="d-flex justify-content-center align-items-center">
                    <a href="https://alfajoreslabarraca.com.ar/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: var(--clr-general)"><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path></svg></a>
                    <a style="margin-left: 20px; margin-right: 20px;" href="./nosotros"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: var(--clr-general)"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg></a>
                    <a href="./preguntas"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: var(--clr-general);"><path d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z"></path></svg></a>
                    <div class="dropdown">
                        <button class="btn btn-cambiar-tema auto" id="btn-cambiar-tema">
                            <svg id="light-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style="fill: var(--clr-general);"><path d="M6.995 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007-2.246-5.007-5.007-5.007S6.995 9.239 6.995 12zM11 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2H2zm17 0h3v2h-3zM5.637 19.778l-1.414-1.414 2.121-2.121 1.414 1.414zM16.242 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.344 7.759 4.223 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>
                            <svg id="dark-icon" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" style="fill: var(--clr-general);"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>
                            <svg id="auto-icon" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" style="fill: var(--clr-general);"><path d="M440-120q-134 0-227-93t-93-227q0-134 93-227t227-93q5 0 10 .5t10 .5q-29 32-44.5 73T400-600q0 100 70 170t170 70q31 0 60.5-7.5T756-390q-18 118-108 194t-208 76Zm112-400 128-360h80l128 360h-76l-28-80H656l-28 80h-76Zm122-134h92l-46-146-46 146Z"/></svg>
                        </button>
                        <ul class="dropdown-menu" id="dropdownMenu">
                            <li><button class="dropdown-item" id="light-mode">Modo Claro</button></li>
                            <li><button class="dropdown-item" id="dark-mode">Modo Oscuro</button></li>
                            <li><button class="dropdown-item selected" id="auto-mode">Igualar al Sistema</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

navbarBeforeLoad.remove();
navbarContainer.appendChild(navbarContent);

if (document.title == 'Nosotros · Alfajores La Barraca' || document.title == "Preguntas Frecuentes · Alfajores La Barraca" || document.title == "Página no encontrada · Alfajores La Barraca") {
    document.getElementById('formSearch').remove();
}