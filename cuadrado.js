/*
 * 
 * Esta es la clase de los cuadrados, en la cual se inicializarán, se actualizarán sus
 * posiciones, se dibujarán sobre pantalla y guardarán la posición x e y y el color
 * que tiene ese cuadrado.
 * 
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
	posx= enemigos[1][0];
	posy= enemigos[1][1];
	context.fillStyle= enemigos[1][2];
	context.fillRect (posx,posy,10,10);
    
  	
  
}

/* Esta función será utilizada cuando se requiera pintar un cuadrado de nuevo.
*Inicialmente tiene unos valores, por eso se utiliza inicializarCuadrado,
*pero dependiendo de las teclas pulsadas, los valores de las posiciones x e y
*serán diferentes. Esta función se encargará unicamente de pintar el cuadrado
*Será la funcion update la que se encargará de averiguar que posición debe
*ocupar el cuadrado.
*/

//el main creara una instancia de la clase EventosTec, i a la funcion pintarCuadrado le pasara la variable quiTeTorn, para saber si es aliado o enemigo
//esto está en fase de pruebas, ya que debe pintarlo con el color del cuadrado que sea y con la posición x e y que le corresponda, no 100 y 300.
//se ha hecho para verificar que en un caso facil y directo funcionara. Hay que cambiar esos 3 pequeños detalles


function pintarCuadrado(qui){
	
	var context=Inicio.ctx;
	if ( qui == "aliado"){           //quin=0, es un aliado
		
	//	context.fillStyle= personajes[0][2];
		context.fillStyle= "#0000FF";
		context.fillRect(100,300,10,10);
		 
	}
	else if (qui == "enemigo"){
		
		context.fillStyle= enemigos[1][2];
		context.fillRect(posx,posy,10,10);
		
	}
}

/*Esta función, tal como la he puesto funciona, es decir, si le paso "actual", que es la instancia a la clase que controla los true/false del teclado
 *y ahi le actualizo los valores y luego esos valores son utilizados, se ve como los valores han sido modificados y funciona, con lo cual debo tener
 *que pasarle cada vez la instancia a la clase. 
 */ 
function updateCuadrado (actual,posx,posy){
	var context=Inicio.ctx;
	actual.x= posx;
	actual.y= posy;
	context.fillStyle= "#FF0000";
	context.fillRect(actual.x,actual.y,10,10);
}
