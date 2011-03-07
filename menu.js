/*Vuelta a comenzar, suponiendo clases
esto es el menú, en el cual se centrarán
todas las operaciones
- Primero se llamara a la clase que contiene la funcion de teclado, la cual contiene valores true y false
- Segundo se llama a la clase que contiene la función leer de teclado, la cual, respecto de los valores true/false anteriores, determinara
    si se han modificado los valores
- Tercero se actualizan los valores del "personaje" correspondiente 
- Cuarto se dibuja el cuadrado en la nueva posición
*/



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

personajes[0][0]= 0;
personajes[0][1]= 0;
personajes[0][2]= "#AABBCC";


enemigos[1]= new Array ('posx','posy','color');
enemigos[1][0]= 0;
enemigos[1][1]= 490;
enemigos[1][2]= "#CCBBAA";



function inicializarJugador (){
  
  inicializarCuadrado ();  

}


function menu(){

    var quien;	
	quien= 'aliado';
	Inicio.init();

	drawCharacter(quien);

	//Esta linea va bien, no hay que tocarla
	updateCuadrado(actual,300,200);
	
	/*
	desde aquí hasta el siguiente comentario va bien
	*/
	
	inicializarJugador();	
	pintarCuadrado(quien);
	/*
	 * Hasta aquí funciona. Poniendo la instancia a la clase Teclado (variable EventosTec)
	 * y después llamando a la función pintarCuadrado (siendo quien siempre aliado) funciona
	 * 
	 * Ahora debería hacer que el "quien" variase de aliado a enemigo
	 * También tengo que hacer que cuando se pulse una tecla, las variables false/true
	 * cambien de valor. 
	 * Después de eso controlar que el cuadrado se mueva.
	 */
		
	//Esto será el bucle principal del juego
	//while (actual.keyesc=="false"){
	  while (EventosTec.keyesc=="false"){
		
		//quien= actual.quiTeTorn;
		//aqui tengo que controlar el refresco de pantalla (que no se como hacerlo todavía)
		//if (actual.quiTeTorn == 'aliado'){
		//	actual.quiTeTorn= 'enemigo';
		//}
		//if (actual.quiTeTorn == 'enemigo'){
		//	actual.quiTeTorn= 'aliado';
		//}
		quien= 'enemigo';
		drawCharacter(quien);
	//	actualizarCuadrado(actual);
	//	pintarCuadrado(quien);
	}
	
	
}