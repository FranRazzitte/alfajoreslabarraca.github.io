// "SIN" == Sin Stock | "" == Consultar precio

const productosPrecios = [
    {nombre: "Chocolate Intenso", precio: "$1000"},
    {nombre: "Chocolate Suave", precio: "$1000"},
    {nombre: "Chocolate Blanco", precio: "$1000"},
    {nombre: "Chocolate con Leche", precio: "$1000"},
    {nombre: "Maicena", precio: "$1000"},
    {nombre: "Maicena Bañada Blanco", precio: "$1000"},
    {nombre: "Maicena Bañada Negro", precio: "$1000"},
    {nombre: "Avena", precio: "$1000"},
    {nombre: "Avena Nevada", precio: "$1000"},
    {nombre: "Avena Frutal", precio: "$1000"},
    {nombre: "Frutos Rojos", precio: "$1200"},
    {nombre: "Membrillo Negro", precio: "$1000"},
    {nombre: "Membrillo Blanco", precio: "$1000"},
    {nombre: "Merengue con Dulce de Leche", precio: "$1000"},
    {nombre: "Merengue con Membrillo", precio: "$1000"},
    {nombre: "Integral", precio: "SIN"},
    {nombre: "Mini Alfajores", precio: ""},
    {nombre: "Caja por 6 alfajores", precio: "$6000"},
    {nombre: "Caja por 12 alfajores", precio: "$11500"},
]

const preciosTarjeta = document.getElementsByClassName('tarjeta');

for (let j = 0; j < preciosTarjeta.length; j++) {
    const tituloTarjeta = preciosTarjeta[j].querySelector('.titulo').textContent;
    const productosPreciosFind = productosPrecios.find(sabor => sabor.nombre === tituloTarjeta);
    const valorTarjeta = preciosTarjeta[j].querySelector('.precio');
    valorTarjeta.textContent = productosPreciosFind.precio
}