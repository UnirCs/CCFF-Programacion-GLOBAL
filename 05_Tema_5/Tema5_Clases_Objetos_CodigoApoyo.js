//Un objeto se declara de forma diferente a como trabajamos con tipos basicos:
let coche = {
    marca: "Ford",
    modelo: "Focus"
};

console.log(coche.modelo);

//Lo mas habitual es usarlos a partir de clases

class Coche {
    constructor(cadenaMarca, modelo, potencia) {
        this.marca = cadenaMarca;
        this.modelo = modelo;
        this.potencia = potencia;
    }

    obtenerMarca() {
        return this.marca;
    }

    descripcion() {
        return this.marca + " " + this.modelo + " " + this.potencia + " cv";
    }
}

let focus = new Coche("ford", "focus", 155);
let mondeo = new Coche("ford", "mondeo", 185);



let cadena = "hola";

console.log(focus.obtenerMarca());
console.log(focus.descripcion());


class Persona {

    constructor(edad, altura, genero, nombre, nacionalidad) {
        this.edad = edad;
        this.altura = altura;
        this.genero = genero;
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.librosAlquilados = [];
    }

    mayorEdad() {
        return this.edad >= 18;
    }

    alquilar(tituloLibro) {
        this.librosAlquilados.push(tituloLibro);
    }

}
let pepe = new Persona(13, 190, "M", "Pepe", "ESP");
pepe.alquilar("Cenicienta");
pepe.alquilar("Blancanieves");

console.log(pepe.librosAlquilados);


