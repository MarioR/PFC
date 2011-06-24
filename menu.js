
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





//Creo que me estoy liando al hacer esto. Por lo que creo entender ahora mismo, lo que el profe me dibujo para explicarme del personaje y el cuadrado
//es que lo que lo que yo llamo Cuadrado.js sería la clase personaje, y la clase cuadrado solo deberia tener posx,posy,color,tamaño (es lo que puso el)
//no tener las funciones en la clase cuadrado e intentar ligarlo todo a traves de la clase personaje


//Creo que para hacerlo seria crear el Character asi como esta puesto, que llama a la clase cuadrado dentro de ella, y que inserte el personaje en la posicion
// "x" de una tabla que se crea para guardar los personajes creados, así, cada vez que se mueva uno, se irá avanzando de posicion en la tabla
//createCharacter(col);




//Tal como lo tengo explicao con Jordi, esto es el PROGRAMA PRINCIPAL
var mainLoop = function () {
	
//	drawCharacter(quien);
//	updateCuadrado(x,y);
//	x= x+15;
//	y= y+30;
	
	
}

//Hace que se ejecute 25 veces por segundo
var mainLoopId = setInterval (mainLoop,25);
	
}