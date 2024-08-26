const modelosPorMarca = {
    Audi: ['A1', 'A2', 'A3', 'A4', 'A5', 'R8', 'Q1', 'Q2', 'Q3'],
    Mercedez: ['A', 'B', 'C', 'E', 'G', 'S', 'V', 'CLA', 'AMG GT'],
    Nissan: ['Sentra', 'Kicks', 'March', 'Altima', 'Frontier', 'NP300'],
    Honda: ['CR-V', 'Accord', 'City', 'Civic', 'BR-V', 'HR-V', 'Odissey'],
    Toyota: ['Yaris', 'Corolla', 'Camry', 'Avanza', 'Raize', 'Sienna', 'Sequoia HEV'],
    Mazda: ['Mazda2', 'Mazda3', 'Mazda CX-3', 'Mazda CX-30', 'Mazda CX-5', 'Mazda CX-50', 'Mazda MX-5'],
    Ford: ['Territory', 'Bronco', 'Bronco Sport', 'Edge', 'Explorer', 'Expedition', 'Mustang'],
    Bmw: ['BMW X1', 'BMW X2', 'BMW X3', 'BMW X4', 'BMW X5', 'BMW X6', 'BMW serie 3', 'BMW serie 2', 'BMW serie 4', 'BMW Z4'],
    Chevrolet: ['Aveo', 'Onix', 'Cavalier', 'Montana', 'Silverado', 'Cheyenne', 'Camaro']
}

const marcaSelect = document.getElementById('marca');
const modeloSelect = document.getElementById('modelo');

marca.addEventListener('change', function() {
    const marcaSeleccionada = marca.value;

    modeloSelect.innerHTML = '';

    if (marcaSeleccionada !== '') {
        modeloSelect.disabled = false;

        const opcionInicial = document.createElement('option');
        opcionInicial.textContent = 'Escoge un modelo...';
        opcionInicial.value = '';
        modeloSelect.appendChild(opcionInicial);

        modelosPorMarca[marcaSeleccionada].forEach(function(modelo) {
            const opcion = document.createElement('option');
            opcion.textContent = modelo;
            opcion.value = modelo;
            modeloSelect.appendChild(opcion);
        });
    } else {
        modeloSelect.disabled = true;
        
        const opcionDefault = document.createElement('option');
        opcionDefault.textContent = 'Primero escoge la marca...';
        opcionDefault.value = '';
        modeloSelect.appendChild(opcionDefault);
    }
})