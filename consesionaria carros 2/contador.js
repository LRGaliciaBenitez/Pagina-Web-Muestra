const contador = document.getElementById('contador');

let intervalo;

function contadorFinal() {
    const fechaFinal = new Date('2024-12-24T23:59:59');
    const fechaActual = new Date();
    const diferencia = fechaFinal - fechaActual;

    if (diferencia <= 0) {
        clearInterval(intervalo);
        contador.textContent = '';
        return;
    }

    let segundos = Math.floor(diferencia / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    contador.textContent = `FALTAN: ${dias} días, ${horas} horas y ${minutos} minutos`;
}

contadorFinal();

intervalo = setInterval(contadorFinal, 1000);