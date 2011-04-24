
//buscar en el otro ordenador como estaba la variable actual creada, ya que era lo k utilizaba para hacer un objeto
//no está, pero puedo guiarme por la variable init de la clase libreria.js, ya que ahí también hay algo parecido a lo que necesito aquí


var Square = 
{
	
	var x = 0;
	var y = 0;
	var color = null; //variable que indica el color del personaje
	var draw = false; //variable que indica si toca pintarse el cuadrado o no
					  // si es que si, llamará a la función correspondiente
	
}


function cuadrado (x, y, color){
	
	this.x= x;
	this.y= y;
	this.color= color;
	this.draw= draw();
	
}


function draw(){
	
	var context= Inicio.ctx;
	
	context.fillStyle= this.color;
	context.fillRect(this.x,this.y,10,10);
	
}

/*
 * Esta es la clase de los cuadrados, en la cual se inicializarán, se actualizarán sus
 * posiciones, se dibujarán sobre pantalla y guardarán la posición x e y y el color
 * que tiene ese cuadrado. 
 */

	var posx= 0;
	var posy= 0;

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
