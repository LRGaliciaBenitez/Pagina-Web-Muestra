const botonMenu = document.getElementById('menu-opciones');
const menuLateral = document.getElementById('menuLateral');

botonMenu.addEventListener('click', function() {
    if(menuLateral.style.left === '-200px') {
        menuLateral.style.left = '0';
        botonMenu.innerHTML = '<i class="bi bi-arrow-left-short"></i>';
    } else {
        menuLateral.style.left = '-200px';
        botonMenu.innerHTML = '<i class="bi bi-list"></i>';
    }
})