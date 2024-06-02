// "SIN" == Sin Stock | "" == Consultar precio

const preciosDesactualizados = true;

const productosPrecios = [
    {nombre: "Chocolate Intenso", precio: "$1200", desc: "Exquisito alfajor de chocolate negro donde predomina el cacao amargo en la galletita, haciéndolo especial por su intenso sabor a chocolate. Relleno con dulce de leche.<br>Peso neto 70grs."},
    {nombre: "Chocolate Suave", precio: "$1200", desc: "Alfajor negro bañado con chocolate semiamargo, relleno con mucho dulce de leche. La característica principal de este alfajor esta en la galletita donde tiene una delicada cantidad de cacao amargo.<br>Peso neto 70grs."},
    {nombre: "Chocolate Blanco", precio: "$1200", desc: "Riquísimo alfajor, con un excelente baño de chocolate blanco con dos galletita con un especial sabor a vainilla relleno con dulce de leche.<br>Peso neto 70grs."},
    {nombre: "Chocolate con Leche", precio: "$1200", desc: "El chocolate con leche al tener menos cacao en su composición, se diferencia por ser más dulce que el chocolate negro. Su relleno de dulce de leche le da un sabor especial a éste riquísimo alfajor.<br>Peso neto 70grs."},
    {nombre: "Maicena", precio: "$1200", desc: "Clásico alfajor de Maicena. Relleno con mucho dulce de leche y decorado con coco rayado.<br>Peso neto 70grs."},
    {nombre: "Maicena Bañada Blanco", precio: "$1200", desc: "Éste alfajor es la combinación perfecta del clásico alfajor de maicena con el agregado especial de un baño de chocolate blanco. Relleno con dulce de leche.<br>Peso neto 70grs."},
    {nombre: "Maicena Bañada Negro", precio: "$1200", desc: "Éste alfajor es la combinación perfecta del clásico alfajor de maicena con el agregado especial de un baño de chocolate semiamargo. Relleno con dulce de leche.<br>Peso neto 70grs."},
    {nombre: "Avena", precio: "$1200", desc: "Deliciosooooooo!!!!! Cuando pruebes éste alfajor será un antes y un después!!! Seguramente lo vas a recomendar. Bañado con chocolate semiamargo y relleno con mucho dulce de leche. La avena en su interior lo hace, más saludable y le aporta un crocantito que lo hace especial!!!!<br>Peso neto 70grs."},
    {nombre: "Avena Nevada", precio: "$1200", desc: "Alfajor de avena, en éste caso el baño de chocolate no está presente. Dos galletita de avena con cacao, relleno con dulce de leche y coco rayado decorando en su exterior.<br>Peso neto 70grs."},
    {nombre: "Avena Frutal", precio: "$1200", desc: "Para los que quieren disfrutar de un alfajor distinto, te presentamos una alternativa sin cobertura de chocolate. Dos galletita de avena con cacao y relleno con dulce de membrillo.<br>Peso neto 70grs."},
    {nombre: "Frutos Rojos", precio: "$1500", desc: "Alfajor de Frutos Rojos (frutilla, arándanos, mora, frambuesa), es una mezcla de gustos y sensaciones increíbles!!!! El baño de chocolate semiamargo, las suaves galletitas sabor a vainilla con un toque de cacao les da a éste alfajor una combinación perfecta.<br>Peso neto 70grs."},
    {nombre: "Membrillo Negro", precio: "$1200", desc: "Excelente alfajor de fruta. Para los más exigente, éste alfajor se destaca por su gran cantidad de dulce de membrillo, bañado con chocolate semiamargo.<br>Peso neto 70grs."},
    {nombre: "Membrillo Blanco", precio: "$1200", desc: "Excelente alfajor de fruta. Otra alternativa de éste alfajor de membrillo, es que la diferencia en este caso es con chocolate blanco. Su increíble sabor deja una sensación suave en el paladar.<br>Peso neto 70grs."},
    {nombre: "Merengue con Dulce de Leche", precio: "$1200", desc: "2 Galletitas de vainilla rellenas con dulce de leche y con una exquisita cobertura de merengue italiano.<br>Peso 70grs."},
    {nombre: "Merengue con Membrillo", precio: "$1200", desc: "2 galletitas de vainilla rellenas con dulce de membrillo y con una exquisita cobertura de merengue italiano.<br>Peso 70grs."},
    {nombre: "Integral", precio: "SIN", desc: "100% Integral!!!! Dos galletitas con harina integral y cacao amargo, relleno con dulce de leche bañado con chocolate semiamargo.<br>Peso neto 70grs."},
    {nombre: "Mini Alfajores", precio: "", desc: "Tenes una fiesta, cumple, comunión o un evento especial donde queres agasajar a tus invitados??? Nosotros tenemos una buena opción para tú mesa dulce!!!!! Te presentamos nuestros exquisitos mini alfajores: Maicena, Chocolate Suave y Chocolate Blanco. Podes elegir la combinación que más te guste!!!<br><br>Presentación en caja de 12 unidades."},
    {nombre: "Caja por 6 alfajores", precio: "$7000", desc: "Podes elegir los siguientes sabores:<br>Chocolate Intenso, Suave, Blanco, Leche.<br>Avena, Avena Nevada, Avena Frutal.<br>Maicena, Maicena Bañada Negro o Blanco.<br>Dulce de Leche Merengue.<br>Membrillo Merengue.<br>Membrillo Negro o Blanco.<br>Integral."},
    {nombre: "Caja por 12 alfajores", precio: "$14000", desc: "Podes elegir los siguientes sabores:<br>Chocolate Intenso, Suave, Blanco, Leche.<br>Avena, Avena Nevada, Avena Frutal.<br>Maicena, Maicena Bañada Negro o Blanco.<br>Dulce de Leche Merengue.<br>Membrillo Merengue.<br>Membrillo Negro o Blanco.<br>Integral.<br><br>*Opcional: Frutos Rojos $100 adicional por unidad."},
]

const preciosTarjeta = document.getElementsByClassName('tarjeta');

for (let j = 0; j < preciosTarjeta.length; j++) {
    const tituloTarjeta = preciosTarjeta[j].querySelector('.titulo').textContent;
    const productosPreciosFind = productosPrecios.find(sabor => sabor.nombre === tituloTarjeta);
    const valorTarjeta = preciosTarjeta[j].querySelector('.precio');
    const descTarjeta = preciosTarjeta[j].querySelector('.descripcion');
    const descDisplayTarjeta = preciosTarjeta[j].querySelector('.descDisplay');
    valorTarjeta.textContent = productosPreciosFind.precio
    descTarjeta.innerHTML = productosPreciosFind.desc
    descDisplayTarjeta.textContent = (productosPreciosFind.desc.replace(/<br>/g, ' ')).slice(Number= 0, Number= 120) + "..."
}


const preciosElement = document.getElementById('precios');

if (preciosDesactualizados) {
  preciosElement.style.display = 'block';
} else {
  preciosElement.style.display = 'none';
}