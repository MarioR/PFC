/*
* CLASE CUADRADO
*
*  Esta clase es la encargada de gestionar el cuadrado, es decir, debe crearlo, pintarlo, actualizar su posicion,...
*  Tal como tengo entendido, esta clase se trata de un OBJETO DIBUJABLE, por lo que de lo único que se debe preocupar es de
* pintarse en el momento en el que toque, no debe saber nada acerca del teclado o de funciones de "nivel superior".
*
*/
function Square(color,posx,posy){

	//Estos 5 (por ahora) this.algo forman parte del constructor de la función Square, ya que como me dijo Jordi
	//el constructor viene implícito en la función, es decir, no hay que realizar una subfunción para el constructor.
		this.x = posx;

		this.y = posy;

		this.color = color;
		
		this.longitud = 10;   // Por definición tiene 10 unidades de longitud
		
		this.altitud = 10;    // Y 10 unidades de altitud


	//Esta función actualiza la posición del cuadrado	
	this.setposition = function (posx,posy){
		this.x = posx;
		this.y = posy;
	
	}
	
	//Estas dos funciones se utilizan para actualizar cuando se pulse el teclado, ya que la otra modifica los dos datos.
	this.setposx = function (posx){
		this.x = posx;
	}
	
	this.setposy = function (posy){
		this.y = posy;
	}
	
	//La funcion cambia el color del cuadrado  (tal como tengo pensado, cuando ataque y sea dañado, el personaje cambia de color)
	this.changecol = function (color1){
		this.color = color1;
	}

	//Esta función pinta el cuadrado
	this.draw = function (ctx){
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x,this.y,this.longitud,this.altitud);
	}

	
}


/*
*
*  LO PONGO ASÍ PARA QUE SE VEA MÁS
*
*	Todo lo que hay a partir de aquí hacia abajo eran funciones que iban haciendo cosas, solo que de la forma que hay que hacer las cosas
*	no hay que hacer nada de esto, así que esto no vale para nada.
*	
*
*/


/*Esta función inicializará los cuadrados jugadores, tanto aliados como enemigos, que formarán el juego
*Para ello la función necesitará saber de que lado están los cuadrados, para dibujarlos en una posición 
* o en otra. Así pues, la función necesita un dato identificador sobre el número de cuadrado y si es
* un aliado o enemigo.
*/

function inicializarCuadrado(){

	var context= Inicio.ctx;

	//Cuadrado aliado
    posx= personajes[0][0];
	posy= personajes[0][1];
    context.fillStyle= personajes[0][2];
	context.fillRect(posx,posy,10,10);

	//cuadrado enemigo
	posx= enemigos[0][0];
	posy= enemigos[0][1];
	context.fillStyle= enemigos[0][2];
	context.fillRect (posx,posy,10,10);
  
}

function drawSquare(qui){
	
	var context=Inicio.ctx;
	if ( qui == "aliado"){           //quin=0, es un aliado
		
	//	context.fillStyle= personajes[0][2];
		context.fillStyle= "#0000FF";
		context.fillRect(100,300,10,10);
		 
	}
	else if ( qui == "enemigo"){
		
		context.fillStyle= "#33FFAA";
		context.fillRect(15,30,10,10);
		
	}
}

function updateCuadrado (posx,posy){
	var context=Inicio.ctx;

	context.fillStyle= "#FF0000";
	context.fillRect(posx,posy,10,10);
}

function drawPrueba (square){
	
	var context = Inicio.ctx;
	
	context.fillStyle = square.color;
	context.fillRect(square.x,square.y,10,10);
	
	
	
}
