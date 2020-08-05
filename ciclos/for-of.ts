//for of
//instanciamos el 1er objeto, o sea cada ciclo, por cada item del 2do objeto
//instancia por cada uno de los elementos del objeto
// for (const iterator of object) {
    
// }
let items = [{
    nombre:'Ana',
    apellido:'Garcia',
},{
    nombre:'Lupita',
    apellido:'Juarez',
},{
    nombre:'Jorge',
    apellido:'Morales'

}]

for (let i = 0; i < items.length; i++) {
    console.log(`${items[i].nombre} ${items[i].apellido}`)
}

for (const users of items) {
    console.log(`${users.nombre} ${users.apellido}`)
}