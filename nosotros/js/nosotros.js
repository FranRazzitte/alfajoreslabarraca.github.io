// ADAPTAR ATRIBUTOS

const navbarProductos = document.getElementById('header');
const navbarElements = navbarProductos.querySelectorAll('[src], [href]');

navbarElements.forEach(element => {
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

const footerProductos = document.getElementById('footerContent');
const footerElements = footerProductos.querySelectorAll('[src], [href]');

footerElements.forEach(element => {
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

// AÑOS

var currentDate = new Date();

var startDate = new Date('2018-05-05');

var fechaDif = currentDate.getFullYear() - startDate.getFullYear();
document.getElementById("fecha").textContent = fechaDif;