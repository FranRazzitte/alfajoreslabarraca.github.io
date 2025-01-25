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

const sidebarProductos = document.getElementById('sidebar');
const sidebarElements = sidebarProductos.querySelectorAll('[src], [href]');

sidebarElements.forEach(element => {
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

// Relacionados y Recomendados

function productosRelacionados (categoria, titulo) {
    const relacionados = document.getElementById('relacionados');
    var saboresRelacionados = 0
    alfajores.forEach(sabor => {
        descDisplay = sabor.desc.replace(/<br>/g, ' ').slice(Number= 0, Number= 120) + "...";
        var imgSabor = sabor.nombre.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u');
        var urlSabor = sabor.nombre.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/&/g, 'and');
        if (sabor.visible && sabor.categoria.includes(categoria) && sabor.nombre != titulo) {
          const productoHTML = `
            <div class="card mb-3 card-style">
              <a href="./?p=${urlSabor}" title="${sabor.nombre}">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="../imagenes/sabores/${imgSabor}.png" alt="${sabor.nombre}" id="${sabor.nombre}" class="img-fluid rounded-start img">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title titulo">${sabor.nombre}</h5>
                      <p class="descripcion d-none">${sabor.desc}</p>
                      <p class="card-text descDisplay">${descDisplay}</p>
                      <p class="precio">${sabor.precioPagina}</p>
                      <p class="linkCatalogo">${sabor.linkCatalogo}</p>
                      <p class="card-text">
                        <small class="text-muted text-decoration-underline">Presiona para leer más</small>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>`
            relacionados.innerHTML += productoHTML;
            saboresRelacionados += 1
        }
    })
    return saboresRelacionados
}

// Cargar producto

const tituloProducto = document.getElementById('tituloProducto');
const descProducto = document.getElementById('descProducto');
const precioProducto = document.getElementById('precio');
const sinPrecio = document.getElementById('sinPrecio');
const conPrecio = document.getElementById('conPrecio');
const sinStock = document.getElementById('sinStock');
const imgProducto = document.getElementById('imgProducto');
const linkProducto = document.getElementById('linkProducto');


document.addEventListener('DOMContentLoaded', function() {
  cargarProducto();
});

function reemplazar(string) {
    return string.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')
}

function cargarProducto() {
  if (window.location.hash == '') {
    const parametro = new URLSearchParams(window.location.search);
    if (parametro.size != 0) {
        const parametroValor = parametro.get('p').replace('and', '&');
        const relacionadosBeforeLoad = document.getElementById('relacionadosBeforeLoad');
        const tituloRelacionados = document.getElementById('tituloRelacionados');
        if (parametroValor) {
            const productosListFind = alfajores.find(sabor => reemplazar(sabor.nombre) === parametroValor);
            if (productosListFind) {
                if (productosListFind.visible) {
                    const titulo = productosListFind.nombre
                    const descripcion = productosListFind.desc;
                    const precio = productosListFind.precioPagina;
                    const imagen = '../imagenes/sabores/' + parametroValor + '.png';
                    const link = productosListFind.linkCatalogo;
                    const categoriaArray = productosListFind.categoria;

                    tituloProducto.textContent = titulo;
                    descProducto.innerHTML = descripcion;
                    precioProducto.textContent = precio;
                    imgProducto.src = imagen;
                    linkProducto.href = link;

                    imgProducto.classList = 'w-100 rounded-3 shadow-4 mb-1'

                    document.title = titulo + " - Alfajores La Barraca";

                    if (preciosDesactualizados) {
                        conPrecio.style.display = 'none';
                        sinStock.style.display = 'none';
                        sinPrecio.style.display = 'block';
                        linkProducto.classList = 'btn btn-block btn-primary mb-3 w-100'
                    } else {
                        if (precio == "") {
                            conPrecio.style.display = 'none';
                            sinStock.style.display = 'none';
                            sinPrecio.style.display = 'block';
                            linkProducto.classList = 'btn btn-block btn-primary mb-3 w-100'
                        } else if (precio == "SIN") {
                            sinStock.style.display = 'block';
                            conPrecio.style.display = 'none';
                            sinPrecio.style.display = 'none';
                            linkProducto.classList = 'btn btn-block disabled mb-3 w-100'
                        } else {
                            conPrecio.style.display = 'block';
                            sinStock.style.display = 'none';
                            sinPrecio.style.display = 'none';
                            linkProducto.classList = 'btn btn-block btn-primary mb-3 w-100'
                        }   
                    }
                    
                    const categoria = categoriaArray.find(sabor => sabor != 'todos').toString();
                    var numeroRelacionados = productosRelacionados(categoria, titulo);
                    if (numeroRelacionados == 0) {
                        productosRelacionados('chocolates', titulo)
                        tituloRelacionados.textContent = 'Productos recomendados';
                    }
                    relacionadosBeforeLoad.remove();
                    
                } else {
                    // history.replaceState(null, '', window.location.pathname);
                    // window.location.href = 'https://alfajoreslabarraca.com.ar/notfound?q=' + parametroValor;
                }
            } else {
                // history.replaceState(null, '', window.location.pathname);
                // window.location.href = 'https://alfajoreslabarraca.com.ar/notfound?q=' + parametroValor;
            }
        } else {
            window.location.href = 'https://alfajoreslabarraca.com.ar/'
        }
    }
  }
}