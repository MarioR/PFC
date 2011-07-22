/*
* CLASE PERSONAJE
*
*	Esta clase está en un nivel inmediatamente superior al cuadrado. Es un OBJETO LÓGICO, pudiendo tratar con las acciones que un cuadrado puede
* realizar a lo largo de la partida, ya sea mover a la izquierda, derecha, atacar,...
*	Aún así, sigue sin tener que tener nociones sobre el teclado.
*
*/

//Si mal no entiendo, creo que esto debe ser como el cuadrado, una función que englobe a una lista de subfunciones


function Character (color,posx,posy,num){
	
	this.nump = num;
	
	this.estado = null;
	
	this.vida = 100;              //Aunque esto es así, luego, dependiendo del nivel de dificultad, la vida se incrementará o decrementará
	
	this.px = posx;
	
	this.py = posy;
	
	this.experiencia = 0;
	
	this.nivel = 1;
	
	this.siguienteNiv = 10;
	
	this.sq = new Square (color,this.px,this.py);
	
	
	this.drawSquare = function (cont){
		
		this.sq.draw(cont);
	}
	
	this.updatepos = function (x,y){
	
		this.sq.setposition(x,y);
	}
	
	//Esta función actualiza el estado del cuadrado. Irá de 0 a 2
	//0 = en pausa
	//1 = ejecutándose
	//2 = muerto
	this.setestado = function(aux){
		this.estado = aux;
	}
	
	//Esta función actualiza la posición del cuadrado moviéndolo a la izquierda cuando se tenga que pintar
	this.moveLeft = function (){
		//Pongo que le sumo 10 ya que lo que ocupa el cuadrado son 10 unidades
		this.sq.setposx(this.sq.x - 1);
	}
	
	//Esta función actualiza la posición del cuadrado moviéndolo a la derecha cuando se tenga que pintar
	this.moveRight = function(){
		
		this.sq.setposx(this.sq.x + 1);
	}
	
	//Esta función actualiza la posición del cuadrado moviéndolo arriba cuando se tenga que pintar
	this.moveUp = function(){
		
		this.sq.setposy(this.sq.y - 1);
	}
	
	//Esta función actualiza la posición del cuadrado moviéndolo abajo cuando se tenga que pintar
	this.moveDown = function(){
		
		this.sq.setposy(this.sq.y + 1);
	}
	
	
	//Aunque ahora no está implementado, la función y demás funciones que hagan cosas del estilo irán aquí
	
	
	//PROBANDO SI ESTO VA
	
	this.actualizarExp = function(){
		this.siguienteNiv = ((this.siguienteNiv) * (this.nivel)) + 1;
	}
	
	//Si ha eliminado a un enemigo ha de actualizar su experiencia
	this.setExperiencia = function(){
		
		//Aquí hará falta diferenciar entre niveles que tengan los personajes
		//¿¿¿¿¿no termino de entender el comentario de arriba ... ?????
		
		this.experiencia = this.experiencia + 2;
		
		//Si la experiencia es mayor a 10, subirá de nivel. 
		/* 
		* No se como ponerlo, pero de momento cada vez que suba de nivel, la experiencia será igual a 0 y subirá el numero de puntos a subir
		* para alcanzar el siguiente nivel
		
		
		Se me ocurre poner una funcion que cada vez k suba de nivel, se ponga un dato de "siguiente nivel" aumente, así cada vez habrá más
		"muertes" para poder ganar experiencia y subir.
		
		Lo que no me termina de convencer es crear una función interna, y llamarla desde dentro de esta función, lo que no se si irá bien o no
		
		 
		*/
		if (this.experiencia >= this.siguienteNiv){
			this.nivel = this.nivel + 1;
			//Llamar a la "subfunción" siguiente nivel, para que actualice la cantidad this.siguienteNiv, así cada vez le costará 
			//más subir de nivel
			this.actualizarExp();  //parece que la llamada funciona, ya que la ejecución no se para

		}
		
	}
	
	//Si es atacado, pierde vida
	this.esAtacado = function (){
		
		if(this.vida <= 10){
			this.vida = 0;
			this.estado = 2;
		}
		else{
			this.vida = this.vida - 10;
		}
	}
/*
	this.attack = function(){
		
	}
	
	port aventura 6, 10, 13, 26, 29, 32, 33, 40, 64
	
*/
	 
}
