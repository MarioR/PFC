/*
* CLASE MENÚ
*
* Esta es la clase principal, la que contiene el bucle principal.
* Tenemos las funciones necesarias para inicializar el juego, capturar los eventos que ocurran, redibujar el escenario
* actualizar los distintos jugadores, y la función menú, que es la que contiene el bucle.
*
*/


//Esta es la funcion que se encargará de inicializar todas las variables que "inicialmente" estén en juego.
function inicializacionJuego(){
	this.contenedor = new Array ();  //Esta variable contendrá la lista con los personajes creados
	this.contaje = 0;
	this.x = 0;
	this.y = 0;
	this.col = "#008080";
	this.perso = null;
	this.perso2 = null;
	this.perso3 = null;
	this.perso5 = null;
	
	this.a = 0;
	Inicio.init();
	//Es la función en la que está implementado el teclado, así se cargará la función y el teclado funcionará
	prueba();


}


//Esta es la "verdadera" función captura eventos
function capturaEventos(){
	
	//En esta parte aún no tiene mucha lógica utilizarlo, pero hago alguna cosa, para ver que funciona
		
	document.onmousedown = function(e){
		if(e.which == 1){

			perso5.updatepos(200,300);
			perso5.drawSquare(Inicio.ctx);
			
		}
	}
	
}


//Esta función actualizará los jugadores, recibe por parámetro la lista con los jugadores, "una var auxiliar" para saber el nº de jugadores

function actualizaJugadores(characters,cant){
	 this.num = 0;
	 this.aux = 0;
	 this.aux2 = 0;
 	 this.aux3 = 0;

	//El bucle tiene la gracia de la función, para cada jugador, miraré si tiene la variable X con el valor correspondiente a su cuadrado
	//y entonces le variaré la posición, ya que no irán todos los jugadores a la vez, será por turnos, primero uno, después otro,...
	for (this.aux = 0; this.aux <= cant; this.aux++){
		
		if(characters[this.aux].estado == 1){
			this.aux2 = this.aux;
			if (Tecles.keydown == true){
				characters[this.aux].moveDown();
				Tecles.keydown = false;
			}
			else{
				if(Tecles.keyup == true){
					characters[this.aux].moveUp();
					Tecles.keyup = false;
				}
				else{
					if(Tecles.keyright == true){
						characters[this.aux].moveRight();
						Tecles.keyright = false;
					}
					else{
						if(Tecles.keyleft == true){
							characters[this.aux].moveLeft();
							Tecles.keyleft = false;
						}
					}
				}
			}
		}//fin de 1er IF
		
	}//FIN DE FOR
	this.num = 0;
	characters[this.aux2].estado = this.num;
	this.aux2 = this.aux2 + 1;
	this.aux3 = this.contaje + 1;
	if(this.aux2 == this.aux3) {
		this.num = 1;
		characters[0].estado = this.num;
	}
	else{
		this.num = 1;
		characters[this.aux2].estado = this.num;
	}
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

		this.perso.drawSquare(context);
		this.perso2.drawSquare(context);
		this.perso3.drawSquare(context);
	
		this.perso5.drawSquare(context);
	
	
	
}

//Funcion de prueba que abre una ventana a la pagina indicada
function creaVentanaSecundariaPrueba(){
	
	window.open("opciones.html" , "ventana1" , "width=120,height=300,scrollbars=NO");
	
}


function ventanaInicial(){
	

	document.onmousedown = function(e){
		if(e.which == 1){

			menu();
			
		}
	}
	
}

//Tengo que poner la función menu, ya que sino no se ejecuta el prueba.html, porque no va
//De ahí que ponga dentro de la función el mainLoop y el setInterval.
function menu(){
	
	//Llamada a la función inicializacionJuego(), que carga los parametros y variables iniciales
	inicializacionJuego();

//	ventanaInicial();
	
/*	while (pruRat != 1){
	//	document.write("PARA COMENZAR, PULSA EL BOTON IZQUIERDO DEL RATON");
		
	}*/
	
	
	//Creacion de los personajes iniciales (pruebas, para ver que funcionan varios)
	//1º se crea el personaje
	//2º se le marca un estado
	//3º se almacena en el array de personajes
	//4º se incrementa una variable necesaria para el array
	//5º se dibuja el peronaje
	this.perso = new Character("#000080",100,100,this.contaje);
	this.perso.setestado(1);
	this.contenedor[this.contaje] = this.perso; //kreo k no es asi, pero es posible
	contaje ++;
	this.perso.drawSquare(Inicio.ctx);
	

	this.perso2 = new Character("#00FF00",0,200,this.contaje);
	this.perso2.setestado(0);
	this.contenedor[this.contaje] = this.perso2; //kreo k no es asi, pero es posible
	contaje ++;
	this.perso2.drawSquare(Inicio.ctx);
  



this.perso3 = new Character(this.col,this.x,this.y,this.contaje);
this.perso3.setestado(0);
this.contenedor[this.contaje] = this.perso3; //kreo k no es asi, pero es posible

contaje++;

this.perso5 = new Character("#C0C0C0",300,300,this.contaje);
this.perso5.setestado(0);
this.contenedor[this.contaje] = this.perso5; //kreo k no es asi, pero es posible



//Tal como lo tengo explicao con Jordi, esto es el PROGRAMA PRINCIPAL
/*El mainLoop está formado por 3 partes
* 1- Capturar entrada de eventos
* 2- Calcular nuevo estado de juego
* 3- Redibujar escenario
*/



//Esto si que va, pero hay que coordinar cuando hay que utilizarlo
redibujarEscenario();
capturaEventos();

var mainLoop = function () {
	
	actualizaJugadores(this.contenedor,this.contaje);
	this.perso3.setExperiencia();
	
	//Aqui deberá ir el comprobar si el juego ha terminado
	// Ahora es una manera simple, pero hago que se abra la pagina a continuación
	//Cuando toque, ya se cambiará o se modificará bien para lo que tengo que hacer
	if(Tecles.keyesc == true){
	//	window.open("http://www.desarrolloweb.com" , "ventana1" , "width=120,height=300,scrollbars=NO");
		Tecles.keyesc = false;
		creaVentanaSecundariaPrueba();
	}
	
	
	redibujarEscenario();
	
	
}

//Hace que se ejecute 25 veces por segundo
var mainLoopId = setInterval (mainLoop,25);
	
}