const botonMision = document.getElementById('boton-mision');
const botonVision = document.getElementById('boton-vision');
const botonValores = document.getElementById('boton-valores');

const parrafoMision = document.getElementById('parrafo-mision');
const parrafoVision = document.getElementById('parrafo-vision');
const parrafoValores = document.getElementById('parrafo-valores');


botonMision.addEventListener('click', function() {
    if (parrafoMision.style.display === 'none') {
        parrafoMision.style.display = 'block';
        botonMision.innerHTML = '<i class="bi bi-arrow-up-short"></i>';
    } else {
        parrafoMision.style.display = 'none';
        botonMision.innerHTML = '<i class="bi bi-arrow-down-short"></i>';
    }
})

botonVision.addEventListener('click', function() {
    if (parrafoVision.style.display === 'none') {
        parrafoVision.style.display = 'block';
        botonVision.innerHTML = '<i class="bi bi-arrow-up-short"></i>';
    } else {
        parrafoVision.style.display = 'none';
        botonVision.innerHTML = '<i class="bi bi-arrow-down-short"></i>';
    }
})

botonValores.addEventListener('click', function() {
    if (parrafoValores.style.display === 'none') {
        parrafoValores.style.display = 'block';
        botonValores.innerHTML = '<i class="bi bi-arrow-up-short"></i>';
    } else {
        parrafoValores.style.display = 'none';
        botonValores.innerHTML = '<i class="bi bi-arrow-down-short"></i>';
    }
})