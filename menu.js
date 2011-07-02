
//Tengo que poner la función menu, ya que sino no se ejecutar el prueba.html, porque no va
//De ahí que ponga dentro de la función el mainLoop y el setInterval y, fuera de él, inicializo
//las variables necesarias



function menu(){

	


    var quien;	
	var x = 0;
	var y = 0;
	var col = "#11FF0C";
	quien= 'aliado';
	Inicio.init();
	
	tec = new prueba();

//Esta parte va
	perso = new Character();
	x= 45;
	y= 60;
	col = "#00AA32";
	perso.createSquare(col,x,y);
	perso.drawSquare(Inicio.ctx);
	

	perso2 = new Character();
	x= 100;
	y= 100;
	col = "#CCFF02";
	perso2.createSquare(col,x,y);
	perso2.drawSquare(Inicio.ctx);
  


//Tal como lo tengo explicao con Jordi, esto es el PROGRAMA PRINCIPAL
/*El mainLoop está formado por 3 partes
* 1- Capturar entrada de eventos
* 2- Calcular nuevo estado de juego
* 3- Redibujar escenario
*/
perso3 = new Character();
	x= 0;
	y= 0;
var mainLoop = function () {
	
	
//Con esto veo que funciona el teclado, pero debe estar en esta clase, sino no funciona
	
	if(tec.keydown == true){
		x = x+30;
		y = y+30;
		col = "#AACC02";
		perso3.createSquare(col,x,y);
		perso3.drawSquare(Inicio.ctx);
	}
	
	
//Esto de abajo era una prueba para comprobar que iba bien el mainLoop, que se repetia

//	drawCharacter(quien);
//	updateCuadrado(x,y);
//	x= x+15;
//	y= y+30;
	
	
}

//Hace que se ejecute 25 veces por segundo
var mainLoopId = setInterval (mainLoop,25);
	
}