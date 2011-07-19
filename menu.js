
//Aqui voy a crear las funciones de inicializar, calcular nuevo estado del juego y redibujar escenario


//Esta es la funcion que se encargará de inicializar todas las variables que "inicialmente" estén en juego.
function inicializacionJuego(){
	
	this.contenedor = new Array ();  //Esta variable contendrá la lista con los personajes creados
	this.contaje = 0;
	this.x = 0;
	this.y = 0;
	this.col = "#11FF0C";
	this.perso = null;
	this.perso2 = null;
	this.perso3 = null;
	this.perso5 = null;
	this.a=0;
	this.b=0;
	Inicio.init();
	//Es la función en la que está implementado el teclado, así se cargará la función y el teclado funcionará
	prueba();


}

//Esta es la función que observará que tecla se ha pulsado, para realizar una acción u otra
function capturaEventosPRUEBA_PREVIA(){
	
	//POR LO QUE ENTIENDO, AQUI NO SE TRATARÁ CON EL TECLADO, SINO CON EL MOVIMIENTO DEL RATÓN
	//El teclado ya se trata en su clase. Otra función de esta clase "mezclara" las funciones para obtener el resultado
	
	if (contaje == this.perso.nump){
		
		if(Tecles.keydown == true){
			this.perso.moveDown();
			Tecles.keydown = false;
			contaje = 1;
		}
		else{
			if(Tecles.keyup == true){
				this.perso.moveUp();
				Tecles.keyup = false;
				contaje = 1;
			}
			else{
				if(Tecles.keyright == true){
					this.perso.moveRight();
					Tecles.keyright = false;
					contaje = 1;
				}
				else{
					if(Tecles.keyleft == true){
						this.perso.moveLeft();
						Tecles.keyleft = false;
						contaje = 1;
					}
				}
			}
		}
		
	}
	else {
		
		if (contaje == this.perso2.nump){
				if(Tecles.keydown == true){
					this.perso2.moveDown();
					Tecles.keydown = false;
					contaje = 2;
				}
				else{
					if(Tecles.keyup == true){
						this.perso2.moveUp();
						Tecles.keyup = false;
						contaje = 2;
					}
					else{
						if(Tecles.keyright == true){
							this.perso2.moveRight();
							Tecles.keyright = false;
							contaje = 2;
						}
						else{
							if(Tecles.keyleft == true){
								this.perso2.moveLeft();
								Tecles.keyleft = false;
								contaje = 2;
							}
						}
					}
				}
		}
		else{
			if (contaje == this.perso3.nump){
					if(Tecles.keydown == true){
						this.perso3.moveDown();
						Tecles.keydown = false;
						contaje = 3;
					}
					else{
						if(Tecles.keyup == true){
							this.perso3.moveUp();
							Tecles.keyup = false;
							contaje = 3;
						}
						else{
							if(Tecles.keyright == true){
								this.perso3.moveRight();
								Tecles.keyright = false;
								contaje = 3;
							}
							else{
								if(Tecles.keyleft == true){
									this.perso3.moveLeft();
									Tecles.keyleft = false;
									contaje = 3;
								}
							}
						}
					}
			}
			else{
				if (contaje == this.perso5.nump){
						if(Tecles.keydown == true){
							this.perso5.moveDown();
							Tecles.keydown = false;
							contaje = 0;
						}
						else{
							if(Tecles.keyup == true){
								this.perso5.moveUp();
								Tecles.keyup = false;
								contaje = 0;
							}
							else{
								if(Tecles.keyright == true){
									this.perso5.moveRight();
									Tecles.keyright = false;
									contaje = 0;
								}
								else{
									if(Tecles.keyleft == true){
										this.perso5.moveLeft();
										Tecles.keyleft = false;
										contaje = 0;
									}
								}
							}
						}
				}
			}
		}
		
	}
	
	
}

