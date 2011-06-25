
function inicializarJugador (){
  
  inicializarCuadrado ();  

}

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
//	inicializarJugador();



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




//Tal como lo tengo explicao con Jordi, esto es el PROGRAMA PRINCIPAL
/*El mainLoop está formado por 3 partes
* 1- Capturar entrada de eventos
* 2- Calcular nuevo estado de juego
* 3- Redibujar escenario
*/
var mainLoop = function () {
	
	
	
	
	
	
//Esto de abajo era una prueba para comprobar que iba bien el mainLoop, que se repetia

//	drawCharacter(quien);
//	updateCuadrado(x,y);
//	x= x+15;
//	y= y+30;
	
	
}

//Hace que se ejecute 25 veces por segundo
var mainLoopId = setInterval (mainLoop,25);
	
}