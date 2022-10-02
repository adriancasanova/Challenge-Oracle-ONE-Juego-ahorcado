var palabras = ["abrigo", "camisa", "ropero", "trasto", "autoriza", "presente", "abogado", "mundo", "marca", "estrella", "estereo"];
var iteracionRandom =  Math.round(Math.random()*palabras.length);
var respuesta = ""; 
var xPosition = [];
var palabraCompleta = [];
var letrasPasadas = [];
var letraClickeada;
var n = 0;
function buscarPalabras(){
 for (var i = 0; i < iteracionRandom; i++) {
   // console.log(iteracionRandom)
    // console.log(palabras[iteracionRandom])    
     respuesta = palabras[iteracionRandom];
      console.log(respuesta);   

  } 
}

buscarPalabras()


var canvas = document.querySelector("canvas");
canvas.tabIndex = 1000;
/*function onKeyDown(event) {
const key = event.key; // "A", "1", "Enter", "ArrowRight"...
console.log("Presionada: " + key);
}; */

canvas.onkeydown = divertDirection; 
//canvas.onkeyup = divertDirection; 

function divertDirection(ev) {
    // console.log(respuesta[i]);  
    // var x = 50 * respuesta[i];
    // var x = xPosition;    
      letraClickeada = ev.key.toUpperCase();
      buscarLetra(ev.key)
    //  letrasPasadas.push(letraClickeada)
    //  console.log("Las letras ya pasadas son " + letrasPasadas)
    // escribirTexto(xPosition, 30, ev.key)

 }

 //register this event for widnow
//window.addEventListener("keydown", divertDirection, false); //ok
window.addEventListener("keyup", divertDirection, false);
//document.addEventListener('keydown', divertDirection);

//----------------------------------------------------------------



//procesar y enviar letra al checkearLetra


//-----------------------------------------------------------------

function dibujarLargoPalabra(x) {
    for (var i = 1; i <= respuesta.length; i++) {       
       dibujarRectangulo(x, 600, 30, 3, "blue")       
       x += 50;
      // console.log(respuesta.length)
    }      
}
dibujarLargoPalabra(50)

function escribirTexto(x , y, texto) {
  
    //console.log(xPosition)
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.font="25px Georgia";
    pincel.fillStyle="#00008B";    
    pincel.fillText(texto, x, y);    

}



function dibujarRectangulo(x, y, base, altura, color) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle=color;
    pincel.fillRect(x,y, base, altura);
    pincel.strokeStyle="black";
    pincel.strokeRect(x,y, base, altura);
}

function dibujarCirculo(x, y, radio, color) {
  var pantalla = document.querySelector("canvas");
  var pincel = pantalla.getContext("2d");
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2*3.14);
  pincel.fill();

}



function buscarLetra(letra) {
  var letraExiste = false;
//let letra = letraMinuscula.toUpperCase();
  
  if (/^[a-zA-Z]$/g.test(letra)) {
   // wordRegex = /^[A-zÑñ]*$/,
   // hangmanRegex = /^[A-z]$/
    letra.toUpperCase();
  for (var i = 0; i <= respuesta.length; i++) {     
     xPosition = i + 1;
     if (letra == respuesta[i]) {         
      var letraExiste = true;  
     escribirTexto(xPosition * 52, 580, letraClickeada)     
     palabraCompleta.splice(i,0,letra);
     var palabraLimpia = palabraCompleta.join('')
     
   //  console.log(palabraLimpia)
   if(palabraLimpia == respuesta) {
    document.getElementById("mensaje").innerHTML = "<h1 class='gano'> ¡Ganaste! <h1>";
    let refresh = document.getElementById('body');
    refresh.addEventListener('keydown', _ => {
                location.reload();
    })
     } 
     }   
   
    }            
    
    if (letraExiste == false) {   
     // letrasPasadas.push(letraClickeada)
    //  console.log("Las letras ya pasadas son " + letrasPasadas)  
 /*   for (var i = 0; i < letrasPasadas.length; i++) { 
      
      if (letrasPasadas[i] == letraClickeada) {
        escribirTexto(n * 20, 650, letraClickeada) 
        console.log("La letra ya existe")
      }
    } */


     
    //n++
    
    

     // escribirTexto(n * 20, 650, letraClickeada)     
      haPasado(letraClickeada)
     // prueba(n) 
      } 

     
      
     /*   for (var i = 0; i < letrasPasadas.length; i++) { 
          if (letrasPasadas[i] !== letraClickeada && letraExiste == false) {
            n++     
            escribirTexto(n * 20, 650, letraClickeada)     
            prueba(n) 
            console.log("La letra ya existe")
          }
        } */
    
    
        
          


    // console.log("nX es igual a " + nX)
    // console.log("n es igual a " + n)
    }
  }
