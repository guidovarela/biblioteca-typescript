//definimos la interface
interface Clubes {
    id:number
    nombre:string
    fundacion:number
    campeonatos:number
}
//la instanciamos a una variable, para poder agregarle propiedades
let argentina:Clubes[] = []

argentina.push({
    id:1,
    nombre:'River Plate',
    fundacion:1901,
    campeonatos:38
})
argentina.push({
    id:2,
    nombre:'Boca',
    fundacion:1905,
    campeonatos:36
})
argentina.push({
    id:3,
    nombre:'Atlanta',
    fundacion:1913,
    campeonatos:1
})

console.log(argentina)

let buscarClub = argentina.find(function(club) {
    // return club.nombre.includes('Atlanta')
    return club.campeonatos == 36
})

console.log(buscarClub)