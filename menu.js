
function inicializarJugador (){
  
  inicializarCuadrado ();  

}

//Tengo que poner la función menu, ya que sino no se ejecutar el prueba.html, porque no va
//De ahí que ponga dentro de la función el mainLoop y el setInterval y, fuera de él, inicializo
//las variables necesarias


function prueba(){
	document.onkeydown = function (key){

		var keynum;

		if(key.which){
			keynum = key.which;
		}

		switch (keynum){

			case 38:
				Tecles.keyup = false;
			break;
			case 37:
				Tecles.keyleft = false;
			break;
			case 40:
				Tecles.keydown = false;
			break;
			case 39:
				Tecles.keyright = false;
			break;
			case 27:
				Tecles.keyesc = false;
			break;
			case 112:  //letra P minúscula
				Tecles.keypause = false;
			break;
		}

	}
	
	document.onkeyup = function (key){

		var keynum;

		if(key.which){
			keynum = key.which;
		}

		switch (keynum){

			case 38:
				Tecles.keyup = true;
			break;
			case 37:
				Tecles.keyleft = true;
			break;
			case 40:
				Tecles.keydown = true;
			break;
			case 39:
				Tecles.keyright = true;
			break;
			case 27:
				Tecles.keyesc = true;
			break;
			case 112:  //letra P minúscula
				Tecles.keypause = true;
			break;
		}

	}
	
	
}
function menu(){

	


    var quien;	
	var x = 0;
	var y = 0;
	var col = "#11FF0C";
	quien= 'aliado';
	Inicio.init();
//	inicializarJugador();
	

//Esta parte va
	perso = new Character();
	x= 45;
	y= 60;
	col = "#00AA32";
	perso.createSquare(col,x,y);
	perso.drawSquare(Inicio.ctx);
	
	prueba();

	perso2 = new Character();
	x= 100;
	y= 100;
	col = "#CCFF02";
	perso2.createSquare(col,x,y);
	perso2.drawSquare(Inicio.ctx);

	

/*

//Las dos lineas de codigo que siguen son una fase intermedia. Interactuo directamente con la clase cuadrado, tengo que relacionarlo con la clase Personaje

//Aqui creamos un cuadrado nuevo
	perso = new Square(col,x,y);
	x= 45;
	y= 60;
	col = "#00AA32";
	perso1 = new Square(col,x,y);
	
//para probar que va, aqui se pintan los cuadrados
//Está puesto así para comprobar que el auxiliar suma bien, es decir, que debería tener en tableCont[0] el primer cuadrado y en tableCont[1] el segundo cuadrado
	perso.draw(Inicio.ctx);
	perso1.draw(Inicio.ctx);

*/


//Tal como lo tengo explicao con Jordi, esto es el PROGRAMA PRINCIPAL
/*El mainLoop está formado por 3 partes
* 1- Capturar entrada de eventos
* 2- Calcular nuevo estado de juego
* 3- Redibujar escenario
*/
var mainLoop = function () {
	
	
	
	if(Tecles.keydown == true){
		perso3 = new Character();
		x= 330;
		y= 212;
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