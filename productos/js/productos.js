// Relacionados y Recomendados

function productosRelacionados (categoria, titulo) {
    const relacionados = document.getElementById('relacionados');
    var saboresRelacionados = 0
    alfajores.forEach(sabor => {
        let descNum;
        if (window.innerWidth <= 600) { descNum = 60; } else { descNum = 80; }
        descDisplay = sabor.desc.replace(/<br>/g, ' ').slice(numero= 0, numero= descNum) + "...";
        var imgSabor = sabor.id.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u');
        var urlSabor = sabor.id.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u').replace(/&/g, 'and');
        if (sabor.visible && sabor.category.includes(categoria) && sabor.name != titulo) {
            const productoHTML = `
                <div class="card m-0 p-0 card-style" style="border: none; margin-right: 2%" id="producto_${urlSabor}">
                    <a href="/productos/?p=${urlSabor}" title="${sabor.name}">
                    <div class="flex-movil">
                        <div class="p-1 placeholder-glow img-movil">
                        <img src="https://bd.alfajoreslabarraca.com.ar/img/products/${imgSabor}/1.png" decoding="async" alt="${sabor.name}" id="${sabor.name}" class="w-100 rounded" onerror="this.onerror=null; this.src='/productos/img/404NotFound.svg'; this.className='w-100 rounded placeholder'">
                        </div>
                        <div>
                        <div class="card-body">
                            <h5 class="card-title titulo">${sabor.name}</h5>
                            <p class="card-text descDisplay">${descDisplay}</p>
                            <p class="card-text catDisplay d-none">
                            <small class="text-uppercase rounded p-1" style="background-color: var(--btn-${sabor.category[0]}); color: var(--btn-general-color) !important;">${sabor.category[0]}</small>
                            </p>
                        </div>
                        </div>
                    </div>
                    </a>
                </div>`
            relacionados.innerHTML += productoHTML;
            saboresRelacionados += 1;
        }
    })
    return saboresRelacionados
}

// Cargar producto

