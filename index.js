var palabras = [
  "abrigo",
  "camisa",
  "ropero",
  "trasto",
  "autoriza",
  "presente",
  "abogado",
  "mundo",
  "marca",
  "estrella",
  "estereo",
];
var iteracionRandom = Math.round(Math.random() * palabras.length);
var respuesta = "";
var xPosition = [];
var palabraCompleta = [];
var letrasPasadas = [];
var letraClickeada;
var n = 0;
function buscarPalabras() {
  for (var i = 0; i < iteracionRandom; i++) {
    respuesta = palabras[iteracionRandom];
    console.log(respuesta);
  }
}

buscarPalabras();

var canvas = document.querySelector("canvas");
canvas.tabIndex = 1000;

canvas.onkeydown = divertDirection;

function divertDirection(ev) {
  letraClickeada = ev.key.toUpperCase();
  buscarLetra(ev.key);
}

window.addEventListener("keyup", divertDirection, false);

function dibujarLargoPalabra(x) {
  for (var i = 1; i <= respuesta.length; i++) {
    dibujarRectangulo(x, 600, 30, 3, "blue");
    x += 50;
  }
}
dibujarLargoPalabra(50);

function escribirTexto(x, y, texto) {
  var pantalla = document.querySelector("canvas");
  var pincel = pantalla.getContext("2d");
  pincel.font = "25px Georgia";
  pincel.fillStyle = "#00008B";
  pincel.fillText(texto, x, y);
}

function dibujarRectangulo(x, y, base, altura, color) {
  var pantalla = document.querySelector("canvas");
  var pincel = pantalla.getContext("2d");
  pincel.fillStyle = color;
  pincel.fillRect(x, y, base, altura);
  pincel.strokeStyle = "black";
  pincel.strokeRect(x, y, base, altura);
}

function dibujarCirculo(x, y, radio, color) {
  var pantalla = document.querySelector("canvas");
  var pincel = pantalla.getContext("2d");
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2 * 3.14);
  pincel.fill();
}

function buscarLetra(letra) {
  var letraExiste = false;

  if (/^[a-zA-Z]$/g.test(letra)) {
    letra.toUpperCase();
    for (var i = 0; i <= respuesta.length; i++) {
      xPosition = i + 1;
      if (letra == respuesta[i]) {
        var letraExiste = true;
        escribirTexto(xPosition * 52, 580, letraClickeada);
        palabraCompleta.splice(i, 0, letra);
        var palabraLimpia = palabraCompleta.join("");

        if (palabraLimpia == respuesta) {
          document.getElementById("mensaje").innerHTML =
            "<h1 class='gano'> ¡Ganaste! <h1>";
          let refresh = document.getElementById("body");
          refresh.addEventListener("keydown", (_) => {
            location.reload();
          });
        }
      }
    }

    if (letraExiste == false) {
      haPasado(letraClickeada);
    }
  }
}

function haPasado(letraClickeada) {
  var yaPaso = false;

  for (var i = 0; i <= letrasPasadas.length; i++) {
    if (letraClickeada == letrasPasadas[i]) {
      yaPaso = true;
    }
  }
  if (yaPaso == false) {
    n++;
    prueba(n);

    letrasPasadas.push(letraClickeada);
    escribirTexto(n * 20, 650, letraClickeada);
  }

  console.log(yaPaso);
}

function agragarPalabra() {
  var palabra = document.querySelector("input");
  palabras.push(palabra.value);
}

function dibujarAhorcado() {
  dibujarRectangulo(150, 450, 90, 3, "black");
  dibujarRectangulo(195, 250, 3, 200, "black");
  dibujarRectangulo(195, 250, 90, 3, "black");
  dibujarRectangulo(285, 250, 3, 40, "black");
  dibujarRectangulo(265, 290, 40, 3, "black");
}

dibujarAhorcado();

function prueba(n) {
  var pantalla = document.querySelector("canvas");
  var pincel = pantalla.getContext("2d");

  if (n == 1) {
    dibujarCirculo(286, 310, 15, "black");
  }

  if (n == 2) {
    dibujarRectangulo(285, 315, 3, 70, "black");
  }
  if (n == 3) {
    // brazo izquierdo
    pincel.lineWidth = 5;
    pincel.beginPath();
    pincel.strokeStyle = "black";
    pincel.moveTo(287, 335);
    pincel.lineTo(315, 360);
    pincel.stroke();
  }

  if (n == 4) {
    // brazo derecho
    pincel.beginPath();
    pincel.strokeStyle = "black";
    pincel.moveTo(287, 335);
    pincel.lineTo(254, 360);
    pincel.stroke();
  }
  if (n == 5) {
    // pierna izquierda
    pincel.beginPath();
    pincel.strokeStyle = "black";
    pincel.moveTo(287, 385);
    pincel.lineTo(315, 405);
    pincel.stroke();
  }
  if (n == 6) {
    // pierna derecha
    pincel.beginPath();
    pincel.strokeStyle = "black";
    pincel.moveTo(287, 385);
    pincel.lineTo(255, 405);
    pincel.stroke();
  }
  if (n == 7) {
    // Horca
    dibujarRectangulo(265, 327, 40, 1, "black");

    document.getElementById("mensaje").innerHTML = "<h1> Fin del juego <h1>";

    let refresh = document.getElementById("body");
    refresh.addEventListener("keydown", (_) => {
      location.reload();
    });
  }
}
