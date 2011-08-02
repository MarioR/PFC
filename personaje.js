/*
* CLASE PERSONAJE
*
*	Esta clase está en un nivel inmediatamente superior al cuadrado. Es un OBJETO LÓGICO, pudiendo tratar con las acciones que un cuadrado puede
* realizar a lo largo de la partida, ya sea mover a la izquierda, derecha, atacar,...
*	Aún así, sigue sin tener que tener nociones sobre el teclado.
*
*/


function Character (color,posx,posy,num){
	
	this.nump = num;
	
	this.estado = null;
	
	this.vida = 100;              //Aunque esto es así, luego, dependiendo del nivel de dificultad, la vida se incrementará o decrementará
								  //Esto es una decisión de diseño, si llego a implementarlo
	this.px = posx;
	
	this.py = posy;
	
	this.experiencia = 0;     //Experiencia que tiene el personaje
	
	this.nivel = 1;  		  //Nivel que tiene el personaje
	
	this.siguienteNiv = 10;
	
	this.sq = new Square (color,this.px,this.py);
	
	
	this.drawSquare = function (cont){
		
		if(this.estado != 2){
			this.sq.draw(cont);
		}	

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
	
	
	//PROBANDO SI ESTO VA
	//El programa no peta, así que debería ir, pero falta que Jordi conteste al mail para continuar
	//Como he llamado a la funcion desde el menú..., i sigue funcionando, debería funcionar todo
	
	this.actualizarExp = function(){
		this.siguienteNiv = ((this.siguienteNiv) * (this.nivel)) + 1;
		
		
	
		//Prueba tonta para ver que entra en esta función

	//	this.updatepos(400,400);

	}
	
	//Si ha eliminado a un enemigo ha de actualizar su experiencia
	this.setExperiencia = function(){
		
		
		this.experiencia = this.experiencia + 2;
		

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

	this.attack = function(persoAtac){
		
		persoAtac.esAtacado();
		
		if(persoAtac.estado == 2){
			this.setExperiencia();
		}
	}

	 
}
