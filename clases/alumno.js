var Alumno = /** @class */ (function () {
    function Alumno() {
    }
    //constructor es una funcion que se ejecuta cuando instanciamos la clase
    //El método constructor es un metodo especial para crear e inicializar un objeto creado a partir de una clase.
    //Un constructor puede utilizar la palabra clave super para llamar al constructor de una clase padre.
    Alumno.prototype.asignarValores = function (nombreParam, apellidoParam, edadParam) {
        this.nombre = nombreParam;
        this.apellido = apellidoParam;
        this.edad = edadParam;
    };
    Alumno.prototype.hablar = function () {
        console.log("Hola, mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad);
    };
    return Alumno;
}());
var alumno1 = new Alumno();
alumno1.nombre = 'Guido';
alumno1.apellido = 'Varela';
alumno1.edad = 39;
console.log(alumno1.hablar());
// let alumno2 = new Alumno()
// alumno2.nombre = 'Pepe'
// alumno2.apellido = 'Castro'
// alumno2.edad = 59
// console.log(alumno2.hablar())
var alumno3 = new Alumno();
alumno3.asignarValores('Maria', 'Garcia', 25);
alumno3.hablar();
var alumno4 = new Alumno();
alumno4.asignarValores('Pepe', 'Luis', 30);
alumno4.hablar();
