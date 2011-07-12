
//Aqui voy a crear las funciones de inicializar, calcular nuevo estado del juego y redibujar escenario


//Esta es la funcion que se encargará de inicializar todas las variables que "inicialmente" estén en juego.
function inicializacionJuego(){

	this.contaje = 0;
	this.x = 0;
	this.y = 0;
	this.col = "#11FF0C";
	var perso = null;
	var perso2 = null;
	var perso3 = null;
	Inicio.init();
	//Es la función en la que está implementado el teclado, así se cargará la función y el teclado funcionará
	prueba();


}

//Esta es la función que observará que tecla se ha pulsado, para realizar una acción u otra
function capturaEventos(){
	
	
	
	//hacer una especie de contaje donde cada vez que se cree un cuadro, se compruebe con que cuadro se está tratando
	//podria hacerlo desde la clase menú, pero cada vez que creara un cuadro, tendría que pasarle la variable
	//Sería mejor que estuviese en la clase personaje, no aquí, pero estoy pensando en ello, a ver si se me ocurre
	
	
	//Pero ahora pienso que ese "dato" no es algo propio del personaje, por tanto, no debería tener nocion de quien es.
	//Debido a esto, creo que lo mejor será hacer lo que pensaba, crear una variable en inicializacionJuego y después
	//cada vez que se cree un personaje, se incrementará la variable.
	
	
	
	
	
}


//Esta es la función que se encargará de limpiar la pantalla, dibujar tablero, jugadores e interfaz.
function redibujarEscenario (){
//Aqui vamos a poner varios pasos
/*
* 1- Limpiar pantalla
* 2- Dibujar tablero
* 3- Dibujar jugadores/objetos/...
* 4- Dibujar interfaz usuario
*/


//1- Limpiar pantalla
//Esto se puede hacer facilmente con la funcion CLEARRECT() que proporciona canvas

var context = Inicio.ctx;
	//Esto va, pero tengo que coordinar el momento de utilizarlo, porque sino se borra la pantalla i no se sabe si va o no
	context.clearRect(0,0,500,500);
	//Poniendo esto ya va, hago que cada vez que se limpie la pantalla, se "repinte" el cuadrado
	//De hecho, es el punto 3- dibujar jugadores/objetos
	perso3.drawSquare(context);
	
	
	
	
	
}

//Tengo que poner la función menu, ya que sino no se ejecuta el prueba.html, porque no va
//De ahí que ponga dentro de la función el mainLoop y el setInterval y, fuera de él, inicializo
//las variables necesarias

function menu(){

	inicializacionJuego();

//Esta parte va
   // x= 45;
   //y= 60;
   // col = "#110044";
	perso = new Character(this.col,this.x,this.y,this.contaje);
	contaje ++;
	perso.drawSquare(Inicio.ctx);
	

	//x= 100;
	//y= 100;
	//col = "#CCFF02";
	perso2 = new Character(this.col,this.x,this.y,this.contaje);
	contaje ++;

	perso2.drawSquare(Inicio.ctx);
  

//Tal como lo tengo explicao con Jordi, esto es el PROGRAMA PRINCIPAL
/*El mainLoop está formado por 3 partes
* 1- Capturar entrada de eventos
* 2- Calcular nuevo estado de juego
* 3- Redibujar escenario
*/

//x= 0;
//y= 0;
//col = "#AACC02";
perso3 = new Character(this.col,this.x,this.y,this.contaje);
contaje ++;

//Esto si que va, pero hay que coordinar cuando hay que utilizarlo
redibujarEscenario();

var mainLoop = function () {
	
	
//Con esto veo que funciona el teclado, pero debe estar en esta clase, sino no funciona
	
	if(Tecles.keydown == true){
		x = x+30;
		y = y+30;
		perso3.updatepos(x,y);
		perso3.drawSquare(Inicio.ctx);
		Tecles.keydown= false;
	}
	redibujarEscenario();
	
//Esto de abajo era una prueba para comprobar que iba bien el mainLoop, que se repetia

//	drawCharacter(quien);
//	updateCuadrado(x,y);
//	x= x+15;
//	y= y+30;
	
	
}

//Hace que se ejecute 25 veces por segundo
var mainLoopId = setInterval (mainLoop,25);
	
}