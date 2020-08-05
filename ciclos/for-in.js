//for of
//instanciamos el 1er objeto, o sea cada ciclo, por cada item del 2do objeto
//instancia por cada uno de los elementos del objeto
// for (const iterator of object) {
// }
var items = [{
        nombre: 'Ana',
        apellido: 'Garcia'
    }, {
        nombre: 'Lupita',
        apellido: 'Juarez'
    }, {
        nombre: 'Jorge',
        apellido: 'Morales'
    }];
for (var i = 0; i < items.length; i++) {
    console.log(items[i].nombre + " " + items[i].apellido);
}
for (var indice in items) {
    console.log(parseInt(indice) + 1 + ") Hola para " + items[indice].nombre + " " + items[indice].apellido);
}
