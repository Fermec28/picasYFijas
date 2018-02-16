$(document).ready(function(){

$("input").keypress(function(e){
		if(e.which == 13) {
        	console.log(this.value)
    	}        
    });

});

/*Falta definicion del Modelo
Encontrar las picas y fijas
Validaciones en el input que no sean iguales, que no existan >4 digitos
Definir la vista

*/