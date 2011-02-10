/*
 * Esta clase es la que se encargará de controlar las teclas pulsadas. 
 * En esta clase estarán las funciones onkeyDown y similares, las necesarias para ver cuando se ha pulsado una tecla. 
 * También tendrá que contener una instancia a la clase Teclado, la cual contiene los valores true/false de las teclas 
 * en las cuales debes cambiar sus valores cuando se pulsan.
 *
 */



function teclear (actual){

//preparo al objeto para que capture el evento keydown

document.captureEvents(Event.keydown);


//defino la función que manejará el evento

function manejador (e){
	
/*	if (e.which == 40){
		actual.keydown = true;
	    alert ("Se ha pulsado la tecla " + e.type);
	    return true;
	}
	if (e.which == 39){
		actual.keyright = true;
		return true;
	}
	if (e.which == 38){
		actual.keyup = true;
		return true;
	}
	if (e.which == 37){
		actual.keyleft = true;
		return true;
	}
	*/
	alert ( "Se ha pulsdo la tecla" + e.type );
	updateCuadrado(actual,20,300);
	
	return true;
	
}

document.onKeyDown = manejador;

}







function observar (actual){	
/*
document.onkeydown = function (key){
	
	if (key.which == 40){
		actual.keydown = false;
	}
	if (key.which == 39){
		actual.keyright = false;
	}
	if (key.which == 38){
		actual.keyup = false;
	}
	if (key.which == 37){
		actual.keyleft = false;
	}
	
}
*/

/*no termino de ver claro esto. Si lo único que hace es cambiar de false a true i viceversa,
 *no debería sumar o restar las posiciones x e y de los cuadrados, más que eso se haría en el 
 *main o en alguna otra clase, pero aquí no.
 *En cambio, si aquí se modifican los valores de x e y, ¿También son necesarios cambiar de false
 *a true? ¿No valdría simplemente con que cuando se ha pulsado la tecla, el valor en cuestrion se
 *sume o se reste las unidades correspondientes?
 * ESTO QUIERO PREGUNTARLO, aunque si funciona teniendo las dos cosas...
*/

document.onkeyup = function (key){
	
	if (key.which == 40){
		
		actual.keydown = true;
		actual.y = actual.y+10;
		
	}
	if (key.which == 39){
		
		actual.keyright = true;
		actual.x = actual.x+10;
		
	}
	if (key.which == 38){
		
		actual.keyup = true;
		actual.y = actual.y-10;
		
	}
	if (key.which == 37){
		
		actual.keyleft = true;
		actual.x = actual.x-10;
		
	}
	if (key.which == 27){
		
		actual.keyesc = true;
		
	}
return true;	
}
}
