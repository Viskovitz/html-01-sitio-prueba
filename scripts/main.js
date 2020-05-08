// var miTitulo = document.querySelector('h1');
// miTitulo.innerHTML = 'Hello world!';

var miImage = document.querySelector('img');

miImage.onclick = function () {
    var miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/imagen_01.png') {
      miImage.setAttribute('src','images/imagen_04.png');
    } else {
      miImage.setAttribute('src', 'images/imagen_01.png');
    }
}

var miBoton = document.querySelector('button');
var miTitulo = document.querySelector('h1');

function establecerNombreUsuario() {
  var miNombre = prompt('Por favor, escribe tu nombre');
  localStorage.setItem('nombre', miNombre);
  miTitulo.textContent = 'Página de prueba, ' + miNombre;
}

if (!localStorage.getItem('nombre')) {
  establecerNombreUsuario();
}
else {
  var nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = 'Página de prueba, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
  establecerNombreUsuario();
}
