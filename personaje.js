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
