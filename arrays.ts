/*Arrays 
arreglos 
vectores*/

var listadoNombres:Array<string> = ['Juana','Maria','Ana','Carmen']
console.log(listadoNombres[0])

var listadoNumeros:Array<number> = [15,25,89,12,47,695]
console.log(listadoNumeros[5])

interface Alumnos {
    nombre:string,
    edad:number
}

var listadoAlumnos:Array<Alumnos> = [
    {
        nombre:'Pepe',
        edad:20
    },{
        nombre:'Sofia',
        edad:22
    },{
        nombre:'Marcelo',
        edad:26
    }
]

console.log(listadoAlumnos)