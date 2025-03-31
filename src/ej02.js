/* Importo la constante PI y la función sumar del módulo matematica. */
import {PI, sumar, restar, dividir, multiplicar, numeros} from './modules/matematica.js';
let total, numero1=10, numero2=20;

console.clear();
console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.
console.log("El array tiene los numeros: "+numeros);
total = sumar(numero1, numero2); // Uso la función sumar importada.
console.log(`sumar (${numero1}, ${numero2}) = ${total}`);
let total2=restar(numero1, numero2)
console.log(`restar (${numero1}, ${numero2}) = ${total2}`);
let total3=multiplicar(numero1, numero2)
console.log(`multiplicar (${numero1}, ${numero2}) = ${total3}`);
let total4=dividir(numero1, numero2)
console.log(`dividir (${numero1}, ${numero2}) = ${total4}`);