//Esta es la "verdadera" función captura eventos
function capturaEventos(){
	
	
	//Por lo que entiendo, ahora no se utiliza esto, esto irá cuando vaya el raton, que es cuando se hagan los diferentes estados (AGOSTO)
	//Pero podría hacer alguna cosilla, haciendo que si se pulsa el raton, se cree otro cuadrado
	
	document.onmousedown = function(e){
		if(e.which == 1){
			perso5.updatepos(200,300);
			perso5.drawSquare(Inicio.ctx);
			
		}
	}
	
	
	
}
//Lo programo sin saber si va todo hasta el final, ya que no funciona nada si esto está activo



/*
//Esta función actualizará los jugadores, recibe por parámetro la lista con los jugadores, "una var auxiliar" para saber el nº de jugadores
//y ¿la estructura del teclado? (si ya la tienen de por si, con Tecles.loquesea)
//characters = lista de jugadores,   cant = numero de jugadores
function actualizaJugadores(characters,cant){
	
	int aux = 0;
	
	//El bucle tiene la gracia de la función, para cada jugador, miraré si tiene la variable X con el valor correspondiente a su cuadrado
	//y entonces le variaré la posición, ya que no irán todos los jugadores a la vez, será por turnos, primero uno, después otro,...
	for (aux = 0; aux <= cant; aux++){
		
		if(characters[aux].estado == 1){
			if (Tecles.keydown == true){
				characters[aux].moveDown();
				Tecles.keydown = false;
			}
			else{
				if(Tecles.keyup == true){
					characters[aux].moveUp();
					Tecles.keyup = false;
				}
				else{
					if(Tecles.keyright == true){
						characters[aux].moveRight();
						Tecles.keyright = false;
					}
					else{
						if(Tecles.keyleft == true){
							characters[aux].moveLeft();
							Tecles.keyleft = false;
						}
					}
				}
			}
		}//fin de 1er IF
		
	}//FIN DE FOR
	
}
*/


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

//Tengo que poner la función menu, ya que sino no se ejecuta el prueba.html, porque no va
//De ahí que ponga dentro de la función el mainLoop y el setInterval y, fuera de él, inicializo
//las variables necesarias

function menu(){

	inicializacionJuego();

//Esta parte va
   // x= 45;
   //y= 60;
   // col = "#110044";
	this.perso = new Character("#AAFFCC",100,100,this.contaje);
	contenedor[this.contaje] = this.perso; //kreo k no es asi, pero es posible
	contaje ++;
	perso.drawSquare(Inicio.ctx);
	

	//x= 100;
	//y= 100;
	//col = "#CCFF02";
	this.perso2 = new Character("#000000",0,200,this.contaje);
	contenedor[this.contaje] = this.perso2; //kreo k no es asi, pero es posible
	
	
	contaje ++;

	this.perso2.drawSquare(Inicio.ctx);
  

//Tal como lo tengo explicao con Jordi, esto es el PROGRAMA PRINCIPAL
/*El mainLoop está formado por 3 partes
* 1- Capturar entrada de eventos
* 2- Calcular nuevo estado de juego
* 3- Redibujar escenario
*/

//x= 0;
//y= 0;
//col = "#AACC02";
this.perso3 = new Character(this.col,this.x,this.y,this.contaje);
contenedor[this.contaje] = this.perso3; //kreo k no es asi, pero es posible

contaje++;

this.perso5 = new Character("#28AC0D",300,300,this.contaje);
contenedor[this.contaje] = this.perso5; //kreo k no es asi, pero es posible


//Esto si que va, pero hay que coordinar cuando hay que utilizarlo
redibujarEscenario();
capturaEventos();

var mainLoop = function () {
	capturaEventosPRUEBA_PREVIA();
//	actualizaJugadores(this.contenedor,this.contaje);
	
//Con esto veo que funciona el teclado, pero debe estar en esta clase, sino no funciona
/*	if(Tecles.keydown == true){
		this.x = this.x+30;
		this.y = this.y+30;
	//A y B son dos variables creadas para comprobar si funciona bien la variable contaje, viendo que se incrementa
		this.a = this.a+5;
		this.b = this.b+5;		
		perso3.updatepos(this.x,this.y);
		perso3.drawSquare(Inicio.ctx);
		Tecles.keydown= false;
	}*/
	
	
	redibujarEscenario();
	
}

//Hace que se ejecute 25 veces por segundo
var mainLoopId = setInterval (mainLoop,25);
	
}