let imgActive;
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
    try {
        if (window.location.hash == '') {
            const parametro = new URLSearchParams(window.location.search);
            if (parametro.size != 0) {
                const parametroValor = parametro.get('p').replace('and', '&');
                const relacionadosBeforeLoad = document.getElementById('relacionadosBeforeLoad');
                const tituloRelacionados = document.getElementById('tituloRelacionados');
                if (parametroValor) {
                    const productosListFind = alfajores.find(sabor => reemplazar(sabor.id) === parametroValor);
                    if (productosListFind) {
                        if (productosListFind.visible) {
                            const titulo = productosListFind.name
                            const descripcion = productosListFind.desc;
                            const precio = productosListFind.price;
                            const imagen = 'https://bd.alfajoreslabarraca.com.ar/img/products/' + parametroValor + '/1.png';
                            const link = productosListFind.link;
                            const categoriaArray = productosListFind.category;

                            imgActive = imagen;

                            tituloProducto.textContent = titulo;
                            descProducto.innerHTML = descripcion;
                            precioProducto.textContent = precio;
                            imgProducto.src = imagen;
                            linkProducto.href = link;

                            imgProducto.onload = function() {
                                if (!imgProducto.src.toString().includes('404NotFound.svg')) {
                                    imgProducto.classList.remove('placeholder');
                                    cargarImgLente();
                                } else {
                                    document.getElementById("lente").className = 'd-none';
                                    document.getElementById("zoom-section").className = 'd-none';
                                    document.getElementById("productSection").classList.add('d-flex');
                                }
                            };

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
                                    conPrecio.classList = 'mb-4';
                                    sinStock.style.display = 'none';
                                    sinPrecio.style.display = 'none';
                                    linkProducto.classList = 'btn btn-block btn-primary mb-3 w-100'
                                }   
                            }

                            const collage_item = document.getElementById('collage-item');
                            let i = 1;

                            function cargarImagen() {
                                const img = new Image();
                                img.src = `https://bd.alfajoreslabarraca.com.ar/img/products/${parametroValor}/${i}.png`;
                                img.addEventListener('click', () => {
                                    if (imgActive != img.src) {
                                        imgProducto.classList.add('placeholder');
                                        imgProducto.src = img.src;
                                        imgActive = img.src;
                                    }
                                });
                                img.onload = function() {
                                    const figure = document.createElement('figure');
                                    figure.className = 'item';
                                    figure.appendChild(img);
                                    collage_item.appendChild(figure);
                                    if (i >= 2) { collage_item.classList.remove('d-none'); }
                                    i++;
                                    cargarImagen();
                                };
                                img.onerror = function() { console.info('Loading image collage stopped at index ' + i, img.src); }  
                            }

                            cargarImagen();

                            if (cookiesHabilitadas('localStorage')) {
                                let UserHistory = [];
                                if (localStorage.getItem('UserHistory')) {
                                    UserHistory = JSON.parse(localStorage.getItem('UserHistory'));
                                }
                                if (!UserHistory.some(i => i === titulo)) { UserHistory.unshift(titulo); }
                                localStorage.setItem('UserHistory', JSON.stringify(UserHistory));
                            }

                            const categoria_producto = categoriaArray.find(sabor => sabor != 'todos').toString();
                            var numeroRelacionados = productosRelacionados(categoria_producto, titulo);
                            if (numeroRelacionados == 0) {
                                productosRelacionados('chocolates', titulo);
                                tituloRelacionados.textContent = 'Productos recomendados';
                                tituloRelacionados.setAttribute('lang', 'lb-text-products-section:recommended-products');
                            }
                            relacionadosBeforeLoad.remove();
                            
                        } else {
                            console.error('Error 404 - Not Found.', parametroValor);
                            history.replaceState(null, '', window.location.pathname);
                            window.location.href = 'https://alfajoreslabarraca.com.ar/notfound?q=' + parametroValor;
                        }
                    } else {
                        console.error('Error 404 - Not Found.', parametroValor);
                        history.replaceState(null, '', window.location.pathname);
                        window.location.href = 'https://alfajoreslabarraca.com.ar/notfound?q=' + parametroValor;
                    }
                } else {
                    console.error('Error 400 - Bad Request.', parametroValor);
                    window.location.href = 'https://alfajoreslabarraca.com.ar/';
                }
            } else {
                console.error('Error 400 - Bad Request.');
                window.location.href = 'https://alfajoreslabarraca.com.ar/';
            }
        } else {
            console.error('Error 400 - Bad Request.');
            window.location.href = 'https://alfajoreslabarraca.com.ar/';
        }    
    } catch (error) {
        const parametro = new URLSearchParams(window.location.search);
        const parametroValor = parametro.get('p').replace('and', '&');
        console.error('500 - Internal Server Error.', error);
        window.location.href = 'https://alfajoreslabarraca.com.ar/notfound?ise=true?q=' + parametroValor;
    }
    
}

// LUPA

const container = document.getElementById("img-container");
const lente = document.getElementById("lente");
const zoomResult = document.getElementById("zoom-result");
const productSection = document.getElementById("productSection");
const zoomSection = document.getElementById("zoom-section");

const zoomFactor = 4;

function cargarImgLente() {
    zoomResult.style.backgroundImage = `url(${imgActive})`;
    zoomResult.style.backgroundSize = `${imgProducto.width * zoomFactor}px ${imgProducto.height * zoomFactor}px`;
}

container.addEventListener("mouseenter", () => {
    if (window.innerWidth >= 600) {
        lente.style.display = "block";
        zoomSection.style.display = "block";
        productSection.style.display = "none";
        zoomResult.style.height = imgProducto.offsetWidth + "px";
        lente.style.width = zoomResult.offsetWidth / zoomFactor + "px";
        lente.style.height = zoomResult.offsetHeight / zoomFactor + "px";
    }
});

container.addEventListener("mouseleave", () => {
    lente.style.display = "none";
    zoomSection.style.display = "none";
    productSection.style.display = "flex";
});

container.addEventListener("mousemove", (e) => {
    const rect = imgProducto.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    let lensW = lente.offsetWidth / 2;
    let lensH = lente.offsetHeight / 2;
    if (x < lensW) x = lensW;
    if (x > imgProducto.width - lensW) x = imgProducto.width - lensW;
    if (y < lensH) y = lensH;
    if (y > imgProducto.height - lensH) y = imgProducto.height - lensH;

    lente.style.left = (x - lensW) + "px";
    lente.style.top = (y - lensH) + "px";

    zoomResult.style.backgroundPosition = `-${(x * zoomFactor - zoomResult.offsetWidth / 2)}px -${(y * zoomFactor - zoomResult.offsetHeight / 2)}px`;
});