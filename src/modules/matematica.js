/* Este es el módulo "matematicas" */
const PI = 3.14;
function sumar(x, y) {
 // No seas vago, acá hay que hacer el cuerpo de la función!!!
 return x+y
}
const multiplicar = (a, b) => {
 // No seas vago, acá hay que hacer el cuerpo de la función!!!
 a*b
};
const dividir=(a,b)=>{a/b}
function restar(x, y)
{
    return x-y
}

let numeros=["dos", "cuatro", "ocho", "diez"]

// Exporto todo lo que yo quiero exponer del módulo hacia el exterior.
export {PI, sumar, restar, dividir, multiplicar, numeros};
