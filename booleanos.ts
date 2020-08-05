var descuento:boolean = true

var prod1 = 20
var prod2 = 30

var aceptaDescuento:boolean = (prod1 + prod2 == 50)
if(aceptaDescuento){
    console.log('El producto acepta descuentos')
}else{
    console.log("el producto no acepta descuentos")
}