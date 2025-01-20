const contenedor_example = document.getElementById('categoriaBeforeLoad');
const contenedor_todos = document.getElementById('sabores-container');
const contenedor_chocolates = document.getElementById('chocolates-container');
const contenedor_maicena = document.getElementById('maicena-container');
const contenedor_avena = document.getElementById('avena-container');
const contenedor_frutales = document.getElementById('frutales-container');
const contenedor_saludables = document.getElementById('saludables-container');
const contenedor_merengue = document.getElementById('merengue-container');
const contenedor_integrales = document.getElementById('integrales-container');
const contenedor_cajas = document.getElementById('cajas-container');

contenedor_example.remove();

alfajores.forEach(sabor => {
  descDisplay = sabor.desc.replace(/<br>/g, ' ').slice(Number= 0, Number= 120) + "...";
  var imgSabor = sabor.nombre.toLowerCase().replace(/\s+/g, '-').replace(/ñ/g, 'n').replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u')
  if (sabor.visible) {
    const productoHTML = `
      <div class="card mb-3 card-style tarjeta">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="./imagenes/sabores/${imgSabor}.png" alt="${sabor.nombre}" id="${sabor.nombre}" class="img-fluid rounded-start img">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title titulo">${sabor.nombre}</h5>
              <p class="descripcion d-none">${sabor.desc}</p>
              <p class="card-text descDisplay">${descDisplay}</p>
              <p class="precio">${sabor.precioPagina}</p>
              <a href="${sabor.linkCatalogo}" class="linkCatalogo"></a>
              <p class="card-text">
                <small class="text-muted text-decoration-underline">Presiona para leer más</small>
              </p>
            </div>
          </div>
        </div>
      </div>`

    if (sabor.categoria.includes('todos')) {
      contenedor_todos.innerHTML += productoHTML;
    };
    if (sabor.categoria.includes('chocolates')) {
      contenedor_chocolates.innerHTML += productoHTML;
    };
    if (sabor.categoria.includes('maicena')) {
      contenedor_maicena.innerHTML += productoHTML;
    };
    if (sabor.categoria.includes('avena')) {
      contenedor_avena.innerHTML += productoHTML;
    };
    if (sabor.categoria.includes('frutales')) {
      contenedor_frutales.innerHTML += productoHTML;
    };
    if (sabor.categoria.includes('saludables')) {
      contenedor_saludables.innerHTML += productoHTML;
    };
    if (sabor.categoria.includes('merengue')) {
      contenedor_merengue.innerHTML += productoHTML;
    };
    if (sabor.categoria.includes('integrales')) {
      contenedor_integrales.innerHTML += productoHTML;
    };
    if (sabor.categoria.includes('cajas')) {
      contenedor_cajas.innerHTML += productoHTML;
    };
  }
})

const preciosElement = document.getElementById('precios');

if (preciosDesactualizados) {
  preciosElement.style.display = 'block';
} else {
  preciosElement.style.display = 'none';
}