/*
   function letraEquivocada(letra){   
    for (var i = 0; i <= respuesta.length; i++) { 
      if (respuesta[i] != letra) {   
      escribirTexto(300, 150, letraClickeada);
      
      }
    }       
  } */

function haPasado(letraClickeada) {
  var yaPaso = false;
  // letra = letraClickeada;  

  for (var i = 0; i <= letrasPasadas.length; i++) {       
    if (letraClickeada == letrasPasadas[i]) {     
      yaPaso = true;        
    } 
  }
  if (yaPaso == false) {
    n++
    prueba(n);     
    
    letrasPasadas.push(letraClickeada)
    escribirTexto(n * 20, 650, letraClickeada) 
  }
   
  
  
  console.log(yaPaso)

      
}


  function agragarPalabra() {
    var palabra = document.querySelector("input");
    palabras.push(palabra.value)    
  }
 


  function dibujarAhorcado() {
   // var contador = 0;
    dibujarRectangulo(150, 450, 90, 3, "black")
    dibujarRectangulo(195, 250, 3, 200, "black")
    dibujarRectangulo(195, 250, 90, 3, "black")
    dibujarRectangulo(285, 250, 3, 40, "black")
    dibujarRectangulo(265, 290, 40, 3, "black")
   
/*
    var contador = 0;
    while(contador <= 2) {
      dibujarCirculo(286, 310, 15,"black")
      contador++
      
    }
    console.log("contador " + contador)
    //dibujarCirculo(286, 310, 15,"black")
    dibujarRectangulo(285, 315, 3, 70, "black")
    // brazo izquierdo
    pincel.lineWidth = 5;
        pincel.beginPath();
        pincel.strokeStyle = 'black';
        pincel.moveTo(287,335);
        pincel.lineTo(315,360);
        pincel.stroke();
        // brazo derecho
        pincel.beginPath();
        pincel.strokeStyle = 'black';
        pincel.moveTo(287,335);
        pincel.lineTo(254,360);
        pincel.stroke();
    // pierna izquierda
    pincel.beginPath();
    pincel.strokeStyle = 'black';
    pincel.moveTo(287,385);
    pincel.lineTo(315,405);
    pincel.stroke();
      
    // pierna derecha
    pincel.beginPath();
    pincel.strokeStyle = 'black';
    pincel.moveTo(287,385);
    pincel.lineTo(255,405);
    pincel.stroke();
    
    // Horca 
    dibujarRectangulo(265, 327, 40, 1, "black")
   
    
   
*/
  } 

  dibujarAhorcado()
  
 


  function prueba(n) {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
   /*
    pincel.fillStyle = "black";   
    pincel.beginPath();   
    pincel.moveTo(390,400);
    pincel.lineTo(400,410);
    pincel.lineTo(100,390);
    pincel.fill();
*/

// tronco

if(n == 1) {
  dibujarCirculo(286, 310, 15,"black")
   
}

//dibujarCirculo(286, 310, 15,"black")
if(n == 2) {
  dibujarRectangulo(285, 315, 3, 70, "black")   
}
if(n == 3) {
 // brazo izquierdo
pincel.lineWidth = 5;
pincel.beginPath();
pincel.strokeStyle = 'black';
pincel.moveTo(287,335);
pincel.lineTo(315,360);
pincel.stroke();

}

if(n == 4) {
    // brazo derecho
    pincel.beginPath();
    pincel.strokeStyle = 'black';
    pincel.moveTo(287,335);
    pincel.lineTo(254,360);
    pincel.stroke();
}
if(n == 5) {
// pierna izquierda
pincel.beginPath();
pincel.strokeStyle = 'black';
pincel.moveTo(287,385);
pincel.lineTo(315,405);
pincel.stroke();
}
if(n == 6) {
// pierna derecha
pincel.beginPath();
pincel.strokeStyle = 'black';
pincel.moveTo(287,385);
pincel.lineTo(255,405);
pincel.stroke();
}
if(n == 7) {
// Horca 
dibujarRectangulo(265, 327, 40, 1, "black")

document.getElementById("mensaje").innerHTML = "<h1> Fin del juego <h1>";


let refresh = document.getElementById('body');
refresh.addEventListener('keydown', _ => {
            location.reload();
})
}
  }

