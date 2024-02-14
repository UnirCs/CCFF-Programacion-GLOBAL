/*

Tema 3

- Operaciones
    - Suma, resta, multiplicacion, division, parentesis
    - Concatenar strings con +, concat(terms...), trim, toUpperCase, toLowerCase, replace
    - If/Else
        - Condiciones
            >, <, >=, <=, ===, !==, ==, !=
            AND, OR
            Bloques
 */

// Operaciones matematicas
let operadorUno = 100;
let operadorDos = 50;

console.log("Operador 1: " + operadorUno);
console.log("Operador 2: " + operadorDos);
let suma = operadorUno + operadorDos;
console.log("Resultado de la suma: " + suma);

console.log("Operador 1: " + operadorUno);
console.log("Operador 2: " + operadorDos);
let resta = operadorUno - operadorDos;
console.log("Resultado de la resta: " + resta);

console.log("Operador 1: " + operadorUno);
console.log("Operador 2: " + operadorDos);
let multiplicacion = operadorUno * operadorDos;
console.log("Resultado de la multiplicacion: " + multiplicacion);

console.log("Operador 1: " + operadorUno);
console.log("Operador 2: " + operadorDos);
let division = operadorUno / operadorDos;
console.log("Resultado de la division: " + division);

console.log("Operador 1: " + operadorUno);
console.log("Operador 2: " + operadorDos);
let resto = operadorUno % operadorDos;
console.log("Resto de division entera: " + resto);

console.log(5%2);
console.log(4%2);
console.log(50697424%23);

let hola = "hola";
let adios = "adios";
let holaYAdios = hola + " " + adios;
let holaConcat = hola.concat(" ", adios, "1", 200);

console.log(holaYAdios);
console.log(holaConcat);

let cadenaConEspacios = " jesus ";
console.log(cadenaConEspacios);
let cadenaSinEspacios = cadenaConEspacios.trim();
console.log(cadenaSinEspacios);

console.log(cadenaSinEspacios.toUpperCase());
let cadenaCarlos = " CARLOS 1";
console.log(cadenaCarlos.toLowerCase());

let cadenaCarlosH = cadenaCarlos.replace("1", "2");
console.log(cadenaCarlosH);

let numero = 123;
let numeroCadena = "" + numero;
console.log(typeof(numeroCadena));


//OPERACIONES CON BOOLEANOS BASICAS - AND Y OR

let verdadero = true;
let falso = false;
console.log(verdadero && verdadero); //AND
console.log(verdadero && falso);
console.log(falso && verdadero);
console.log(falso && falso);

console.log(verdadero || verdadero); //OR
console.log(verdadero || falso);
console.log(falso || verdadero);
console.log(falso || falso);

/*
5 - APROBADO
6 - APROBADO
7, 8 - NOTABLE
9 - SOBRESALIENTE
10 - MH
 */

let nota = 4;
let resultado;

if(nota <= 0 && nota <= 10) {
    if(nota < 5) {
        resultado = "SUSPENSO";
    } else {

        if(nota >= 5 && nota < 7) {
            resultado = "APROBADO";
        } else if(nota >= 7 && nota < 9) {
            resultado = "NOTABLE";
        } else if(nota >= 9 && nota < 10) {
            resultado = "SOBRESALIENTE";
        } else {
            resultado = "MH";
        }
    }
} else {
    resultado = "NOTA INVALIDA";
}

let textoCorreo;

if(resultado === "APROBADO" || resultado === "NOTABLE" ||resultado === "SOBRESALIENTE" ||resultado === "MH") {
    textoCorreo = "Enhorabuena has aprobado";
} else {
    textoCorreo = "Hay que estudiar mas";
}

if(resultado !== "SUSPENSO" || resultado !== "NOTA INVALIDA") {
    textoCorreo = "Enhorabuena has aprobado";
} else {
    textoCorreo = "Hay que estudiar mas";
}

console.log(resultado);

console.log("----")
let dos = 2;
let dosCadena = "2";
console.log(dos === dosCadena);
console.log(dos == dosCadena);

