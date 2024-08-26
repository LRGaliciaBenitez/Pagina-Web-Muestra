const imagenes = document.querySelectorAll('#imagenes-carros img');
const botones = document.querySelectorAll('#botones-carros button');

let indiceFoto = 0;

function cambiarImagen() {

    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style.display = 'none';
    }

    imagenes[indiceFoto].style.display = 'block';

    indiceFoto = (indiceFoto + 1) % imagenes.length;
}

cambiarImagen();

setInterval(cambiarImagen, 5000);