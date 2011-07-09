/*
* CLASE PERSONAJE
*
*	Esta clase está en un nivel inmediatamente superior al cuadrado. Es un OBJETO LÓGICO, pudiendo tratar con las acciones que un cuadrado puede
* realizar a lo largo de la partida, ya sea mover a la izquierda, derecha, atacar,...
*	Aún así, sigue sin tener que tener nociones sobre el teclado.
*
*/

//Si mal no entiendo, creo que esto debe ser como el cuadrado, una función que englobe a una lista de subfunciones


function Character (color,posx,posy){
	
	this.estado = null;
	
	this.vida = 3;              //Aunque esto es así, luego, dependiendo del nivel de dificultad, la vida se incrementará o decrementará
	
	this.px = posx;
	
	this.py = posy;
	
	this.sq = new Square (color,this.px,this.py);
	// Me estoy quedando atascado, porque ahora no estoy seguro de seguir de una forma o de otra.
	// Desde el menú tengo que crear un Character, y despues, ¿con esa misma variable o con otra? se accederá a la subfuncion que cree el cuadrado.
	//No se si al character (aunque es lo mas probable) hay que pasarle los datos que se le pasan al cuadrado y almacenarlos en variables "auxiliares"
	
	
	//Creo que no tengo bien claro el concepto de cuando se crea una instancia desde menú a Character.
	//La última razon que le he buscado es que como el menú almacenara en una variable el Character que cree, ya tendrá su "this.sq" propio
	//no hay que preocuparse de que cuando se cree otro Character el valor se sobreescriba.
	
	this.drawSquare = function (cont){
		
		this.sq.draw(cont);
	}
	
	this.updatepos = function (x,y){
	
		this.sq.setposition(x,y);
	}
	
	//Esta función actualiza la posición del cuadrado moviéndolo a la izquierda cuando se tenga que pintar
	this.moveLeft = function (){
		//Pongo que le sumo 10 ya que lo que ocupa el cuadrado son 10 unidades
		this.sq.y = this.sq.y - 10;
	}
	
	//Esta función actualiza la posición del cuadrado moviéndolo a la derecha cuando se tenga que pintar
	this.moveRight = function(){
		
		this.sq.y = this.sq.y + 10;
	}
	
	//Esta función actualiza la posición del cuadrado moviéndolo arriba cuando se tenga que pintar
	this.moveUp = function(){
		
		this.sq.x = this.sq.x - 10;
	}
	
	//Esta función actualiza la posición del cuadrado moviéndolo abajo cuando se tenga que pintar
	this.moveDown = function(){
		
		this.sq.x = this.sq.x + 10;
	}
	
	//Aunque ahora no está implementado, la función y demás funciones que hagan cosas del estilo irán aquí

/*
	this.attack = function(){
		
	}
*/
	
}

//Atributos que tendrá cada personaje

Atributos = {
	estado: null,
	color: null,
	vida: 3,
	posx: 0,
	posy: 0
};



function createCharacter (color){
	
	Atributos.color = color;
	Atributos.posx = 0;
	Atributos.posy = 0;
	
	//Estas lineas toqueteadas por jordi
	this.square = new Square();
	this.square.createxxxxx();
	
	//Estas lineas tmb tocadas por jordi
	this.draw = function (){
	thsis.square.draw(Inicio.ctx);
	}
}





//Cosas de prueba para combrobar que va el Mainloop

//función que llama a drawSquare con el código del personaje que mueve en ese turno 
function drawCharacter (codigoPersonaje){
	
	drawSquare(codigoPersonaje);
	
}

