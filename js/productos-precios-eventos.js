var paginaHabilitada = false

var tituloEvento_text = "Fiesta Provincial del Alfajor Artesanal"
var imgEvento_src = "./imagenes/FiestaProvincialAlfajorRawson.png"
var descEvento_text = "¡Este 7 y 8 de septiembre se llevará a cabo la Fiesta provincial del alfajor en Rawson! Vení a probar y conocer una gran variedad de alfajores de la mano de los mejores alfajoreros."
var linkEvento_url = "https://www.instagram.com/fiesta_provincial_del_alfajor/"

document.title = tituloEvento_text + " · Alfajores La Barraca"

const productosPrecios = [
    {
        nombre: "DDL Sin Azúcar",
        nuevo: true, 
        precio: "$1800",
        desc: "Alfajor endulzado con stevia, relleno con dulce de leche sin azúcar y bañado con chocolate amargo.<br>Peso neto 70grs.",
        linkPagina: "https://alfajoreslabarraca.com.ar/#sin-azucar",
        linkCatalogo: "https://wa.me/p/123456789/5491120518253"
    },
    {
        nombre: "Corazón de Frutos Rojos",
        nuevo: true, 
        precio: "$1600",
        desc: "Alfajor con una delicada cantidad de cacao amargo, relleno con dulce de leche y un dulce de frutos rojos artesanal en el centro. Bañado con chocolate semiamargo.<br>Peso neto 70grs.",
        linkPagina: "https://alfajoreslabarraca.com.ar/#corazon-de-frutos-rojos",
        linkCatalogo: "https://wa.me/p/123456789/5491120518253"
    },
    {
        nombre: "Tentación de Maní",
        nuevo: true, 
        precio: "$1600",
        desc: "Alfajor con una delicada cantidad de cacao amargo, relleno con pasta de maní, dulce de leche y chocolate. Bañado con chocolate de leche.<br>Peso neto 70grs.",
        linkPagina: "https://alfajoreslabarraca.com.ar/#tentacion-de-mani",
        linkCatalogo: "https://wa.me/p/123456789/5491120518253"
    },
    {
        nombre: "Chocolate Intenso",
        nuevo: false, 
        precio: "$1400",
        desc: "Alfajor de cacao amargo, relleno con dulce de leche y bañado con chocolate semiamargo.<br>Peso neto 70grs.",
        linkPagina: "https://alfajoreslabarraca.com.ar/#chocolate-intenso",
        linkCatalogo: "https://wa.me/p/2943239592391020/5491120518253"
    },
    {
        nombre: "Chocolate Suave",
        nuevo: false, 
        precio: "$1400",
        desc: "Alfajor con una delicada cantidad de cacao amargo, relleno con dulce de leche y bañado con chocolate semiamargo.<br>Peso neto 70grs.",
        linkPagina: "https://alfajoreslabarraca.com.ar/#chocolate-suave",
        linkCatalogo: "https://wa.me/p/3772179199521813/5491120518253"
    },
    {
        nombre: "Chocolate Blanco",
        nuevo: false, 
        precio: "$1400",
        desc: "Alfajor con una delicada cantidad de cacao amargo, relleno con dulce de leche y bañado con chocolate blanco.<br>Peso neto 70grs.",
        linkPagina: "https://alfajoreslabarraca.com.ar/#chocolate-blanco",
        linkCatalogo: "https://wa.me/p/2648568928598208/5491120518253"
    },
    {
        nombre: "Chocolate con Leche",
        nuevo: false, 
        precio: "$1400",
        desc: "Alfajor con una delicada cantidad de cacao amargo, relleno con dulce de leche y bañado con chocolate de leche.<br>Peso neto 70grs.",
        linkPagina: "https://alfajoreslabarraca.com.ar/#chocolate-con-leche",
        linkCatalogo: "https://wa.me/p/2867341769987819/5491120518253"
    },
    {
        nombre: "Maicena",
        nuevo: false, 
        precio: "$1400",
        desc: "Alfajor de maicena, relleno con dulce de leche y decorado con coco rayado.<br>Peso neto 70grs.",
        linkPagina: "https://alfajoreslabarraca.com.ar/#maicena",
        linkCatalogo: "https://wa.me/p/3188162611217945/5491120518253"
    },
    {
        nombre: "Maicena Bañada Negro",
        nuevo: false, 
        precio: "$1400",
        desc: "Alfajor de maicena, relleno con dulce de leche y bañado con chocolate semiamargo.<br>Peso neto 70grs.",
        linkPagina: "https://alfajoreslabarraca.com.ar/#maicena-banada-negro",
        linkCatalogo: "https://wa.me/p/3522782987738668/5491120518253"
    },
    {
        nombre: "Avena",
        nuevo: false, 
        precio: "$1400",
        desc: "Alfajor de cacao y avena, relleno con dulce de leche y bañado con chocolate semiamargo.<br>Peso neto 70grs.",
        linkPagina: "https://alfajoreslabarraca.com.ar/#avena",
        linkCatalogo: "https://wa.me/p/3174337869283824/5491120518253"
    },
    {
        nombre: "Avena Frutal",
        nuevo: false, 
        precio: "$1400",
        desc: "Alfajor de cacao y avena, relleno con dulce de membrillo.<br>Peso neto 70grs.",
        linkPagina: "https://alfajoreslabarraca.com.ar/#avena",
        linkCatalogo: "https://wa.me/p/3584773164969219/5491120518253"
    },
    {
        nombre: "Frutos Rojos",
        nuevo: false, 
        precio: "$1600",
        desc: "Alfajor con una delicada cantidad de cacao amargo, relleno con un dulce de frutos rojos artesanal (frutilla, arándanos, mora, frambuesa) y bañado con chocolate semiamargo.<br>Peso neto 70grs.",
        linkPagina: "https://alfajoreslabarraca.com.ar/#frutos-rojos",
        linkCatalogo: "https://wa.me/p/5304282312977837/5491120518253"
    },
    {
      nombre: "Manzana",
      nuevo: false, 
      precio: "$1600",
      desc: "Alfajor con una delicada cantidad de cacao amargo, relleno con dulce de manzana artesanal y bañado con chocolate semiamargo.<br>Peso neto 70grs.",
      linkPagina: "https://alfajoreslabarraca.com.ar/#manzana",
      linkCatalogo: "https://wa.me/p/3562345450537997/5491120518253"
    },
    {
        nombre: "Membrillo Negro",
        nuevo: false, 
        precio: "$1400",
        desc: "Alfajor con una delicada cantidad de cacao amargo, relleno con dulce de membrillo y bañado con chocolate blanco.<br>Peso neto 70grs.",
        linkPagina: "https://alfajoreslabarraca.com.ar/#membrillo-negro",
        linkCatalogo: "https://wa.me/p/5071317579609956/5491120518253"
    },
    {
        nombre: "Merengue con Dulce de Leche",
        nuevo: false, 
        precio: "$1400",
        desc: "Alfajor con una delicada cantidad de cacao amargo, relleno con dulce de leche y bañado con merengue italiano.<br>Peso neto 70grs.",
        linkPagina: "https://alfajoreslabarraca.com.ar/#merengue-con-dulce-de-leche",
        linkCatalogo: "https://wa.me/p/4661400207319943/5491120518253"
    },
  ];

  function redirigirPagina() {
    window.location.href = "https://alfajoreslabarraca.com.ar/";
  }

  if (paginaHabilitada) {
    const container = document.getElementById('productos-evento-container');
    const imgEvento = document.getElementById('evento-alfajorero-img');
    const tituloEvento = document.getElementById('evento-alfajorero-titulo');
    const descEvento = document.getElementById('evento-alfajorero-desc');
    const linkEvento = document.getElementById('evento-alfajorero-link');

    productosPrecios.forEach(producto => {
      if (producto.nuevo == false) {
          var badge_new = "d-none"
      }
      const productoHTML = `
        <div class="mb-4">
          <div class="card">
          <span class="badge w-100 ${badge_new}" style="background-color: darkgreen; border-top-left-radius: 0.527rem !important; border-top-right-radius: 0.527rem !important; border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;">Nuevo</span>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <div class="ms-3">
                    <p class="fw-bold mb-1">${producto.nombre}</p>
                    <p class="mb-0 small">${producto.desc}</p>
                  </div>
                </div>
                <span class="badge rounded-pill badge-success" style="background-color: var(--clr-general)">${producto.precio}</span>
              </div>
            </div>
            <div class="card-footer border-0 bg-body-tertiary p-2 d-flex justify-content-around">
              <a class="btn btn-link m-0 text-reset" style="color: var(--clr-general) !important" href="${producto.linkPagina}" role="button" data-ripple-color="primary">Ver en página web</a>
              <a class="btn btn-link m-0 text-reset" style="color: var(--clr-general) !important" href="${producto.linkCatalogo}" role="button" data-ripple-color="primary">Ver en catálogo</a>
            </div>
          </div>
        </div>`;
        
      container.innerHTML += productoHTML;

      tituloEvento.textContent = tituloEvento_text;
      imgEvento.src = imgEvento_src;
      descEvento.textContent = descEvento_text;
      linkEvento.href = linkEvento_url;
    });
  } else {
    redirigirPagina()
  }