$(document).ready(function(){

$("input").keypress(function(e){
		if(e.which == 13) {
        	console.log(this.value)
    	}        
    });

});


function Modelo (){
	this.numero = this.generadorNum()
}

Modelo.prototype.generadorNum = function() {
	var arr= ["0","1","2","3","4","5","6","7","8","9"]
	var arr2=[]
	for (var i = 0; i < 4; i++) {		
		var indice = Math.floor(Math.random()*arr.length)
		arr2.push(arr[indice])
		arr.splice(indice, 1)
	}
	return arr2
} 

Modelo.prototype.encuentraFijas = function (num) {
	var fijas=0
	for (var i in num) {
     if ( num[i]===this.numero[i]) fijas++ 
   }

   return fijas
}

Modelo.prototype.encuentraPicas = function(num) {	
  return this.numero.reduce(function(total, element ){  		
  	 	return num.includes(element) ? total+1 : total
  },0)
}

Modelo.prototype.picasYFijas = function(num){
	return {fijas: this.encuentraFijas(num),
			picas: this.encuentraPicas(num)- this.encuentraFijas(num) }
}

/*Falta definicion del Modelo
Encontrar las picas y fijas
Validaciones en el input que no sean iguales, que no existan >4 digitos
Definir la vista
*/

/*Modelo juego 

atributos {numero}
comportamientos{

constructor = asigna un numero nuevo con cifras diferentes

generadorNum= generador del numero con cifras diferentes

picasYFijas= devuelve el resultado de picas y fijas

encuentraPicas

encuentraFijas

picas- fijas = picas 

}


Vista juego

	planta los metodos de la vista, render de los resultados, alertas


*/




