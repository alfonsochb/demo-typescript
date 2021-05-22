"use strict";
/* Ref tipos: https://developer.mozilla.org/es/docs/Web/API */
var elementMesagge = document.querySelector('#header');
var message = "Pruebas desde TypeScript";
message.toUpperCase();
elementMesagge.innerHTML = message;
console.log(message);
/* Retorna un entero aleatorio entre min (incluido) y max (excluido) */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
var hexaColorsValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
var elementInfo = document.querySelector('#message');
var btnAction = document.querySelector('#btnAction');
btnAction.addEventListener('click', function () {
    var hexaColor = "#";
    var numberRand;
    for (var i = 0; i < 6; i++) {
        numberRand = getRandomInt(0, hexaColorsValues.length);
        hexaColor += hexaColorsValues[numberRand];
        console.log("Iteración " + i + " el random number es: " + numberRand);
    }
    elementInfo.innerHTML = "El color hexadecimal generado es: " + hexaColor;
    document.body.style.backgroundColor = hexaColor;
    console.log("El color que se ha generado es: " + hexaColor);
});
