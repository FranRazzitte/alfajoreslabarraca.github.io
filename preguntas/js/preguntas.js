// CANT. ALFAJORES VISIBLES

const cantAlfajores = document.getElementById('numAlfajores');
var numAlfajores = 0

alfajores.forEach(sabor => {
    if (sabor.visible && sabor.category.includes('todos')) {
    numAlfajores += 1;
    }
})
cantAlfajores.textContent = numAlfajores;