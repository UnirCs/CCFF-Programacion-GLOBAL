/**
 * Los mapas son colecciones clave-valor
 *
 * Tenemos una clave con la cual accederemos a una serie de valores
 * Las claves pueden ser de cualquier tipo y los valores tambien
 */

//Creacion de un mapa
let mapa = new Map();

let array = [1,2];

//Añadir elementos
mapa.set(1, "1");
mapa.set("saludo", "hola");
mapa.set("precio", 13.0);
mapa.set("array", array);
console.log(mapa);

//Obtener elementos
let elem1 = mapa.get(1);
let elemInexistente = mapa.get("despedida");
console.log(elem1);
console.log(elemInexistente);

//Preguntar si hay elementos
let hayElem1 = mapa.has(2);
let hayElemSaludo = mapa.has("saludo");
console.log(hayElem1);
console.log(hayElemSaludo);

//Podemos obtener todas las claves
console.log(mapa.keys());

//Podemos obtener todos los valores
console.log(mapa.values());