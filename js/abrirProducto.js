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
const divBotones = document.getElementById('btnFlexProducto')

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

    window.removeEventListener('popstate', closeVentanaEmergente);
    window.removeEventListener('hashchange', closeVentanaEmergente);
}

function mostrarProducto() {
    const productosList = [
        {nombre: "chocolate-intenso", id: 0},
        {nombre: "chocolate-suave", id: 1},
        {nombre: "chocolate-blanco", id: 2},
        {nombre: "chocolate-con-leche", id: 3},
        {nombre: "maicena", id: 4},
        {nombre: "maicena-banada-blanco", id: 5},
        {nombre: "maicena-banada-negro", id: 6},
        {nombre: "avena", id: 7},
        {nombre: "avena-nevada", id: 8},
        {nombre: "avena-frutal", id: 9},
        {nombre: "frutos-rojos", id: 10},
        {nombre: "membrillo-negro", id: 11},
        {nombre: "membrillo-blanco", id: 12},
        {nombre: "merengue-con-dulce-de-leche", id: 13},
        {nombre: "merengue-con-membrillo", id: 14},
        {nombre: "integral", id: 15},
        {nombre: "mini-alfajores", id: 34},
        {nombre: "caja-por-6-alfajores", id: 35},
        {nombre: "caja-por-12-alfajores", id: 36},
    ]
    var hashUrl = window.location.hash.substring(1);
    const productosListFind = productosList.find(sabor => sabor.nombre === hashUrl);

    if (productosListFind) {
        var numSaborHashUrl = productosListFind.id
        const elementosTarjeta = document.getElementsByClassName('tarjeta');
        const titulo = elementosTarjeta[numSaborHashUrl].querySelector('.titulo').textContent;
        const descripcion = elementosTarjeta[numSaborHashUrl].querySelector('.descripcion').innerHTML;
        const precio = elementosTarjeta[numSaborHashUrl].querySelector('.precio').textContent;
        const imagen = elementosTarjeta[numSaborHashUrl].querySelector('.img').src;
        const link = elementosTarjeta[numSaborHashUrl].querySelector('.linkCatalogo').href;

        tituloProducto.textContent = titulo;
        descProducto.innerHTML = descripcion;
        precioProducto.textContent = precio;
        imgProducto.src = imagen;
        linkProducto.href = link;

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
        console.log("No se encontro #")
        if (window.innerWidth <= 768) {
            pagPrincipal.style.display = 'block';
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
        history.pushState(null, null, '#' + titulo.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n'));

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

    window.removeEventListener('popstate', closeVentanaEmergente);
    window.removeEventListener('hashchange', closeVentanaEmergente);
}