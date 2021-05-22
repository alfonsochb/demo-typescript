
/* Ref tipos: https://developer.mozilla.org/es/docs/Web/API */
let elementMesagge = document.querySelector('#header') as HTMLElement;
let message: string = "Pruebas desde TypeScript";
message.toUpperCase();
elementMesagge.innerHTML = message;
console.log( message );

/* Retorna un entero aleatorio entre min (incluido) y max (excluido) */
function getRandomInt(min:number, max:number) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const hexaColorsValues:string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];


let elementInfo = document.querySelector('#message')!;
let btnAction = document.querySelector('#btnAction') as HTMLButtonElement;
btnAction.addEventListener('click', function(){
    let hexaColor: string = "#";
    let numberRand: number;
    for( let i=0; i<6; i++ ){
        numberRand = getRandomInt(0, hexaColorsValues.length);
        hexaColor += hexaColorsValues[numberRand];
        console.log( "Iteración " + i + " el random number es: " + numberRand );
    }
    elementInfo.innerHTML = "El color hexadecimal generado es: " + hexaColor;
    document.body.style.backgroundColor = hexaColor; 
    console.log( "El color que se ha generado es: " + hexaColor ); 
});






