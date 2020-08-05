var nombre = ['ana', 'maria', 'juana'];
var clubes = ['River', 'Racing', 'Flamengo', 'Atlanta', 'CASLA'];
function listarNombres(Array) {
    for (var _i = 0, Array_1 = Array; _i < Array_1.length; _i++) {
        var nombres = Array_1[_i];
        console.log("- " + nombres);
    }
}
//listarNombres(nombre)
//console.log('pusheamos')
//nombre.shift()
clubes.push('Sacachispas');
//splice elimina indices, tiene 2 parametros splice(donde arranca, cuantos borra)
clubes.splice(2, 1);
listarNombres(nombre);
console.log('--------');
listarNombres(clubes);
