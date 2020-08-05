let nombre:string[] = ['ana','maria','juana']
let clubes:string[] = ['River','Racing','Flamengo','Atlanta','CASLA']

function listarNombres(Array){
    for (const nombres of Array) {
        console.log(`- ${nombres}`)
    }
}
//listarNombres(nombre)

//console.log('pusheamos')

//nombre.shift()
clubes.push('Sacachispas')
//splice elimina indices, tiene 2 parametros splice(donde arranca, cuantos borra)
clubes.splice(2,1)

listarNombres(nombre)
console.log('--------')
listarNombres(clubes)