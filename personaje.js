/*
* CLASE PERSONAJE
*
*	Esta clase está en un nivel inmediatamente superior al cuadrado. Es un OBJETO LÓGICO, pudiendo tratar con las acciones que un cuadrado puede
* realizar a lo largo de la partida, ya sea mover a la izquierda, derecha, atacar,...
*	Aún así, sigue sin tener que tener nociones sobre el teclado.
*
*/


function Character (color,posx,posy,num,context,src){
	
	this.nump = num;
	
	this.estado = null;
	
	this.vida = 100;              //Aunque esto es así, luego, dependiendo del nivel de dificultad, la vida se incrementará o decrementará
								  //Esto es una decisión de diseño, si llego a implementarlo
	this.px = posx;
	
	this.py = posy;
	
	this.pxini = this.px;
	
	this.pyini= this.py;
	
	this.experiencia = 0;     //Experiencia que tiene el personaje
	
	this.nivel = 1;  		  //Nivel que tiene el personaje
	
	this.siguienteNiv = 10;
	
	this.sq = new Square (color,this.px,this.py);
	
	//Creación de la imagen de cada personaje
	this.img2 = new ImageData('personaje'+num, context,src);
	this.img2.setPosition(this.px,this.py);
	this.img2.setSize(50, 50);
		
	this.drawSquare = function (cont){
		
		if(this.estado != 2){
			this.sq.draw(cont);
		}	

	}
	
	this.updatepos = function (x,y){
		this.px = x;
		this.py = y;	
		this.img2.setPosition(x,y);
		
		//this.sq.setposition(x,y);
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
		this.px = this.px-(50*this.nivel);
		this.img2.setPosition(this.px,this.py);
		//this.sq.setposx(this.sq.x - 1);
	}
	
	//Esta función actualiza la posición del cuadrado moviéndolo a la derecha cuando se tenga que pintar
	this.moveRight = function(){
		this.px = this.px+(50*this.nivel);
		this.img2.setPosition(this.px,this.py);
		//this.sq.setposx(this.sq.x + 1);
	}
	
	//Esta función actualiza la posición del cuadrado moviéndolo arriba cuando se tenga que pintar
	this.moveUp = function(){
		this.py = this.py-(50*this.nivel);
		this.img2.setPosition(this.px,this.py);
		//this.sq.setposy(this.sq.y - 1);
	}
	
	//Esta función actualiza la posición del cuadrado moviéndolo abajo cuando se tenga que pintar
	this.moveDown = function(){
		this.py = this.py+(50*this.nivel);
		this.img2.setPosition(this.px,this.py);
		//this.sq.setposy(this.sq.y + 1);
	}
	
	
	//Esta función pinta la imagen correspondiente al personaje
	this.drawImagen = function(){
		if(this.estado != 2){
			this.img2.draw();
		}
	}
	
	this.drawImagen2 = function(x,y){
		this.img2.draw2(x,y);
	}

	//Esta función se ejecuta cuando el personaje sube de nivel
	this.actualizarExp = function(){
		this.siguienteNiv = ((this.siguienteNiv) * (this.nivel)) + 1;		
	}
	
	//La función se actualiza para que cada vez que hiera al contrincante la función sea llamada
	this.setExperiencia = function(){
		
		this.experiencia = this.experiencia + 2;
		

		if (this.experiencia >= this.siguienteNiv){
			this.nivel = this.nivel + 1;
			this.vida = this.vida + 50;
			
			this.actualizarExp();  //parece que la llamada funciona, ya que la ejecución no se para

		}
		
	}
	
	//Esta función reinicia al personaje en su posición inicial, con vida, nivel y siguienteNiv iniciales
	this.reiniciarEstado = function(){
		this.px = this.pxini;
		this.py = this.pyini;
		this.vida = 100;
		this.nivel = 1;
		this.siguienteNiv = 10;
		this.estado = 0;
	}
	
	//Esta función es llamada cuando el personaje es atacado, con lo que pierde vida
	this.esAtacado = function (niv){
		
		if(this.vida <= 10){
			this.vida = 0;
			this.estado = 2;
	
			this.reiniciarEstado();  
			
		}
		else{
			this.vida = this.vida - (10*niv);
		}
	}

	//Esta función es requerida cuando el personaje ataca a otro
	this.attack = function(persoAtac){
		
		persoAtac.esAtacado(this.nivel);
		this.setExperiencia();
		if(persoAtac.estado == 2){
			this.setExperiencia();
		}
	}

	 
}
