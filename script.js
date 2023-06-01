var imagenesFondo = [
  "img/img4.png",
  "img/img5.png",
  "img/img6.png"
  // etc.
];

var indiceActual = 0;
var arrastrando = false;
var posicionInicial = 0;

document.body.onmousedown = function(event) {
  arrastrando = true;
  posicionInicial = event.clientX;
}

document.body.onmouseup = function(event) {
  arrastrando = false;
}

document.body.onmousemove = function(event) {
  if (arrastrando) {
    var delta = posicionInicial - event.clientX;
    if (delta > 50) { // arrastrar a la derecha
      indiceActual = (indiceActual + 1) % imagenesFondo.length;
      document.body.style.backgroundImage = 'url(' + imagenesFondo[indiceActual] + ')';
      arrastrando = false;
    } else if (delta < -50) { // arrastrar a la izquierda
      indiceActual = (indiceActual - 1 + imagenesFondo.length) % imagenesFondo.length;
      document.body.style.backgroundImage = 'url(' + imagenesFondo[indiceActual] + ')';
      arrastrando = false;
    }
  }
}
