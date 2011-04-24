//Atributos que tendrá cada personaje
Atributos = {
	estado: null,
	color: null,
	vida: 3,
	posx: 0,
	posy: 0
};


//función que llama a drawSquare con el código del personaje que mueve en ese turno 
function drawCharacter (codigoPersonaje){
	
	drawSquare(codigoPersonaje);
	
}



//No termino de comprender lo que quiere que haga, pero si no me equivoco, se refiere a que desde aquí, haya una función que cree un cuadrado, i en ese
//objeto cuadrado que se crea, guardar todas las variables necesarias, incluida la función de pintar


function createCharacter (color){
	
	createSquare(color);
	
}