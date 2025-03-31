/* Este es el módulo "matematicas" */
const PI = 3.14;
function sumar(x, y) {
 // No seas vago, acá hay que hacer el cuerpo de la función!!!
 return x+y
}
const multiplicar = (a, b) => a*b
;

const dividir=(a,b)=>a/b
function restar(x, y)
{
    return x-y
}
console.log(restar(2,3));


let numeros=["dos", "cuatro", "ocho", "diez"]

// Exporto todo lo que yo quiero exponer del módulo hacia el exterior.
export {PI, sumar, restar, dividir, multiplicar, numeros};
