// ADAPTAR ATRIBUTOS

const elements = document.querySelectorAll('[src], [href]');

elements.forEach(element => {
    if (element.hasAttribute('src')) {
        let srcValue = element.getAttribute('src');
        if (srcValue.startsWith('./')) {
            element.setAttribute('src', srcValue.replace('./', '../'));
        }
    }
    if (element.hasAttribute('href')) {
        let hrefValue = element.getAttribute('href');
        if (hrefValue.startsWith('./')) {
            element.setAttribute('href', hrefValue.replace('./', '../'));
        }
    }
});

// BUSCAR

const querySearch = new URLSearchParams(window.location.search);
const querySearchValor = querySearch.get('q');
const seccionSearch = document.getElementById('pagCostruccion');
const seccionBeta = document.getElementById('pagPruebas');
const searchText = document.getElementById('searchText');

function versionBeta() {
    if (localStorage.getItem('versionBeta') == null) {
        localStorage.setItem('versionBeta', true);
        return 'Ingresó a la versión de pruebas.';
    } else {
        localStorage.removeItem('versionBeta');
        return 'Salió de la version de pruebas.';
    }
}

if (localStorage.getItem('versionBeta')) {
    seccionBeta.style.display = 'block';
    seccionSearch.style.display = 'none';
    searchText.textContent = 'Resultados de la busqueda para: ' + querySearchValor.replace('-', ' ');
}