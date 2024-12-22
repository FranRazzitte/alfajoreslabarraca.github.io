var svg_ghost = document.getElementById('ghost');
var svg_sad = document.getElementById('sad');
var text = document.getElementById('text');

function hashnotfound() {
    var hashUrl = window.location.hash.substring(1);
    
    if (hashUrl) {
        svg_ghost.style.display = 'none';
        svg_sad.style.display = '';
        text.textContent = '¡Ups! El producto que intentas consultar no está disponible. 😔'
        console.error('Invalid Hash: «' + hashUrl + '»')
    } else {
        svg_ghost.style.display = '';
        svg_sad.style.display = 'none';
        text.textContent = '¡Ups! La página que intentas visitar no existe. 😔'
    }
}

hashnotfound();