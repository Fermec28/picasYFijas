
/*Utilitarios*/

function Repiten(arr){
	/*necesita obligatoriamente un arreglo para usar pop*/
	var x= arr.pop()
	if (arr.includes(x)){
		return true
	}
	else if (arr.length <= 0){
		return false
	}
	else{
		return Repiten(arr)
	}
}

/*--------Modelo-------------*/
function Modelo (){
	this.numero = this.generadorNum().toString()
	console.log(this.numero)
	
}

Modelo.prototype.newNum = function(){
	this.numero = this.generadorNum().toString()
	console.log(this.numero)
}

Modelo.prototype.generadorNum = function() {
	var arr= ["0","1","2","3","4","5","6","7","8","9"]
	var arr2= ""
	for (var i = 0; i < 4; i++) {		
		var indice = Math.floor(Math.random()*arr.length)
		arr2 =arr2 + arr[indice]+""
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
	
  return this.numero.split("").reduce(function(total, element ){  		
  	 	return num.includes(element) ? total+1 : total
  },0)
}

Modelo.prototype.picasYFijas = function(num){
	
	return {num: num,
			fijas: this.encuentraFijas(num),
			picas: this.encuentraPicas(num)- this.encuentraFijas(num) }
}

/*-----vista ---*/
function View(){}

View.prototype.addColumn = function(picasyFijas){
	$("#table").append("<tr><td>"+picasyFijas.num+"</td><td>"+picasyFijas.picas+"</td><td>"+picasyFijas.fijas+"</td></tr>")
}
View.prototype.limpiaTabla = function(){

	$("tbody tr").remove()
}

View.prototype.showGameOver= function(){
	$("#gameover").show()
}

View.prototype.showalert= function(){
	$("span").css("color","red")
}

View.prototype.hidealert= function(){
	$("span").css("color","black")
}

/*--- Controlador ---*/
function Controller(model,view){
	this.model= model
	this.view= view	
}

Controller.prototype.init= function(){
	controller= this
	$("input").keypress(function(e){
		if(e.which == 13) {			
        	if (this.value.toString().length !== 4 || Repiten(this.value.toString().split(""))){

        		controller.view.showalert()
        	}
        	else{
        		controller.view.hidealert()
        		controller.view.addColumn(controller.model.picasYFijas(this.value.toString()))
        		if(controller.model.picasYFijas(this.value.toString()).fijas == 4){
        			controller.view.showGameOver()
        		}
        	}

        	$(this).val("")  
    	} 
    })

    $("#button").on("click",function(){
    	controller.view.limpiaTabla()
    	controller.model.newNum()
    	$("#gameover").hide()
    })
}


$(document).ready(function(){
	juego= new Controller(new Modelo(), new View())
	juego.init()
});


