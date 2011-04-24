/*
 * Para crear el vector de jugadores (buenos/malos), se hace lo siguiente
 * nombreVector = new Array (ble, bleb,blel,bleled);
 * donde ble sera nombreVector[0], bleb nombreVector[1],...
 * y despues para darle valor nombreVector[0]= "lo k se quiera";
 * 
 */
var numAliados= 1;
var i=0; 
personajes = new Array ('cuadrado','circulo');

enemigos = new Array ('circulo','cuadrado');

personajes[0]= new Array ('posx','posy','color');

/*con esto, si no voy errado, lo que hago es colocar en la posición
0 de los personajes, correspondiente al primer jugador, una posición
inicial (posx, posy) y también un color por defecto. Así, cada jugador
tendrá su posición inicial y color.

Puede que haya formas mejores de hacerlo, pero ahora no se como serían
*/

personajes[0][0]= 300;
personajes[0][1]= 0;
personajes[0][2]= "#AABBCC";


enemigos[0]= new Array ('posx','posy','color');
enemigos[0][0]= 0;
enemigos[0][1]= 490;
enemigos[0][2]= "#CCBBAA";



function inicializarJugador (){
  
  inicializarCuadrado ();  

}

//Tengo que poner la funciíon menu, ya que sino no se ejecutar el prueba.html, porque no va
//De ahí que ponga dentro de la función el mainLoop y el setInterval y, fuera de él, inicializo
//las variables necesarias

function menu(){

    var quien;	
	var x = 0;
	var y = 0;
	var col = "#11FF0C";
	quien= 'aliado';
	Inicio.init();
//	inicializarJugador();



	var cuadro = new cuadrado (0,0,"#11FFAC");

	cuadro.draw();




var mainLoop = function () {
	
//	drawCharacter(quien);
//	updateCuadrado(x,y);
//	x= x+15;
//	y= y+30;
		cuadro.draw();
	
	
}

//Hace que se ejecute 25 veces por segundo
var mainLoopId = setInterval (mainLoop,25);



//	drawCharacter(quien);


	//Esto será el bucle principal del juego

//	  while (EventosTec.keyesc=="false"){
		
		//quien= actual.quiTeTorn;
		//aqui tengo que controlar el refresco de pantalla (que no se como hacerlo todavía)
		//if (actual.quiTeTorn == 'aliado'){
		//	actual.quiTeTorn= 'enemigo';
		//}
		//if (actual.quiTeTorn == 'enemigo'){
		//	actual.quiTeTorn= 'aliado';
		//}
//		quien= 'enemigo';
//		drawCharacter(quien);
	//	actualizarCuadrado(actual);
	//	pintarCuadrado(quien);
//	}
	
	
}