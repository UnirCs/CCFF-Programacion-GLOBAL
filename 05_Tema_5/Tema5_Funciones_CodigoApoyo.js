/**
 * Las funciones se definen siempre al principio del código
 *
 * Nos permiten elaborar un codigo mas complejo y reutilizable
 *
 * function -nombreFuncion- (parametros) {
 *     codigo
 *
 *     return opcional
 * }
 */

/**
 * Paso por valor - numero es un tipo basico
 * @param numeros
 */
function doble(numero) {
    return numero = numero * 2;
}

/**
 * Paso por valor - numero es un tipo basico
 * @param numeros
 */
function esPositivo(numero) {

    return numero >= 0;
}

/**
 * Paso por referencia - numeros es un objeto
 * @param numeros
 */
function sumaPositivos(numeros) {

    let resultado = 0;
    for(let indice = 0; indice < numeros.length; indice++) {
        if(esPositivo(numeros[indice])) {
            resultado += numeros[indice];
        }
    }
    return resultado;
}

/**
 * Paso por referencia - numeros es un objeto
 * @param numeros
 */
function dividirEntre2(numeros) {

    let numerosNuevos = [];
    for(let indice = 0; indice < numeros.length; indice++) {
        numerosNuevos.push(numeros[indice] / 2);
    }
    return numerosNuevos;
}

let numero = 2;
let numeroDoble1 = doble(numero);
doble(numero);
doble(numero);

console.log(numero);
console.log(numeroDoble1);


let array = [-1,2,4,8];
let arrayModificado = dividirEntre2(array);
let arrayModificado2 = dividirEntre2(array);
let arrayModificado3 = dividirEntre2(array);

console.log(array);
console.log(arrayModificado);
console.log(arrayModificado2);
console.log(arrayModificado3);
console.log(array);

console.log(esPositivo(numero));
console.log(sumaPositivos(array));


