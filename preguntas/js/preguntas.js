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

// CANT. ALFAJORES VISIBLES

const cantAlfajores = document.getElementById('numAlfajores');
var numAlfajores = 0

alfajores.forEach(sabor => {
    if (sabor.visible && sabor.category.includes('todos')) {
    numAlfajores += 1;
    }
})
cantAlfajores.textContent = numAlfajores;