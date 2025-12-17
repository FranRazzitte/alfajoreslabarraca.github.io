// BUSCAR

const querySearch = new URLSearchParams(window.location.search);
const querySearchValor = querySearch.get('q');
const seccionSearch = document.getElementById('pagCostruccion');
const seccionBeta = document.getElementById('pagPruebas');
const searchText = document.getElementById('searchText');
const categoriasSearch = document.getElementById('categoriasSearch');
const btnSearchLista = document.getElementById('btnSearchLista');
const btnSearchGrid = document.getElementById('btnSearchGrid');
const container_searchLista = document.getElementById('container-searchLista');
const searchLista = document.getElementById('searchLista');
const searchGrid = document.getElementById('searchGrid');

function versionBeta() {
    if (localStorage.getItem('versionBeta') == null) {
        localStorage.setItem('versionBeta', true);
        return 'Ingresó a la versión de pruebas.';
    } else {
        localStorage.removeItem('versionBeta');
        return 'Salió de la version de pruebas.';
    }
}

btnSearchLista.addEventListener('click', function() {
    container_searchLista.classList.remove('d-none');
    searchGrid.classList.add('d-none');
    btnSearchGrid.classList.remove('active');
    btnSearchLista.classList.add('active');
})

btnSearchGrid.addEventListener('click', function() {
    container_searchLista.classList.add('d-none');
    searchGrid.classList.remove('d-none');
    btnSearchGrid.classList.add('active');
    btnSearchLista.classList.remove('active');
})

if (localStorage.getItem('versionBeta')) {
    seccionBeta.style.display = 'block';
    seccionSearch.style.display = 'none';
    searchText.textContent = querySearchValor.replace('-', ' ');

    categorias.forEach((v, i) => {
        categoriasSearch.innerHTML += `
            <div class="form-check" id="cat${v.nombre}">
                <input class="form-check-input" type="checkbox" id="checkboxCat${v.nombre}">
                <label class="form-check-label" for="checkboxCat${v.nombre}">${v.nombre}</label>
            </div>
        `;
    })

    alfajores.forEach(v => {
        descDisplay = v.desc.replace(/<br>/g, ' ').slice(Number= 0, Number= 95) + "...";
        var imgSabor = v.nombre.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u');
        var urlSabor = v.nombre.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/&/g, 'and');
        if (v.visible) {
            searchGrid.innerHTML += `
                <div class="card mb-3 card-style d-flex" id="producto_${urlSabor}">
                    <a href="https://alfajoreslabarraca.com.ar/productos/?p=${urlSabor}" title="${v.nombre}">
                    <div class="row g-0">
                        <div class="col-md-4 placeholder-glow">
                        <img src="https://bd.alfajoreslabarraca.com.ar/img/products/${imgSabor}/1.png" alt="${v.nombre}" id="${v.nombre}" class="img-fluid rounded-start img" onerror="this.onerror=null; this.src='/productos/img/404NotFound.svg'; this.className='img-fluid rounded-start img placeholder'">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title titulo">${v.nombre}</h5>
                            <p class="card-text descDisplay">${descDisplay}</p>
                            <p class="card-text">
                                <small lang="lb-text-main-section:card-link" class="text-muted text-decoration-underline">Presiona para leer más</small>
                            </p>
                        </div>
                        </div>
                    </div>
                    </a>
                </div>
            `;
            searchLista.innerHTML += `
                <li class="list-group-item">
                    <a class="d-flex justify-content-between align-items-center" href="/productos/?p=${urlSabor}" title="${v.nombre}">
                    <div class="d-flex align-items-center placeholder-glow">
                        <img src="https://bd.alfajoreslabarraca.com.ar/img/products/${imgSabor}/1.png" class="img-fluid img" onerror="this.onerror=null; this.src='/productos/img/404NotFound.svg'; this.className='img-fluid img placeholder'">
                        <div class="ms-3">
                        <p class="mb-1 titulo">${v.nombre}</p>
                        </div>
                    </div>
                    </a>
                </li>
            `;
        }
    })
}