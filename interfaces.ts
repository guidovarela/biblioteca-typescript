//Interfaces
//Una interface es un conjunto de definiciones en las cuales puedes poner atributos y métodos, más no inicializarlos. 
//permite seguir una estructura estandar para los objetos

interface Personas {
    nombre:string,
    apellido:string,
    anioNac:number,
    peso:number
}

//la variable hereda las propiedades de la interface
var persona1: Personas = {
    nombre: 'Maria',
    apellido: 'Garcia',
    anioNac: 1999,
    peso: 69,
}

console.log(persona1)
