const body = document.body;
const ventanaEmergente = document.getElementById('ventana');
const intVentanaEmergente = document.getElementById('interfazVentanaEmergente')
const pagPrincipal = document.getElementById('pagPrincipal')
const tituloProducto = document.getElementById('tituloProducto');
const descProducto = document.getElementById('descProducto');
const precioProducto = document.getElementById('precio');
const sinPrecio = document.getElementById('sinPrecio');
const conPrecio = document.getElementById('conPrecio');
const sinStock = document.getElementById('sinStock');
const imgProducto = document.getElementById('imgProducto');
const linkProducto = document.getElementById('linkProducto');
const divBotones = document.getElementById('btnFlexProducto');
const preciosElementDisplay = document.getElementById('precios').style.display;

document.addEventListener('DOMContentLoaded', function() {
    mostrarProducto();
});

window.addEventListener('hashchange', mostrarProducto);

document.getElementById('cerrar-ventana').addEventListener('click', function() {
    if (window.innerWidth >= 768) {
        ventanaEmergente.style.display = 'none';
        body.style.overflow = 'auto';
    } else {
        ventanaEmergente.style.display = 'none';
        pagPrincipal.style.display = 'block';
    }
  

  document.title = "Alfajores La Barraca";
  imgProducto.src = "";

  history.pushState({ ventanaEmergenteOpen: false }, '');
  history.pushState(null, null, window.location.pathname);
  window.removeEventListener('popstate', closeVentanaEmergente);
  window.removeEventListener('hashchange', closeVentanaEmergente);
});

function closeVentanaEmergente() {
    if (window.innerWidth >= 768) {
        ventanaEmergente.style.display = 'none';
        body.style.overflow = 'auto';
    } else {
        ventanaEmergente.style.display = 'none';
        pagPrincipal.style.display = 'block';
    }

    document.title = "Alfajores La Barraca";
    imgProducto.src = "";

    window.removeEventListener('popstate', closeVentanaEmergente);
    window.removeEventListener('hashchange', closeVentanaEmergente);
}

function mostrarProducto() {
    var hashUrl = window.location.hash.substring(1);
    var imgID = document.querySelector('img[src="./imagenes/sabores/' + hashUrl + '.png"]');

    console.log(hashUrl)
    console.log(imgID)

    if (imgID) {
        imgID = imgID.id
        const productosListFind = alfajores.find(sabor => sabor.nombre === imgID);
        const titulo = productosListFind.nombre
        const descripcion = productosListFind.desc;
        const precio = productosListFind.precioPagina;
        const imagen = './imagenes/sabores/' + hashUrl + '.png';
        const link = productosListFind.linkCatalogo;

        tituloProducto.textContent = titulo;
        descProducto.innerHTML = descripcion;
        precioProducto.textContent = precio;
        imgProducto.src = imagen;
        linkProducto.href = link;

        if (preciosElementDisplay == "none") {
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
        } else {
            conPrecio.style.display = 'none';
            sinStock.style.display = 'none';
            sinPrecio.style.display = 'block';
            linkProducto.classList = 'btn btn-block btn-primary mb-3 w-100'
        }

        if (window.innerWidth >= 768) {
            ventanaEmergente.style.display = 'block';
            ventanaEmergente.classList = 'modal fade show';
            intVentanaEmergente.classList.add('slide-down');
            divBotones.classList = 'd-flex'
            body.style.overflow = 'hidden';
            linkProducto.style.marginRight = '10px';
        } else {
            ventanaEmergente.style.display = 'block';
            ventanaEmergente.classList = 'fade show';
            divBotones.classList = '';
            pagPrincipal.style.display = 'none';
            linkProducto.style.marginRight = '0px';
            window.scrollTo({
                top: 0,
              });
        }
        

        history.pushState({ ventanaEmergenteOpen: true }, '');

        document.title = titulo + " - Alfajores La Barraca";

        window.addEventListener('popstate', closeVentanaEmergente);
        window.addEventListener('hashchange', closeVentanaEmergente);
    } else {
        if (hashUrl) {
            history.replaceState(null, '', window.location.pathname);
            window.location.href = 'https://alfajoreslabarraca.com.ar/notfound?=#' + hashUrl;
        }
    }
}
    

const elementosTarjeta = document.getElementsByClassName('tarjeta');
for (let i = 0; i < elementosTarjeta.length; i++) {
    elementosTarjeta[i].addEventListener('click', function() {
        const titulo = elementosTarjeta[i].querySelector('.titulo').textContent;
        const descripcion = elementosTarjeta[i].querySelector('.descripcion').innerHTML;
        const precio = elementosTarjeta[i].querySelector('.precio').textContent;
        const imagen = elementosTarjeta[i].querySelector('.img').src;
        const link = elementosTarjeta[i].querySelector('.linkCatalogo').href;

        tituloProducto.textContent = titulo;
        descProducto.innerHTML = descripcion;
        precioProducto.textContent = precio;
        imgProducto.src = imagen;
        linkProducto.href = link;

        if (preciosElementDisplay == "none") {
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
        } else {
            conPrecio.style.display = 'none';
            sinStock.style.display = 'none';
            sinPrecio.style.display = 'block';
            linkProducto.classList = 'btn btn-block btn-primary mb-3 w-100'
        }

        if (window.innerWidth >= 768) {
            ventanaEmergente.style.display = 'block';
            ventanaEmergente.classList = 'modal fade show';
            intVentanaEmergente.classList.add('slide-down');
            divBotones.classList = 'd-flex'
            body.style.overflow = 'hidden';
            linkProducto.style.marginRight = '10px';
        } else {
            ventanaEmergente.style.display = 'block';
            ventanaEmergente.classList = 'fade show';
            divBotones.classList = '';
            pagPrincipal.style.display = 'none';
            linkProducto.style.marginRight = '0px';
            window.scrollTo({
                top: 0,
              });
        }

        history.pushState({ ventanaEmergenteOpen: true }, '');
        history.pushState(null, null, '#' + titulo.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u'));

        document.title = titulo + " - Alfajores La Barraca";

        window.addEventListener('popstate', closeVentanaEmergente);
        window.addEventListener('hashchange', closeVentanaEmergente);
    });
}

document.getElementById('cerrar-ventana').addEventListener('click', function() {
    if (window.innerWidth >= 768) {
        ventanaEmergente.style.display = 'none';
        body.style.overflow = 'auto';
    } else {
        ventanaEmergente.style.display = 'none';
        pagPrincipal.style.display = 'block';
    }

    document.title = "Alfajores La Barraca";
    imgProducto.src = "";

    history.pushState({ ventanaEmergenteOpen: false }, '');
    history.pushState(null, null, window.location.pathname);
    window.removeEventListener('popstate', closeVentanaEmergente);
    window.removeEventListener('hashchange', closeVentanaEmergente);
});

function closeVentanaEmergente() {
    if (window.innerWidth >= 768) {
        ventanaEmergente.style.display = 'none';
        body.style.overflow = 'auto';
    } else {
        ventanaEmergente.style.display = 'none';
        pagPrincipal.style.display = 'block';
    }

    document.title = "Alfajores La Barraca";
    imgProducto.src = "";

    window.removeEventListener('popstate', closeVentanaEmergente);
    window.removeEventListener('hashchange', closeVentanaEmergente);
}