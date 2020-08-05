//Objetos
// var objeto = {propiedad : valor,}
var persona = {
    nombre: 'Guido',
    apellido: 'Varela',
    anioNac: 1981,
    peso: 95
};
var edad = new Date().getFullYear();
console.log("Nombre: " + persona.nombre + " " + persona.apellido);
console.log("Edad: " + (edad - persona.anioNac));
