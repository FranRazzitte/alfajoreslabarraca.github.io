// "SIN" == Sin Stock | "" == Consultar precio

const preciosDesactualizados = true

const alfajores = [
  {
    "nombre": "Chocolate Intenso",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Exquisito alfajor de chocolate negro donde predomina el cacao amargo en la galletita, haciéndolo especial por su intenso sabor a chocolate. Relleno con dulce de leche.<br>Peso neto 70grs.",
    "descResumen": "Alfajor de cacao amargo, relleno con dulce de leche y bañado con chocolate semiamargo.<br>Peso neto 70grs.",
    "categoria": ['todos', 'chocolates'],
    "nuevo": false,
    "visible": true,
    "linkCatalogo": "https://wa.me/p/2943239592391020/5491120518253"
  },
  {
    "nombre": "Chocolate Suave",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Alfajor negro bañado con chocolate semiamargo, relleno con mucho dulce de leche. La característica principal de este alfajor está en la galletita donde tiene una delicada cantidad de cacao amargo.<br>Peso neto 70grs.",
    "descResumen": "Alfajor con una delicada cantidad de cacao amargo, relleno con dulce de leche y bañado con chocolate semiamargo.<br>Peso neto 70grs.",
    "categoria": ['todos', 'chocolates'],
    "nuevo": false,
    "visible": true,
    "linkCatalogo": "https://wa.me/p/3772179199521813/5491120518253"
  },
  {
    "nombre": "Chocolate Blanco",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Riquísimo alfajor, con un excelente baño de chocolate blanco con dos galletitas con un especial sabor a vainilla, relleno con dulce de leche.<br>Peso neto 70grs.",
    "descResumen": "Alfajor con una delicada cantidad de cacao amargo, relleno con dulce de leche y bañado con chocolate blanco.<br>Peso neto 70grs.",
    "categoria": ['todos', 'chocolates'],
    "nuevo": false,
    "visible": true,
    "linkCatalogo": "https://wa.me/p/2648568928598208/5491120518253"
  },
  {
    "nombre": "Chocolate con Leche",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "El chocolate con leche al tener menos cacao en su composición, se diferencia por ser más dulce que el chocolate negro. Su relleno de dulce de leche le da un sabor especial a éste riquísimo alfajor.<br>Peso neto 70grs.",
    "descResumen": "Alfajor con una delicada cantidad de cacao amargo, relleno con dulce de leche y bañado con chocolate de leche.<br>Peso neto 70grs.",
    "categoria": ['todos', 'chocolates'],
    "nuevo": false,
    "visible": false,
    "linkCatalogo": "https://wa.me/p/2867341769987819/5491120518253"
  },
  {
    "nombre": "Tentación de Maní",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Exquisito alfajor bañado con chocolate de leche. El relleno de pasta de maní, dulce de leche y chocolate le da un sabor que lo hace especial y diferente al resto.<br>Peso neto 70grs.",
    "descResumen": "Alfajor con una delicada cantidad de cacao amargo, relleno con pasta de maní, dulce de leche y chocolate. Bañado con chocolate de leche.<br>Peso neto 70grs.",
    "categoria": ['todos', 'chocolates'],
    "nuevo": true,
    "visible": true,
    "linkCatalogo": "https://wa.me/p/27732963276290779/5491120518253"
  },
  {
    "nombre": "Maicena",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Clásico alfajor de Maicena. Relleno con mucho dulce de leche y decorado con coco rayado.<br>Peso neto 70grs.",
    "descResumen": "Alfajor de maicena, relleno con dulce de leche y decorado con coco rayado.<br>Peso neto 70grs.",
    "categoria": ['todos', 'maicena'],
    "nuevo": false,
    "visible": true,
    "linkCatalogo": "https://wa.me/p/3188162611217945/5491120518253"
  },
  {
    "nombre": "Maicena Bañada Negro",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Éste alfajor es la combinación perfecta del clásico alfajor de maicena con el agregado especial de un baño de chocolate semiamargo. Relleno con dulce de leche.<br>Peso neto 70grs.",
    "descResumen": "Alfajor de maicena, relleno con dulce de leche y bañado con chocolate semiamargo.<br>Peso neto 70grs.",
    "categoria": ['todos', 'maicena'],
    "nuevo": false,
    "visible": true,
    "linkCatalogo": "https://wa.me/p/3522782987738668/5491120518253"
  },
  {
    "nombre": "Maicena Bañada Blanco",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Éste alfajor es la combinación perfecta del clásico alfajor de maicena con el agregado especial de un baño de chocolate blanco. Relleno con dulce de leche.<br>Peso neto 70grs.",
    "descResumen": "",
    "categoria": ['todos', 'maicena'],
    "nuevo": false,
    "visible": false,
    "linkCatalogo": "https://wa.me/p/4946660275375824/5491120518253"
  },
  {
    "nombre": "Avena",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Delicioso alfajor bañado con chocolate semiamargo y relleno con mucho dulce de leche. La avena en su interior lo hace, más saludable y le aporta un crocantito que lo hace especial!<br>Peso neto 70grs.",
    "descResumen": "Alfajor de cacao y avena, relleno con dulce de leche y bañado con chocolate semiamargo.<br>Peso neto 70grs.",
    "categoria": ['todos', 'avena'],
    "nuevo": false,
    "visible": true,
    "linkCatalogo": "https://wa.me/p/3174337869283824/5491120518253"
  },
  {
    "nombre": "Avena Nevada",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Alfajor de avena, en éste caso el baño de chocolate no está presente. Dos galletita de avena con cacao, relleno con dulce de leche y coco rayado decorando en su exterior.<br>Peso neto 70grs.",
    "descResumen": "",
    "categoria": ['todos', 'avena'],
    "nuevo": false,
    "visible": false,
    "linkCatalogo": "https://wa.me/p/3040309089365303/5491120518253"
  },
  {
    "nombre": "Avena Frutal",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Para los que quieren disfrutar de un alfajor distinto, te presentamos una alternativa sin cobertura de chocolate. Dos galletita de avena con cacao y relleno con dulce de membrillo.<br>Peso neto 70grs.",
    "descResumen": "Alfajor de cacao y avena, relleno con dulce de membrillo.<br>Peso neto 70grs.",
    "categoria": ['todos', 'avena', 'frutales'],
    "nuevo": false,
    "visible": false,
    "linkCatalogo": "https://wa.me/p/3584773164969219/5491120518253"
  },
  {
    "nombre": "Frutos Rojos",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Alfajor de Frutos Rojos (frutilla, arándanos, mora, frambuesa), es una mezcla de gustos y sensaciones increíbles!!!! El baño de chocolate semiamargo, las suaves galletitas sabor a vainilla con un toque de cacao les da a éste alfajor una combinación perfecta.<br>Peso neto 70grs.",
    "descResumen": "Alfajor con una delicada cantidad de cacao amargo, relleno con un dulce de frutos rojos artesanal (frutilla, arándanos, mora, frambuesa) y bañado con chocolate semiamargo.<br>Peso neto 70grs.",
    "categoria": ['todos', 'frutales'],
    "nuevo": false,
    "visible": true,
    "linkCatalogo": "https://wa.me/p/5304282312977837/5491120518253"
  },
  {
    "nombre": "Corazón de Frutos Rojos",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Una combinación perfecta de dulce de leche con un exquisito dulce artesanal de frutos rojos en el centro. Las dos suaves galletitas con una delicada cantidad de cacao amargo bañadas con chocolate semiamargo son una mezcla de gustos increíbles!!!<br>Peso neto 70grs.",
    "descResumen": "Alfajor con una delicada cantidad de cacao amargo, relleno con dulce de leche y un dulce de frutos rojos artesanal en el centro. Bañado con chocolate semiamargo.<br>Peso neto 70grs.",
    "categoria": ['todos', 'frutales'],
    "nuevo": true,
    "visible": true,
    "linkCatalogo": "https://wa.me/p/8431388843604552/5491120518253"
  },
  {
    "nombre": "Manzana",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Este alfajor nos trae el exquisito sabor a manzana. La producción de este dulce, es elaborado artesanalmente sin químicos ni conservantes. Viene con un elegante baño de chocolate blanco, que le da una excelente combinación de sensaciones a nuestro paladar.<br>Peso neto 70grs.",
    "descResumen": "Alfajor con una delicada cantidad de cacao amargo, relleno con dulce de manzana artesanal y bañado con chocolate semiamargo.<br>Peso neto 70grs.",
    "categoria": ['todos', 'frutales'],
    "nuevo": false,
    "visible": true,
    "linkCatalogo": "https://wa.me/p/3562345450537997/5491120518253"
  },
  {
    "nombre": "DDL Sin Azúcar",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Alfajor sin agregado de azúcar.<br>Las tapas endulzadas con Stevia convierten a este alfajor en una excelente opción saludable para aquellas personas que no pueden consumir azúcar.<br><br>🏆 ¡2do puesto en la Fiesta Provincial del alfajor artesanal de Rawson de 2024!<br><br><span class='small'>Ingredientes: Harina de algarroba, harina de avena y harina de arroz, relleno con de dulce de leche con Stevia. Bañado con cobertura de cacao amargo al 70%.<br>Peso neto 70grs.</span>",
    "descResumen": "Alfajor endulzado con stevia, relleno con dulce de leche sin azúcar y bañado con chocolate amargo.<br>Peso neto 70grs.",
    "categoria": ['todos', 'saludables'],
    "nuevo": true,
    "visible": true,
    "linkCatalogo": "https://wa.me/p/7712145038887687/5491120518253"
  },
  {
    "nombre": "Membrillo Negro",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Excelente alfajor de fruta. Para los más exigente, éste alfajor se destaca por su gran cantidad de dulce de membrillo, bañado con chocolate semiamargo.<br>Peso neto 70grs.",
    "descResumen": "Alfajor con una delicada cantidad de cacao amargo, relleno con dulce de membrillo y bañado con chocolate blanco.<br>Peso neto 70grs.",
    "categoria": ['todos', 'frutales'],
    "nuevo": false,
    "visible": true,
    "linkCatalogo": "https://wa.me/p/5071317579609956/5491120518253"
  },
  {
    "nombre": "Membrillo Blanco",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Excelente alfajor de fruta. Otra alternativa de éste alfajor de membrillo, es que la diferencia en este caso es con chocolate blanco. Su increíble sabor deja una sensación suave en el paladar.<br>Peso neto 70grs.",
    "descResumen": "",
    "categoria": ['todos', 'frutales'],
    "nuevo": false,
    "visible": false,
    "linkCatalogo": "https://wa.me/p/5307116175973129/5491120518253"
  },
  {
    "nombre": "Merengue con Dulce de Leche",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "2 Galletitas de vainilla rellenas con dulce de leche y con una exquisita cobertura de merengue italiano.<br>Peso 70grs.",
    "descResumen": "Alfajor con una delicada cantidad de cacao amargo, relleno con dulce de leche y bañado con merengue italiano.<br>Peso neto 70grs.",
    "categoria": ['todos', 'merengue'],
    "nuevo": false,
    "visible": false,
    "linkCatalogo": "https://wa.me/p/4661400207319943/5491120518253"
  },
  {
    "nombre": "Merengue con Membrillo",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "2 galletitas de vainilla rellenas con dulce de membrillo y con una exquisita cobertura de merengue italiano.<br>Peso 70grs.",
    "descResumen": "",
    "categoria": ['todos', 'merengue'],
    "nuevo": false,
    "visible": false,
    "linkCatalogo": "https://wa.me/p/7920957281255043/5491120518253"
  },
  {
    "nombre": "Integral",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "100% Integral!!!! Dos galletitas con harina integral y cacao amargo, relleno con dulce de leche bañado con chocolate semiamargo.<br>Peso neto 70grs.",
    "descResumen": "",
    "categoria": ['todos', 'integral'],
    "nuevo": false,
    "visible": false,
    "linkCatalogo": "https://wa.me/p/5425917737421250/5491120518253"
  },
  {
    "nombre": "Cacao & Ron",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Alfajor con relleno de dulce de leche y un toque de Ron. Cubierto con una exquisita cobertura de chocolate amargo al 70%.<br>Peso neto 70grs.",
    "descResumen": "",
    "categoria": ['todos', 'chocolates'],
    "nuevo": false,
    "visible": true,
    "linkCatalogo": "https://wa.me/p/9007280292672901/5491120518253"
  },
  {
    "nombre": "Nuez",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Exquisito alfajor de vainilla con trocitos de nuez y relleno de dulce de leche. Cubierto con una exquisita cobertura de chocolate blanco.<br>Peso neto 70grs.",
    "descResumen": "",
    "categoria": ['todos', 'chocolates'],
    "nuevo": false,
    "visible": true,
    "linkCatalogo": "https://wa.me/p/8705545032888826/5491120518253"
  },
  {
    "nombre": "Caja por 6 alfajores",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Podes elegir los siguientes sabores:<br>Chocolate Suave, Blanco, Leche.<br>Avena, Avena Nevada, Avena Frutal.<br>Maicena, Maicena Bañada Negro o Blanco.<br>Dulce de Leche Merengue.<br>Membrillo Merengue.<br>Membrillo Negro o Blanco.<br>Integral.<br><br>Opcional: Chocolate Intenso y Frutos Rojos adicional por unidad.",
    "descResumen": "",
    "categoria": ['cajas'],
    "nuevo": false,
    "visible": true,
    "linkCatalogo": "https://wa.me/p/3049398341773716/5491120518253"
  },
  {
    "nombre": "Caja por 12 alfajores",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Podes elegir los siguientes sabores:<br>Chocolate Suave, Blanco, Leche.<br>Avena, Avena Nevada, Avena Frutal.<br>Maicena, Maicena Bañada Negro o Blanco.<br>Dulce de Leche Merengue.<br>Membrillo Merengue.<br>Membrillo Negro o Blanco.<br>Integral.<br><br>Opcional: Chocolate Intenso y Frutos Rojos adicional por unidad.",
    "descResumen": "",
    "categoria": ['cajas'],
    "nuevo": false,
    "visible": true,
    "linkCatalogo": "https://wa.me/p/3306268116107321/5491120518253"
  },
  {
    "nombre": "Mini Alfajores",
    "precioPagina": "$1200",
    "precioEvento": "$1400",
    "desc": "Tenes una fiesta, cumple, comunión o un evento especial donde queres agasajar a tus invitados??? Nosotros tenemos una buena opción para tú mesa dulce!!!!! Te presentamos nuestros exquisitos mini alfajores: Maicena, Chocolate Suave y Chocolate Blanco. Podes elegir la combinación que más te guste!!!<br><br>Presentación en caja de 12 unidades.",
    "descResumen": "",
    "categoria": ['cajas'],
    "nuevo": false,
    "visible": true,
    "linkCatalogo": "https://wa.me/p/4590362054365924/5491120518253"
  }
]